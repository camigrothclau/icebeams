const stickyText = document.querySelector('.image-sticky-text');
const imgSticky = document.querySelectorAll('.anime-section-image');

console.log(stickyText);

window.addEventListener('mousemove', () => {
    var y = event.pageY;
    var offsetTop = imgSticky.offsetTop;
    console.log(offsetTop)

    if (y - offsetTop <= 0) {
        stickyText.style.top = 0 + "px";
        stickyText.style = "display: none";
        return;
    } else {
        stickyText.style = "display: block";
    }
    if (y - offsetTop >= imgSticky.offsetHeight) {
        stickyText.style.top = imgSticky.offsetHeight + "px";
        stickyText.style = "display: none";
        return;
    } else {
        stickyText.style = "display: block";
    }
    stickyText.style.top = y - offsetTop + "px";
})