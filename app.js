// Query Selectors

let form = document.querySelector(".search");
let searchbox = document.querySelector(".searchbox");

let main =document.querySelector(".main-content")

// console.log(form,searchbox)

form.addEventListener("submit", function (name) {
  fetch(`https://api.tvmaze.com/search/shows?q=${searchbox.value}`)
    .then((responce) => responce.json())
    .then((data) => {

      let result = `<div class="content">
      <div class="poster">
          <img src="" alt="">
      </div>
      <div class="show-title">
          <h3>Name : Thrones 360</h3>
          <h3>Start Date : 2011-6-17</h3>
          <h5>Language: English</h5>
          <button class="btn">Show Details</button>
      </div>
  </div>`;
      main.innerHTML = result;
      console.log(data);
    })
    .catch((err) => alert("invalid city name"));
});
