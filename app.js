document.addEventListener("DOMContentLoaded", () => {
  const searchButton = lazyQuery(".search_btn");
  //console.log(searchButton);
  searchButton.addEventListener('click', displayHeroesAsAlert);
})









//let superheroes = [];

function lazyQuery(objtoget){
  return document.querySelector(objtoget);
}

function displayHeroesAsAlert(){
  let url = `superheroes.php`;
  fetch(url, {
    
  })
  .then(res => {
    return res.text();
  })
  .then(data => {
    //console.log(data);
    //console.log(typeof(data));
    alert(data);
  })
}


// method: "GET",
// headers:{
//   "Content-Type": "text/plain"
// } 
// body: