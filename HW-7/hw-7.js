

//defining texts//

let body = document.body;
let main_div = document.createElement("div");
let text_stay_still = document.querySelector(".stay_still");
let text_scream = document.querySelector(".scream");
let text_investigate = document.querySelector(".investigate");
let text_ignore = document.querySelector(".ignore");
let text_make_a_run = document.querySelector(".make_a_run");
let text_grab_cross = document.querySelector(".grab_cross");
let text_throw_pic = document.querySelector(".throw_pic");
let text_pic_up = document.querySelector(".pick_up");
let text_window = document.querySelector(".window");
let text_destroy = document.querySelector(".destroy");
let text_scared = document.querySelector(".scared");
let text_turn_in_friend = document.querySelector(".turn_in_friend");


//defining butons//

let bt_scream = document.querySelector('#bscream');
let bt_stay_still = document.querySelector('#bstay_still');
let bt_investigate = document.querySelector('#binvestigate');
let bt_ignore = document.querySelector('#bignore');
let bt_make_a_run = document.querySelector('#bmake-a-run');
let bt_grab_cross = document.querySelector('#bgrab-cross');
let bt_window = document.querySelector('#bwindow');
let bt_throw_pic = document.querySelector('#bthrow-pic');
let bt_pick_up = document.querySelector('#bpick-up');
let bt_restart = document.querySelector('#brestart');
let bt_turn_in_friend = document.querySelector('#bturn-in-friend');
let bt_destroy = document.querySelector('#bdestroy');
let bt_scared = document.querySelector('#bscared');


//adding button events//

bt_scream.addEventListener("click", showHideText_scream);
bt_stay_still.addEventListener("click", showHideText_staystill);
bt_investigate.addEventListener("click", showHideText_investigate);
bt_ignore.addEventListener("click", showHideText_ignore);
bt_make_a_run.addEventListener("click", showHideText_run);
bt_grab_cross.addEventListener("click", showHideText_cross);
bt_window.addEventListener("click", showHideText_window);
bt_throw_pic.addEventListener("click", showHideText_throw);
bt_pick_up.addEventListener("click", showHideText_pickup);
bt_restart.addEventListener("click", showHideText_restart);
bt_turn_in_friend.addEventListener("click", showHideText_friend);
bt_destroy.addEventListener("click", showHideText_destroy);
bt_scared.addEventListener("click", showHideText_scared);

//functions//

function showHideText_staystill() {
    if(text_stay_still.hidden){
        text_stay_still.hidden = false;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=false;
        bt_ignore.hidden=false;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;





    } else {
      text_stay_still.hidden = false;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=false;
      bt_ignore.hidden=false;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
    }
  }

  function showHideText_scream() {
      if(text_scream.hidden){
          text_stay_still.hidden = true;
          text_scream.hidden = false;
          text_investigate.hidden= true;
          text_ignore.hidden = true;
          text_make_a_run.hidden = true;
          text_grab_cross.hidden = true;
          text_throw_pic.hidden = true;
          text_window.hidden = true;
          text_destroy.hidden = true;
          text_scared.hidden = true;
          text_turn_in_friend.hidden = true;


          bt_scream.hidden=true;
          bt_stay_still.hidden=true;
          bt_investigate.hidden=true;
          bt_ignore.hidden=true;
          bt_make_a_run.hidden=false;
          bt_grab_cross.hidden=false;
          bt_window.hidden=true;
          bt_throw_pic.hidden=true;
          bt_pick_up.hidden=true;
          bt_restart.hidden=true;
          bt_turn_in_friend.hidden=true;
          bt_destroy.hidden=true;
          bt_scared.hidden=true;





      } else {
        text_stay_still.hidden = false;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=false;
        bt_ignore.hidden=false;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
      }
    }
