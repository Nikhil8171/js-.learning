 const request = "https://api.github.com/users/hiteshchoudhary"
 let div = document.querySelector(".parent")
  const li = document.createElement(Image);
 const foll = document.querySelector(".foll")
const xml = new XMLHttpRequest();
xml.open("GET" , request);
xml.onreadystatechange = function(){
    if(this.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);
        (data.followers);
        foll.innerHTML  = data.followers;
        li.style.backgroundImage = URL("data.avatar_url");
        div.appendChild(li)
        

        
    }
    // console.log(xml.readyState);
}
xml.send();