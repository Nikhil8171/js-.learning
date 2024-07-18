
let on = document.querySelector(".on").addEventListener("click", function(){
    color();
})


function color (){
    const radom = Math.floor((Math.random() * 100000))
    const ran = "#"+ radom.toString(16);
    document.querySelector('body').style.backgroundColor = ran;
    document.querySelector('.on').innerText = ran;
    

    
    console.log(ran);
}


