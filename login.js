let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');


function check(form) {
    if ((form.id.value==="123") && (form.pw.value==="123")) {
        alert('환영합니다!');
        window.open('main1.html')
    }
    if ((form.id.value=="123") && ((form.pw.value)!=="123") && (form.pw.value!=="")) {
        alert('비밀번호 틀림');
      }
    if ((form.pw.value=="123") && ((form.id.value)!=="123") && (form.id.value!=="")) {
        alert('아이디 틀림');
      }
    if (form.id.value=="") {
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');  /*1초 지나면 워닝 사인 없애*/
        }, 1000);
      }
    if (form.pw.value=="") {
        $(pw).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');  /*1초 지나면 워닝 사인 없애*/
        }, 1000);
      }
}