//let colors = ['#24d05a', '#eb4888', '#10a2f5', '#e9bc3f'];
let colors = ['#51d265', '#8baefa', '#ff8243', '#ff4357', '#ffd700', '#20b2aa'];

(function() {
    setModeEventListener();
    setRandomLinkColor();
    setColorHoverListener();

    setInterval(() => {
        setRandomLinkColor();
    }, 5000);
})();


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor() {
    $('a').each(function(e) {

    });
}


function setRandomLinkColor() {
    Array.from(document.getElementsByTagName('a')).forEach(e => {
        e.style.color = getRandomColor();
    });
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll('a, button')).forEach(e => {
        e.addEventListener('mouseover', setRandomLinkColor);
    });
}