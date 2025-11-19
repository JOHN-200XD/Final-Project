const pg = [
    "img/add.png",
    "img/Arc.jpg",
    "img/battlefield-6.jpg",
    "img/kingdom-2.png",
    "img/R.E.P.O..jpg",
    "img/Peak.jpg"
];

let num = 0
function show() {
    document.getElementById("img").src = pg[num];
}
function black() {
    num-- 
    if (num < 0) num = pg.length - 1;
        show();
}
function netx() {
    num++ 
    if (num >= pg.length) num = 0;
    show();
}

