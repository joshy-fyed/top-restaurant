import "./styles.css";
import { greeting } from "./greeting.js";
import { homeDiv as HomeDiv } from "./home.js";

//Content div
const contentDiv = document.getElementById("content");

//Attach home to content
contentDiv.appendChild(HomeDiv);

console.log(greeting);
