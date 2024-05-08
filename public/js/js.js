// Кнопка "Для кого курс"
const $link1 = document.getElementById('FirstBut');
const $form1 = document.getElementById('IdForFirstBut');


$link1.addEventListener('click', e => {
  
  e.preventDefault();


  $form1.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth', 
  });
});


// Кнопка "Что это будет"
const $link2 = document.getElementById('SecondBut');
const $form2 = document.getElementById('IdForSecondBut');


$link2.addEventListener('click', e => {
  
  e.preventDefault();


  $form2.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth', 
  });
});


// Кнопка "Тарифы"
const $link3 = document.getElementById('ThridBut');
const $form3 = document.getElementById('IdForThridBut');


$link3.addEventListener('click', e => {
  
  e.preventDefault();


  $form3.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth', 
  });
});



// Кнопка "Приобрести курс"
const $link4 = document.getElementById('FourthBut');
const $form4 = document.getElementById('IdForThridBut');


$link4.addEventListener('click', e => {
  
  e.preventDefault();


  $form4.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth', 
  });
});





// Ссылки на соц. сети
// whatsapp
document.getElementById("IdWhatsapp").addEventListener("click", function() {
  window.open("https://wa.me/79997243854", "_blank");
});

// telegram
document.getElementById("IdTelegram").addEventListener("click", function() {
  window.open("https://t.me/rusalina09", "_blank");
});

// instagram
document.getElementById("IdInstagram").addEventListener("click", function() {
  window.open("https://www.instagram.com/sagdeeva.rusalina?igsh=MXNlOXd3a3VoZGlxaQ==", "_blank");
});
