let top_block_hiden = document.querySelector(".top_block");
let result_one;
result_but.onclick = function(){
    top_block_hiden.classList.toggle('top_block_hiden');
    let myform = this.form;
    myform.result_num.value = +myform.question1.value + +myform.question2.value + +myform.question3.value + +myform.question4.value + +myform.question5.value + +myform.question6.value;
    result_one = 100/6*myform.result_num.value;
    result_one = result_one.toFixed(1);
    document.getElementById("result_one").innerHTML = result_one;
}

let start_but = document.querySelector(".Start_but");
let wrap_start = document.querySelector(".wrap_start");
    start_but.onclick = function(){
        wrap_start.classList.toggle('wrap_start_off');
}
