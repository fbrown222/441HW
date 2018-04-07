
let body = document.body;
let noob = document.createElement("div");
let bt_scream = document.querySelector('#bscream');
let bt_stay = document.querySelector('#bstay');
let bt_retry = document.querySelector('#bretry');
let text_intro = document.querySelector(".intro");
let text_Scream = document.querySelector(".Scream");
let text_Stay = document.querySelector(".Stay");
let divEl1 = document.querySelector(".storageDiv");
let formEl1 = document.querySelector(".nameForm");


bt_scream.addEventListener("click", showHideText_Scream);
bt_stay.addEventListener("click", showHideText_Stay);



function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("Please refresh and enter a name! Anything! It can be fake!"); return }


    let textToAdd = document.createTextNode("Hello "+textIn+" welcome to a very short story!");


    let newP = document.createElement("P");


    newP.appendChild(textToAdd);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP);

}




function showHideText_Scream() {
    if(text_Scream.hidden){
        bt_scream.hidden= true;
        text_intro.hidden = true;
        formEl1.hidden = true;
        text_Scream.hidden = false;
        text_Stay.hidden= true;
        bt_stay.hidden=true;
        bt_retry.hidden=false;
        noob.hidden=true;

        body.style.background = "#71aff2";


    } else {
      bt_scream.hidden =false
      text_intro.hidden = false;
      formEl1.hidden = true;
      text_Scream.hidden = true;
      text_Stay.hidden= true;
      bt_stay.hidden=false;
      bt_retry.hidden=true;
      noob.hidden=true;


    }

}


function showHideText_Stay() {
    if(text_Stay.hidden){
        bt_stay.hidden = true;
        text_intro.hidden = true;
        formEl1.hidden = true;
        text_Scream.hidden = true;
        text_Stay.hidden= true;
        bt_scream.hidden=true;
        bt_retry.hidden=false;
        noob.hidden=true;

        body.style.background = "#b170f1";


    } else {
      bt_stay.hidden = false;
      text_intro.hidden = false;
      formEl1.hidden = true;
      text_Scream.hidden = true;
      text_Stay.hidden= true;
      bt_scream.hidden=false;
      bt_retry.hidden=true;
      noob.hidden=true;

        ;
    }

}


body.appendChild(noob);
