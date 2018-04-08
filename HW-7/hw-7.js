
let body = document.body;
let noob = document.createElement("div");
let bt_scream = document.querySelector('#bscream');
let bt_stay = document.querySelector('#bstay');
//let bt_retry = document.querySelector('#bretry');
let text_intro = document.querySelector(".intro");
let text_Scream = document.querySelector(".Scream");
let text_Stay = document.querySelector(".Stay");
let divEl1 = document.querySelector(".storageDiv");
let formEl1 = document.querySelector(".nameForm");




bt_scream.addEventListener("click", showHideText_Scream);
bt_stay.addEventListener("click", showHideText_Stay);



body.style.background = "#f7d8ff";




function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("Please refresh and enter a name! Anything! It can be fake!"); return }


    let textToAdd = document.createTextNode("Hello "+textIn+", welcome to a very short story!");


    let newP = document.createElement("P");


    newP.appendChild(textToAdd);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP);

}

document.querySelector("#runButton").addEventListener( 'click', grabText);




function showHideText_Scream() {
    if(text_Scream.hidden){
        bt_scream.hidden= true;
        text_intro.hidden = false;
        formEl1.hidden = true;
        text_Scream.hidden = false;
        text_Stay.hidden= true;
        bt_stay.hidden=true;
      //  bt_retry.hidden=false;
        noob.hidden=true;

        body.style.background = "#71aff2";

function alertPop1(){
        alert("OH NOOOOOO!!!!!");
}

setTimeout( alertPop1, 500 );



    } else {
      bt_scream.hidden =false
      text_intro.hidden = false;
      formEl1.hidden = false;
      text_Scream.hidden = true;
      text_Stay.hidden= true;
      bt_stay.hidden=false;
    //  bt_retry.hidden=true;
      noob.hidden=false;


    }

}


function showHideText_Stay() {
    if(text_Stay.hidden){
        bt_stay.hidden = true;
        text_intro.hidden = false;
        formEl1.hidden = true;
        text_Scream.hidden = true;
        text_Stay.hidden= false;
        bt_scream.hidden=true;
      //  bt_retry.hidden=false;
        noob.hidden=true;

        body.style.background = "#b170f1";

        function alertPop2(){
                alert("awww yissss!!!!!");
        }

        setTimeout( alertPop2, 500 );


    } else {
      bt_stay.hidden = false;
      text_intro.hidden = false;
      formEl1.hidden = false;
      text_Scream.hidden = true;
      text_Stay.hidden= true;
      bt_scream.hidden=false;
    //  bt_retry.hidden=true;
      noob.hidden=false;


    }

}

body.appendChild(noob);
