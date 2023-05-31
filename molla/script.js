//#region categories list 
let cat =document.querySelector('.categories');
cat.addEventListener('mouseover' , style);
cat.addEventListener('mouseout' , unstyle);


function style(){
    let span = document.querySelectorAll('.categories span');
    for(var i = 0; i < span.length ; i++)
    {
        span[i].style.color = 'white';
    }
    let list = document.querySelector('.categories-list');
    list.style.display = 'inline';
    }

function unstyle(){
    let span = document.querySelectorAll('.categories span');
    for(var i = 0; i < span.length ; i++)
    {
        span[i].style.color = '#3d3d3d';
    }
    let list = document.querySelector('.categories-list');
    list.style.display = 'none';
    
}
//#endregion
//-------------------------------------------------------------------------------
//#region nav list hover 
let navList = document.querySelectorAll('.nav .nav-list ul li');
let liAnchors = document.querySelectorAll('.nav .nav-list ul li a');
let liHrs = document.querySelectorAll('.nav .nav-list ul li div');

for(let i = 0; i < navList.length ; i++)
{
    navList[i].onmouseover = function(){
        liAnchors[i].style.color = 'rgb(252, 186, 32)';
        liAnchors[i].style.transition = 'all .2s';
        liHrs[i].style.visibility = 'visible';
    }
    navList[i].onmouseout = function(){
        liAnchors[i].style.color = '#3d3d3d';
        liHrs[i].style.visibility = 'hidden';
    }
}

//#endregion
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
//#region add to cart 
let product = document.querySelectorAll('.product-container .sales-content .product');
let icon = document.querySelectorAll('.product-container .sales-content .product .product-img span');
let cart = document.querySelectorAll('.product-container .sales-content .product .product-img div');
for (let i = 0; i < product.length; i++) 
{
    product[i].onmouseover = function(){
        icon[i].style.visibility = 'visible';
        icon[i].style.left = '80%';


        cart[i].style.visibility = 'visible';
        cart[i].style.top = '85%';
        cart[i].style.transition = 'all .5s' ;
    };
    product[i].onmouseout = function(){
        icon[i].style.visibility = 'hidden';
        icon[i].style.left = '100%';

        cart[i].style.visibility = 'hidden';
        cart[i].style.top = '100%';
    }  
}

let cIcon = document.querySelectorAll('.product-container .sales-content .product .product-img div i');
let cAnchor = document.querySelectorAll('.product-container .sales-content .product .product-img div a');

for (let i = 0; i < cAnchor.length; i++) {
    cAnchor[i].onmouseover = function () {
        cIcon[i].style.color = 'rgb(252, 186, 32)';
    }
    cAnchor[i].onmouseout = function () {
        cIcon[i].style.color = 'whitesmoke';
    }
}
//#endregion

//#region product scroller

let productContainer = document.querySelectorAll('.product-container .sales-content');

let nextButton = document.querySelectorAll('.product-container .controls .next');
let previousButton = document.querySelectorAll('.product-container .controls .previous');

productContainer.forEach((item , i) => {
    let containerWidth = item.getBoundingClientRect().width;
    if(item.scrollLeft == 0)
    {
        previousButton[i].style.visibility = 'hidden';
    }
    nextButton[i].addEventListener('click' , ()=>{
        item.scrollLeft +=containerWidth ; 
        previousButton[i].style.visibility = 'visible';
        setTimeout(()=>{ 
            if(item.scrollLeft > item.getBoundingClientRect().width)
            {
                nextButton[i].style.visibility = 'hidden';
            }
        } , 500)
    });
    previousButton[i].addEventListener('click' , function(){
        item.scrollLeft -=containerWidth ;
        nextButton[i].style.visibility = 'visible';
        setTimeout(()=>{ 
        if(item.scrollLeft < 30)
        {
            previousButton[i].style.visibility = 'hidden';
        }
    } , 500)
    });
    
});

//#endregion

//----------------------------------------------------------------------------


//#region slider
window.onload = function(){
    let sliderimg = document.querySelectorAll('.main-container .slider-container .slider img');
    let nxtBtn = document.querySelector('.main-container .slider-container .slider-controls .nxt');
    let preBtn = document.querySelector('.main-container .slider-container .slider-controls .pre');
    let i = 0;
    nxtBtn.onclick = function(){
                sliderimg[i].style.animation = 'next1 0.3s linear forwards';
                if(i >= sliderimg.length-1){
                    i = 0;
                }
                else
                {
                    i++;
                }
                sliderimg[i].style.animation = 'next2 0.3s linear forwards';
    }
    preBtn.onclick = function(){
            sliderimg[i].style.animation = 'prev1 0.3s linear forwards';
            if(i == 0){
                i = sliderimg.length-1;
            }
            else
            {
                i--;
            }
            sliderimg[i].style.animation = 'prev2 0.3s linear forwards';
    }
}

//#endregion