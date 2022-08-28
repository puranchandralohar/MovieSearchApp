// Query Selectors

let form = document.querySelector(".search");
let searchbox = document.querySelector(".searchbox");
let main = document.querySelector(".main-content");


form.addEventListener("submit", (e)=> {
  // e.preventDefault();
  fetch(`https://api.tvmaze.com/search/shows?q=${searchbox.value}`)
    .then((responce) => responce.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let shows = data[i]["show"];
        // console.log(shows);
        let result = `<div class="content">
              <div class="poster">
                  <img src="${shows.image["original"]}" alt="${shows.name}">
              </div>
              <div class="show-title">
                  <h3>Name :${shows.name}</h3>
                  <h3>Start Date : ${shows.premiered}</h3>
                  <h5>Language: ${shows.language}</h5>
                  <button class="btn" onclick="myFunction()">Show Details</button>
              </div>
              </div>`;
        main.innerHTML += result;


      }      
    })
    // .catch(err => alert('Not Found Any Show'))
});

function myFunction(e){
  
  main.remove();
  let showContent  = document.querySelector(".show-details");
  
  fetch(`https://api.tvmaze.com/shows/1?embed[]=episodes&embed[]=cast`)
  .then(res => res.json())
  .then((details)=>{

    console.log(details);


    let show1 =`<!-- <div class="contentBox">
                      <div class="thumbnail">
                          <img src="${details.image.original}" alt="">
                      </div>
                      <div class="desc">
                          <h2>${details.name}</h2>
                          <h3>Genere - ${details.genres[1]}</h3>
                          <h3>Language - ${details.language}</h3>
                          <h3>Status of Show - ${details.status}</h3>
                          <p>Summery</p>
                      </div>
                      <div class="cast-crew">
                          <h3>Cast</h3>
                          <div class="cast-images">
                              <img src="" alt="">
                              <img src="" alt="">
                              <img src="" alt="">
                              <img src="" alt="">
                          </div>
                      </div>
                  </div> -->`
      showContent.innerHTML = show1;

  }).catch((err)=> alert("Error Displaying"))
}
