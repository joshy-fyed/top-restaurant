import yukihiraImg from './assets/yukihira.png';

//Main div
const homeDiv = document.createElement("div");
homeDiv.classList.add("home");

//Logo
const logo = document.createElement("img");
logo.src = yukihiraImg;
logo.classList.add("logo");

//Title Area
const homeTitleDiv = document.createElement("div");
homeTitleDiv.classList.add("home-title");

//Title and description
const title = document.createElement("p");
title.classList.add("title");
title.appendChild(document.createTextNode("Shokugeki no Resto"));
const description = document.createElement("p");
description.classList.add("description");
description.innerHTML = "Inspired directly from the anime <b>Shokugeki no Soma</b>";

//Assemble page
homeDiv.appendChild(logo);
homeDiv.appendChild(homeTitleDiv);
homeTitleDiv.appendChild(title);
homeTitleDiv.appendChild(description);

export { homeDiv } 




/* <div class="home">
    <img src="./assets/yukihira.png" alt="" class="logo">
    <div class="home-title">                
        <p class="title">Shokugeki no Resto</p>
        <p class="description">Inspired directly from the anime <i>Shokugeki no Soma</i></p>
    </div>
</div> */