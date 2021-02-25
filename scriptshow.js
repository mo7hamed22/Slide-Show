var img = document.getElementById("img");
var scr = img.src;
var i = 1;
var slid;


function Next() {

    if (i < 5) {
        i++;
        scr = i + ".jpg";
        img.src = scr;
    }
}

function Previous() {
    if (i > 1) {
        i--;
        scr = i + ".jpg";
        img.src = scr;
    }
}

function SlidShow() {
    slid = setInterval(function () {
        if (i < 5) {
            i++;
            scr = i + ".jpg";
            img.src = scr;
        }
        if (i >= 5) {
            i = 0;
        }

    }, 2000)
}

function Stop() {
    clearInterval(slid);
}
