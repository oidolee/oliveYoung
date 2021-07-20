$(function(){

    /*로그인 화면 팝업 효과 start*/
    const coupons = document.querySelectorAll('#art_1 .coupon');
    const loginBg = document.querySelector('#login_bg');
    const login = document.querySelector('#login');
    
    coupons.forEach((el,i) => {
        coupons[i].addEventListener('click',()=>{
            loginBg.classList.add('login_Bgpop');
             loginBg.style.top = scrollY + 'px' ;
        });
        coupons[i].addEventListener('click',()=>{
            login.classList.add('login_effect');
            login.style.top = scrollY + 'px' ;
        });
    });
    /*로그인 화면 팝업 효과 --------------end*/

});