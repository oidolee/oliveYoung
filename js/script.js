$(function(){

    /*로그인 화면 팝업 효과 start*/
    const coupons = document.querySelectorAll('#art_1 .coupon');
    const loginBg = document.querySelector('#login_bg');
    const login = document.querySelector('#login');
    
    coupons.forEach((el,i) => {
        coupons[i].addEventListener('click',()=>{
            loginBg.classList.add('login_Bgpop');
             loginBg.style.top = scrollY + 'px' ;
             login.classList.add('login_effect');
             login.style.top = scrollY + 'px' ;
        });
    
    });
    /*로그인 화면 팝업 효과 --------------end*/

    /* 로그인 화면 닫기 start*/

    const loginClose = document.querySelector('#login_close');
    loginClose.addEventListener('click',()=>{
        loginBg.classList.remove('login_Bgpop');
        login.classList.remove('login_effect');
    /* 로그인 화면 닫기 --------------end*/

    });


    /* start*/
    let email = $('#login_box input').eq(0);
    email.on('keyup',function(){
        // let check = /^(\w+)@(\w+)(\.)[(\w+){2,3]}$/;// 이메일 정규식 표현
        let check = /^([a-z]{6,16})@({2,4})$/;// 이메일 정규식 표현
        let e_val = email.val();
        let outValue = check.test(e_val);
        console.log(outValue);

        let submit = $('#login_box>#submit');
        

    
        submit.click(function(){
            if(!outValue==true){
                alert("이메일 형식을 확인 하시오");
            }

        });
    })




    /* --------------end*/
    




    /* start*/
    /* --------------end*/
});