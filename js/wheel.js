let wheels = document.querySelectorAll('.wheel');


window.addEventListener("scroll", scrollRotate);


function scrollRotate() {
    wheels.forEach(wheel => {
        if(wheel.classList.contains('wheel-left')) {
            wheel.style.transform = "rotate("+ (window.pageYOffset/10) + "deg)";
        }else if(wheel.classList.contains('wheel-right')) {
            wheel.style.transform = "rotate(-"+ (window.pageYOffset/10) + "deg)";
        }
    });
}