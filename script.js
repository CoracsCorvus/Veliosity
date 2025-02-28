const tabsBtns = document.querySelectorAll(".tabs__nav button");
console.log(tabsBtns);
const tabItems = document.querySelectorAll(".tabs__item");
console.log(tabItems);


// скрывает табы и убирает active у кнопок
function hideTabs() {
    tabItems.forEach(item => item.classList.add("hide"))
    tabsBtns.forEach(item => item.classList.remove("active"))
}


// показывает переданный номер таба и делает соответствующую кнопку активной

function showTab(index) {
    tabItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

//anchors

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth' //медленная прокрутка - то, ради чего и делали
        });
    });
})

