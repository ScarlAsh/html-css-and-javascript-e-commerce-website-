$(function(){
    $('.shop .filters .category .filter-header button').click(function(){
        $(this).toggleClass('rotate');
        $('.shop .filters .category .filter-body').slideToggle(300);
    });
    $('.shop .filters .brand .filter-header button').click(function(){
        $(this).toggleClass('rotate');
        $('.shop .filters .brand .filter-body').slideToggle(300);
    });
    $('.shop .filters .price .filter-header button').click(function(){
        $(this).toggleClass('rotate');
        $('.shop .filters .price .filter-body').slideToggle(300);
    });
})

//--------------------------------------------------------------------------------------------

let searchinput = document.querySelector('.shop-search div input'); 
let productList = document.querySelectorAll('.product-container.shop .sales-content .product');
let itemname = document.querySelectorAll('.product-container.shop .sales-content .product .name');
let itemcategory = document.querySelectorAll('.product-container.shop .sales-content .product .ct');
let itembrand = document.querySelectorAll('.product-container.shop .sales-content .product .pr');

searchinput.addEventListener('input' , function(){
    let inputvalue = searchinput.value.toLowerCase();
    for(var i = 0 ; i <productList.length ; i++){
            if(itemname[i].textContent.toLowerCase().includes(inputvalue)){
                productList[i].style.display = '';
        }
        else{
            productList[i].style.display = 'none';
        }
    }
    });