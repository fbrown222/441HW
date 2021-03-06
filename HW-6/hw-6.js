/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
//erase all original content
let body = document.body;
body.innerText = "";

body.style.background = "#f7d8ff";

/***************************** VARIABLES *********************/
//div
let noob = document.createElement("div");

//heading
var heading = document.createElement('h1');

//paragraph elements (2 of them)
var para1 = document.createElement('p');
var para2 = document.createElement('p');

//le image of origami lily
var pic = new Image (388, 456);
pic.src = "images/lily.jpg"

//link
var link = document.createElement('a');

/**************************TEXT/PIC INPUT*************************************/
//headings
heading.textContent = "The Lily"

//first paragraph
para1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//second paragraph
para2.textContent = "Lorem ipsum, lorem ipsum, lorem ipsum. Amen."

//link to origami instructions
link.textContent = "Make a paper lily here!"
link.setAttribute("href","http://www.origami-instructions.com/origami-lily.html");


/**********************STYLE********************************/

//pic adjustments
pic.setAttribute("style","padding:0em; margin:100px; align: center");

//center div
noob.setAttribute("style", "text-align: center");

//heading style
heading.setAttribute("style","padding:2em; margin:0; font-family: sans-serif; text-align:center; color:#000000");

//paragraph styles with borders
para1.setAttribute("style","padding:10px; margin:5px; border: 1px solid #c972ff;font-family: sans-serif; text-align:center; color:#000000");
para2.setAttribute("style","padding:10px; margin:5px; border: 1px solid #c972ff;font-family: sans-serif; text-align:center; color:#000000");



/*********************APPEND************************/

noob.appendChild(heading);
noob.appendChild(para1);
noob.appendChild(pic);
noob.appendChild(para2);
noob.appendChild(link);


body.appendChild(noob);
