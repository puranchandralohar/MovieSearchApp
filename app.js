// Query Selectors

let form = document.querySelector(".search");
let searchbox = document.querySelector(".searchbox");


form.addEventListener("submit", function (name) {
  
  fetch(`https://api.tvmaze.com/search/shows?q=${searchbox.value}`)
    .then((responce) => responce.json())
    .then((data) => {

      for(let i=0 ; i < data.length;i++){
        
          let shows =data[i]["show"];

              let result = `<div class="content">
              <div class="poster">
                  <img src="${shows.image.medium}" alt="">
              </div>
              <div class="show-title">
                  <h3>Name :${shows.name}</h3>
                  <h3>Start Date : ${shows.premiered}</h3>
                  <h5>Language: ${shows.language}</h5>
                  <button class="btn">Show Details</button>
              </div>
              </div>`;
              let main =document.querySelector(".main-content")
              main.innerHTML += result;
      }
    }).catch((err)=>alert('Not Found Any Show'))
});
