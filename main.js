const textAndImg = document.querySelectorAll('.anime-section-image')
const stickyText = document.querySelectorAll('.image-sticky-text');
const imgSticky = document.querySelectorAll('.sticky-image');


var offsetTopOne = imgSticky[0].offsetTop;
var offsetTopTwo = imgSticky[1].offsetTop;
var offsetTopThree = imgSticky[2].offsetTop;



textAndImg.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        console.log(e)
        var mouseY = e.offsetY;
        var mouseX = e.offsetX;

        var text = item.querySelector('.image-sticky-text');

        text.style.top = (mouseY + 10) + "px";
        text.style.left = (mouseX + 10) + "px";
    })


    // var mouseY = e.clientY;
    // var mouseX = e.clientX;

    // item.style.top = mouseY + "px";
    // item.style.left = mouseX + "px";

    // if (y - offsetTop <= 0) {
    //     stickyText.style.top = 0 + "px";
    //     stickyText.style = "display: none";
    //     return;
    // } else {
    //     stickyText.style = "display: block";
    // }
    // if (y - offsetTop >= imgSticky.offsetHeight) {
    //     stickyText.style.top = imgSticky.offsetHeight + "px";
    //     stickyText.style = "display: none";
    //     return;
    // } else {
    //     stickyText.style = "display: block";
    // }
    // stickyText.style.top = y - offsetTop + "px";
});








const miriamStoryDiv = document.getElementById('miriam-story-div');
const miriamImgDiv = document.getElementById('miriam-img-div');
const miriamImg = document.getElementById('miriam-img');
const miriamName = document.getElementById('miriam-name');

miriamImgDiv.addEventListener('click', () => {
    miriamStoryDiv.classList.toggle('display-none');
    miriamImgDiv.classList.toggle('display-none');
})




// window.addEventListener("scroll", (event) => {
//     var scrollY = window.pageYOffset;

//     stickyText.style.top = mouseY + scrollY + "px";
//     stickyText.style.left = event.clientX + "px";
// });

// window.addEventListener("scroll", (event) => {
//     var scrollY = window.pageYOffset;

//     element.style.top = mouseY + scrollY + "px";
//     element.style.left = event.clientX + "px";
// });





//         var y = e.pageY;
//         var offsetTop = imgSticky.offsetTop;


        // if (y - offsetTop <= 0) {
        //     stickyText.style.top = 0 + "px";
        //     stickyText.style = "display: none";
        //     return;
        // } else {
        //     stickyText.style = "display: block";
        // }
        // if (y - offsetTop >= imgSticky.offsetHeight) {
        //     stickyText.style.top = imgSticky.offsetHeight + "px";
        //     stickyText.style = "display: none";
        //     return;
        // } else {
        //     stickyText.style = "display: block";
        // }
        // stickyText.style.top = y - offsetTop + "px";
//     })
// })




// window.addEventListener('mousemove', nutterbutter);
// function nutterbutter(){
// 	var _el = document.getElementById('woo');
// 	_el.style.top = event.clientY + "px";
// 	_el.style.left = event.clientX + "px";
// }

// Additionally, there is no requirement to have the initial event	listener be attached to window..


// var _el = document.getElementById('woo');
// _el.addEventListener('dblclick', function(){
// 	window.addEventListener('mousemove', nutterbutter);
// 	_el.addEventListener('dblclick', removeNutter);
// });

// function nutterbutter(){
// 	_el.style.top = event.clientY + "px";
// 	_el.style.left = event.clientX + "px";
// }
