let updatebtn = document.querySelector('.main-container .cart-body .right-div .cart-controls div span');
//color: rgb(252, 186, 32);
updatebtn.onmouseover = ()=>{
    let atag = document.querySelector('.main-container .cart-body .right-div .cart-controls div span a');
    let itag = document.querySelector('.main-container .cart-body .right-div .cart-controls div span i');
    atag.style.color = 'rgb(252, 186, 32)';
    itag.style.color = 'rgb(252, 186, 32)';
    updatebtn.style.backgroundColor = 'whitesmoke';
    updatebtn.style.transition = 'all .3s';
}
updatebtn.onmouseout = ()=>{
    let atag = document.querySelector('.main-container .cart-body .right-div .cart-controls div span a');
    let itag = document.querySelector('.main-container .cart-body .right-div .cart-controls div span i');
    atag.style.color = '#3d3d3d';
    itag.style.color = '#3d3d3d';
    updatebtn.style.backgroundColor = 'white';
}
//---------------------------------------------------------------
let closebtn = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .close');
let cartpro = document.querySelectorAll('.main-container .cart-body .right-div .cart-product');
let carthr = document.querySelectorAll('.main-container .cart-body .right-div hr');
for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].onclick = ()=>{
        cartpro[i].style.display = 'none';
        carthr[i+1].style.display = 'none';
    }
}
//-------------------------------------------------------
let blusbtn = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .quantity button')[1];
let minusbtn = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .quantity button')[0];

let num = document.querySelector('.main-container .cart-body .right-div .cart-product div .quantity p');

blusbtn.onclick = ()=>{
    if(parseInt(num.textContent) < 10)
    {
        num.textContent = parseInt(num.textContent) + 1;
    }
}
minusbtn.onclick = () =>{
    if(parseInt(num.textContent) > 0 )
    {
        num.textContent = parseInt(num.textContent) - 1;
    }
}


let blusbtn2 = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .quantity button')[3];
let minusbtn2 = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .quantity button')[2];

let num2 = document.querySelectorAll('.main-container .cart-body .right-div .cart-product div .quantity p')[1];

blusbtn2.onclick = ()=>{
    if(parseInt(num2.textContent) < 10)
    {
        num2.textContent = parseInt(num2.textContent) + 1;
    }
}
minusbtn2.onclick = () =>{
    if(parseInt(num2.textContent) > 0 )
    {
        num2.textContent = parseInt(num2.textContent) - 1;
    }
}
