//console.log("TESTING NEW JAVASCRIPT VERSION 12345");

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = lazyQuery(".searchfor");
  const searchButton = lazyQuery(".search_btn");
  const divElement = byId("result");
  //console.log(searchButton);
  searchButton.addEventListener('click', () => {
    displayHeroesInDiv(divElement, inputElement.value);
  });
})









//let superheroes = [];

function lazyQuery(objtoget){
  return document.querySelector(objtoget);
}
function byId(objtoget){
  return document.getElementById(objtoget);
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

function displayHeroesInDiv(htmlobj, searchfor=null){
  htmlobj.style.display = "block";

  let url = `superheroes.php`;
  let defaultval = 1;
  if(searchfor){
    defaultval = 0;
    url = `superheroes.php?query=${encodeURIComponent(searchfor)}`;
    console.log(url);
  }
  fetch(url, {
    
  })
  .then(res => {
    if(res.ok){
      if(defaultval){
        return res.text();
      }
      else {
        return res.json();
      }
    }
    else {
      throw new Error(`Failure => ${res.status}`);
    }
  })
  .then(data => {
    console.log(data);
    if(typeof(data) === 'object'){
      if(data.success === 'failure'){
        htmlobj.textContent = data.message;
      }
      else {
        console.log("object");
        htmlobj.innerHTML = '';
        displayHero(htmlobj, "h3", `Alias: ${data.alias}`, "alias");
        displayHero(htmlobj, "h4", `Name: ${data.name}`, "name", true);
        displayHero(htmlobj, "p", `Biography: ${data.biography}`, "biography", true);
      }
    }
    else {
      console.log("not object");
      htmlobj.innerHTML = data;
    }
  })
  .catch(error => {
    console.error(error);
  })
}

function displayHero(htmlobj, htmlToCreate, value, clas=null, hr=null){
  if(hr){
    htmlobj.appendChild(document.createElement("hr"));
  }
  const element = document.createElement(htmlToCreate);
  element.textContent = value;
  htmlobj.appendChild(element);
  //console.log("made it to here");
  if(clas){
    //console.log("IN IF BLOCK");
    element.classList.add(clas);
    //console.log(element.classList);
  }

  //console.log("last part");
  
}