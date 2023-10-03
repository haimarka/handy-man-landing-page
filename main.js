// header slider

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // smooth slide
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// elements slide
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.slider-container, .banner, .footer`, {
    origin: 'top',
    interval: 150
})

sr.reveal(`.header__container, .prices__container`, {
    origin: 'left'
})

sr.reveal(`.about__container, .display__container`, {
    origin: 'right'
})


  // hide form

function showForm(){
    let form = document.getElementById("form")
    if(form.style.display === 'none'){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
}

// go back btn
const btn = document.getElementById("goBackBtn");
if(btn){
    btn.addEventListener("click", goBack);
}
function goBack() {
    history.back();
}