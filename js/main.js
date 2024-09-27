// إعداد Swiper
var swiper = new Swiper('.home', {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

// إعداد القائمة الجانبية
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x'); // تغيير شكل الأيقونة
  navbar.classList.toggle('active'); // عرض أو إخفاء القائمة
};

window.onscroll = () => {
  menu.classList.remove('bx-x'); // إعادة الأيقونة لشكلها الأصلي عند التمرير
  navbar.classList.remove('active'); // إخفاء القائمة عند التمرير
};