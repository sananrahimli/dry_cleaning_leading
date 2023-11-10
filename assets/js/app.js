var swiper = new Swiper(".reviewsSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true,
    //   },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });


  let modalOpenBtn = document.querySelectorAll('.modalOpen');
  let modalWindow = document.querySelectorAll('.modal');
  let modalProductBtn = document.querySelectorAll('.product__item > button')
  
  modalOpenBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          let dataBtn = btn.dataset.modal;
  
          modalWindow.forEach((modal) => {
              let dataModal = modal.dataset.modal;
  
              if (dataBtn === dataModal) {
                  modal.style.display = 'flex';
                  document.body.style.overflow = 'hidden'
              } else {
                  modal.style.display = 'none';
              }
          });
      });
  });


  modalProductBtn.forEach((btnProduct) => {
    btnProduct.addEventListener('click', (e) => {
        e.preventDefault();
        let dataBtn = btnProduct.dataset.modal;

        modalWindow.forEach((modal) => {
            let dataModal = modal.dataset.modal;

            if (dataBtn === dataModal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                modal.querySelector('.infoProduct .productName').innerHTML = btnProduct.dataset.name;
                modal.querySelector('.infoProduct .productImage').src = btnProduct.dataset.image;
            } else {
                modal.style.display = 'none';
            }
        });
    });
});
  
  let closeBtns = document.querySelectorAll('.close');
  
  closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
          closeBtn.closest('.modal').style.display = 'none';
          document.body.style.overflow = 'auto'
      });
  });
  

  let overlayBtns = document.querySelectorAll('.overlay');
  
  overlayBtns.forEach((overlayBtn) => {
    overlayBtn.addEventListener('click', () => {
        overlayBtn.closest('.modal').style.display = 'none';
          document.body.style.overflow = 'auto'
      });
  });
  




//   ????

let listProducts_menu = document.querySelectorAll('.prices__content__menu > li');
let listProducts_content = document.querySelectorAll('.prices__content__products')

listProducts_menu.forEach((productMenu)=>{
    productMenu.addEventListener('click', (e)=>{
        e.preventDefault();
        let dataMenu = e.target.dataset.productmenu;


        for(let i of listProducts_menu) {
            i.classList.remove('active')
        }
        e.target.classList.add('active');

        


        listProducts_content.forEach((productContent)=>{
            let dataContent = productContent.dataset.productcontent;
            if(dataMenu === dataContent) {
                productContent.dataset.open = 'true';
            } else {

                productContent.dataset.open = 'false';
            }
        })
    })
})



let review__image = document.querySelectorAll('.review__item .picture a');

review__image.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        link.classList.toggle('open');
        link.dataset.content = 'Закрыть'
        let gg = link.classList.contains('open')
        if(gg) {
            swiper.autoplay.stop();
        } else {

            swiper.autoplay.start();
        }
    })
})



let questionItem = document.querySelectorAll('ul.questionItem > li')

questionItem.forEach((listLink)=>{
    listLink.addEventListener('click', function(e){
        e.preventDefault()
        listLink.classList.toggle('active')
    })
})

let rekviziti = document.querySelector(".rekviziti");
let moreRekz = document.querySelector('#moreRekz')

moreRekz.addEventListener('click', ()=>{
    rekviziti.classList.toggle('active')
})



let yakorLink = document.querySelectorAll('.header__menu > li');

let header__menu = document.querySelector('ul.header__menu') 


let burgerMenu = document.querySelector('#burgerMenu');

yakorLink.forEach((link) => {
    link.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault(); 
        header__menu.classList.remove('openMenu')
        burgerMenu.classList.remove('active')
        let href = this.getAttribute('href'); 
        let targetElement = document.querySelector(href); 

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



let callTime = document.querySelectorAll('.callTime > div');
let disableTimeInput = document.querySelector('.disableTimeInput');

callTime.forEach((dived)=>{
    dived.addEventListener('click', function(e){
        e.preventDefault()

        let timer = dived.classList.contains('bytime')
        if(timer) {
            disableTimeInput.classList.remove('noness')
            callTime.forEach((divedtwo)=>{
                divedtwo.classList.remove('active')
            })
            dived.classList.add('active')
            
        } else {
            disableTimeInput.classList.add('noness')
            callTime.forEach((divedtwo)=>{
                divedtwo.classList.remove('active')
            })
            dived.classList.add('active')
        }
    })
})



burgerMenu.addEventListener('click', function(e){
    e.preventDefault()
    burgerMenu.classList.toggle('active');
    header__menu.classList.toggle('openMenu')
})