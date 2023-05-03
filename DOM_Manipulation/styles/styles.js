// 1) a <p> with red text that says “Hey I’m red!” //

//create variables for the established elements
let container = document.querySelector("#container");
let content = document.querySelector(".content");

// create the paragraph element
let para = document.createElement("p");
para.classList.add("para-1");
para.textContent = "Hey I'm Red";
para.setAttribute("style", "color: red;");

// append the created child to the content class in the body
container.appendChild(para);


// 2) an <h3> with blue text that says “I’m a blue h3!”

let heading_3 = document.createElement("h3");
heading_3.classList.add("heading3-1");
heading_3.textContent = "I'm a blue h3";
heading_3.setAttribute("style", "color: blue;");

container.appendChild(heading_3);

/* 3) a <div> with a black border and pink background color with the following elements inside of it:
        - another <h1> that says “I’m in a div”
        - a <p> that says “ME TOO!” */

let divvy = document.createElement("div");
divvy.classList.add("divvy-1");
divvy.setAttribute("style", "background-color: pink; border: 12px; border-color: black;");

let headyOne = document.createElement("h1");
headyOne.textContent = "I'm in a div";
divvy.appendChild(headyOne);

let para2 = document.createElement("p");
para2.textContent = "ME TOO";
divvy.appendChild(para2);

container.appendChild(divvy);

//////////////////////////////////////////////////////////////////////////

// button event listener

// Method 2
let button1 = document.querySelector("#btn");
button1.onclick = () => alert("Hello World");

// Method 3
let button3 = document.querySelector("#btn2");
button3.addEventListener("click", function(e) {
    console.log(e);
});



