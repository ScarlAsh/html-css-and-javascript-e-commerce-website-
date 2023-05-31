//#region team
let con1 = document.querySelectorAll('.main-container.team .team-member')[0];
let con2 = document.querySelectorAll('.main-container.team .team-member')[1];
let con3 = document.querySelectorAll('.main-container.team .team-member')[2];


con1.onmouseover = function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[0];
    info.style.top = '35%';
    var h = document.querySelectorAll('.main-container.team .team-member .team-info h5 , .main-container.team .team-member .team-info h6');
    for(var i = 0 ; i < 2 ; i++)
    {
        h[i].style.color = "white";
    }
    var icons = document.querySelector('.main-container.team .team-member .team-info .social-icons');
    icons.style.visibility = 'visible';
    var p = document.querySelector('.main-container.team .team-member .team-info p');
    p.style.display = 'block';
    var img = document.querySelectorAll('.main-container.team .team-member img')[0];
    img.style.filter ='brightness(60%)'; 
    info.style.transitionProperty = 'all';
    info.style.transitionDuration = '1s';
};


con1.onmouseout= function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[0];
    info.style.top = '103%';
    var h1 = document.querySelector('.main-container.team .team-member .team-info h5');
    h1.style.color = 'black';
    var h2 = document.querySelector('.main-container.team .team-member .team-info h6');
    h2.style.color = 'grey';
    var icons = document.querySelector('.main-container.team .team-member .team-info .social-icons');
    icons.style.visibility = 'hidden';
    var p = document.querySelector('.main-container.team .team-member .team-info p');
    p.style.display = 'none';
    var img = document.querySelectorAll('.main-container.team .team-member img')[0];
    img.style.filter ='brightness(100%)'; 
    info.style.transitionDuration = '0s';
};

con2.onmouseover = function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[1];
    info.style.top = '35%';
    var h = document.querySelectorAll('.main-container.team .team-member .team-info h5 , .main-container.team .team-member .team-info h6');
    for(var i = 2 ; i < 4 ; i++)
    {
        h[i].style.color = "white";
    }
    var icons = document.querySelectorAll('.main-container.team .team-member .team-info .social-icons')[1];
    icons.style.visibility = 'visible';
    var p = document.querySelectorAll('.main-container.team .team-member .team-info p')[1];
    p.style.display = 'block';
    var img = document.querySelectorAll('.main-container.team .team-member img')[1];
    img.style.filter ='brightness(60%)'; 
    info.style.transitionProperty = 'all';
    info.style.transitionDuration = '1s';
};


con2.onmouseout= function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[1];
    info.style.top = '103%';
    var h1 = document.querySelectorAll('.main-container.team .team-member .team-info h5')[1];
    h1.style.color = 'black';
    var h2 = document.querySelectorAll('.main-container.team .team-member .team-info h6')[1];
    h2.style.color = 'grey';
    var icons = document.querySelectorAll('.main-container.team .team-member .team-info .social-icons')[1];
    icons.style.visibility = 'hidden';
    var p = document.querySelectorAll('.main-container.team .team-member .team-info p')[1];
    p.style.display = 'none';
    var img = document.querySelectorAll('.main-container.team .team-member img')[1];
    img.style.filter ='brightness(100%)'; 
    info.style.transitionDuration = '0s';
};

con3.onmouseover = function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[2];
    info.style.top = '35%';
    var h = document.querySelectorAll('.main-container.team .team-member .team-info h5 , .main-container.team .team-member .team-info h6');
    for(var i = 4 ; i < 6 ; i++)
    {
        h[i].style.color = "white";
    }
    var icons = document.querySelectorAll('.main-container.team .team-member .team-info .social-icons')[2];
    icons.style.visibility = 'visible';
    var p = document.querySelectorAll('.main-container.team .team-member .team-info p')[2];
    p.style.display = 'block';
    var img = document.querySelectorAll('.main-container.team .team-member img')[2];
    img.style.filter ='brightness(60%)'; 
    info.style.transitionProperty = 'all';
    info.style.transitionDuration = '1s';
}


con3.onmouseout= function(){
    var info = document.querySelectorAll('.main-container.team .team-member .team-info')[2];
    info.style.top = '103%';
    var h1 = document.querySelectorAll('.main-container.team .team-member .team-info h5')[2];
    h1.style.color = 'black';
    var h2 = document.querySelectorAll('.main-container.team .team-member .team-info h6')[2];
    h2.style.color = 'grey';
    var icons = document.querySelectorAll('.main-container.team .team-member .team-info .social-icons')[2];
    icons.style.visibility = 'hidden';
    var p = document.querySelectorAll('.main-container.team .team-member .team-info p')[2];
    p.style.display = 'none';
    var img = document.querySelectorAll('.main-container.team .team-member img')[2];
    img.style.filter ='brightness(100%)'; 
    info.style.transitionDuration = '0s';
};
//#endregion

