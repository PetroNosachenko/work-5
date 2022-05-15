const openloginModal = document.getElementById('open_pop_up');
const closeLoginModal = document.getElementById('pop_up_close');
let loginModalWind = document.querySelector('.pop-up')
let closeBg = document.querySelector('.pop_up_container')

//--открытие модального окна при нажатии на кнопку "Логин"--//
openloginModal.addEventListener('click', function(e){
    e.preventDefault() //отменяет перевод по ссылке при нажатии кнопки, т.к кнопка у нас есть ссылка (тег "а")//
    loginModalWind.classList.add('open');
     
});

//--Закрытие модального окна при нажатии на крестик--//
closeLoginModal.addEventListener('click', function() {
    loginModalWind.classList.remove('open');
});
document.addEventListener('click', (e) => {
    if(e.target === closeBg) {
        loginModalWind.classList.remove('open'); 
       
    }
    
});

