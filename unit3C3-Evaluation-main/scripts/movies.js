// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//const url =" https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om"

let money=JSON.parse(localStorage.getItem("amount"))||0
document.querySelector("#wallet").innerText=money;

// debouncing

let id;
function debou(){
  clearInterval(id);
  id=setTimeout(function(){
    myfunc()
  },1000)
}

// search movie==============

// const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`);

function myfunc(){
    let movie=document.getElementById("search").value
    // const url = `https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`;
    // const url = `https://www.omdbapi.com/?s=${movie}&apikey=96017e92`;
         const url=`http://www.omdbapi.com/?s=${movie}&apikey=884e255e`        

    fetch(url)
    .then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res)
        mySearch(res.Search)
    });

}
// ==========appending===========

let mainDiv=document.getElementById("movies")

function mySearch(data){
    mainDiv.innerHTML="";

    data.map(function(ele,i){
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=ele.Poster

        let title=document.createElement("h3")
        title.innerText=ele.Title

        let btn=document.createElement("button")
        btn.innerText="Book now";
        btn.addEventListener("click",function(){
            book(ele,i);
        })
        div.append(img,title,btn)
        mainDiv.append(div)
    })
}


// localStorage sending part

let dataArr=JSON.parse(localStorage.getItem("movie"))||[];

function book(ele,i){
    localStorage.removeItem("movie");
    dataArr.push(ele)
    localStorage.setItem("movie",JSON.stringify(dataArr))
    window.location.href="checkout.html";
}



