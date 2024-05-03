const cardingElement = document.getElementById('carding');

cardingElement.addEventListener('mouseenter', () => {
    cardingElement.style.animationPlayState = 'paused'; /* Pause animation on hover */
});

cardingElement.addEventListener('mouseleave', () => {
    cardingElement.style.animationPlayState = 'running'; /* Resume animation on mouse leave */
});


let popup = document.querySelector('#popup');
let welcomepopup = document.querySelector('#welcome-popup');

setTimeout(() => {
    popup.style.display = "none";
}, 3000);

let accordian = document.getElementsByClassName('contentbx')

for(i=0;i<accordian.length;i++){
    accordian[i].addEventListener('click',function(){
        this.classList.toggle('active')
        console.log('data')
    })
}

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    
});

