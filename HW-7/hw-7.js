

//defining texts//

let body = document.body;
let main_div = document.createElement("div");
let text_intro = document.querySelector(".intro");
let text_stay_still = document.querySelector(".stay_still");
let text_scream = document.querySelector(".scream");
let text_investigate = document.querySelector(".investigate");
let text_investigate2 = document.querySelector(".investigate2");
let text_ignore = document.querySelector(".ignore");
let text_make_a_run = document.querySelector(".make_a_run");
let text_grab_cross = document.querySelector(".grab_cross");
let text_throw_pic = document.querySelector(".throw_pic");
let text_pick_up = document.querySelector(".pick_up");
let text_window = document.querySelector(".window");
let text_destroy = document.querySelector(".destroy");
let text_destroy2 = document.querySelector(".destroy2");
let text_destroy3 = document.querySelector(".destroy3");
let text_scared = document.querySelector(".scared");
let text_turn_in_friend = document.querySelector(".turn_in_friend");
let text_turn_in_friend2 = document.querySelector(".turn_in_friend2");
let text_turn_in_friend3 = document.querySelector(".turn_in_friend3");

//defining butons//

let bt_scream = document.querySelector('#bscream');
let bt_stay_still = document.querySelector('#bstay_still');
let bt_investigate = document.querySelector('#binvestigate');
let bt_investigate2 = document.querySelector('#binvestigate2');
let bt_ignore = document.querySelector('#bignore');
let bt_make_a_run = document.querySelector('#bmake-a-run');
let bt_grab_cross = document.querySelector('#bgrab-cross');
let bt_window = document.querySelector('#bwindow');
let bt_throw_pic = document.querySelector('#bthrow-pic');
let bt_pick_up = document.querySelector('#bpick-up');
let bt_restart = document.querySelector('#brestart');
let bt_turn_in_friend = document.querySelector('#bturn-in-friend');
let bt_turn_in_friend2 = document.querySelector('#bturn-in-friend2');
let bt_turn_in_friend3 = document.querySelector('#bturn-in-friend3');
let bt_destroy = document.querySelector('#bdestroy');
let bt_destroy2 = document.querySelector('#bdestroy2');
let bt_destroy3 = document.querySelector('#bdestroy3');
let bt_scared = document.querySelector('#bscared');


//adding button events//

bt_scream.addEventListener("click", showHideText_scream);
bt_stay_still.addEventListener("click", showHideText_staystill);
bt_investigate.addEventListener("click", showHideText_investigate);
bt_investigate2.addEventListener("click", showHideText_investigate2);
bt_ignore.addEventListener("click", showHideText_ignore);
bt_make_a_run.addEventListener("click", showHideText_run);
bt_grab_cross.addEventListener("click", showHideText_cross);
bt_window.addEventListener("click", showHideText_window);
bt_throw_pic.addEventListener("click", showHideText_throw);
bt_pick_up.addEventListener("click", showHideText_pickup);
bt_restart.addEventListener("click", showHideText_intro);
bt_turn_in_friend.addEventListener("click", showHideText_friend);
bt_turn_in_friend2.addEventListener("click", showHideText_friend2);
bt_turn_in_friend3.addEventListener("click", showHideText_friend3);
bt_destroy.addEventListener("click", showHideText_destroy);
bt_destroy2.addEventListener("click", showHideText_destroy2);
bt_destroy3.addEventListener("click", showHideText_destroy3);
bt_scared.addEventListener("click", showHideText_scared);

//functions//



///////////////////////   intro    /////////////////////////////////////////




function showHideText_intro() {
    if(text_intro.hidden){
        text_intro.hidden=false;
        text_stay_still.hidden = true;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;




        bt_scream.hidden=false;
        bt_stay_still.hidden=false;
        bt_investigate.hidden=true;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=true;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;





    } else {
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = false;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_ignore.hidden=true;
      bt_investigate2.hidden=true;
      bt_make_a_run.hidden=false;
      bt_grab_cross.hidden=false;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;




    }
  }





//////////////////// stay still option  ////////////////////

function showHideText_staystill() {
    if(text_stay_still.hidden){
        text_intro.hidden=true;
        text_stay_still.hidden = false;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=false;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=false;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;





    } else {
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = false;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=false;
      bt_grab_cross.hidden=false;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;



    }
  }



//////////////////////////////   scream option   //////////////////////
  function showHideText_scream() {
      if(text_scream.hidden){
        text_intro.hidden=true;
          text_stay_still.hidden = true;
          text_scream.hidden = false;
          text_investigate.hidden= true;
          text_investigate2.hidden= true;
          text_ignore.hidden = true;
          text_make_a_run.hidden = true;
          text_grab_cross.hidden = true;
          text_throw_pic.hidden = true;
          text_window.hidden = true;
          text_destroy.hidden = true;
          text_destroy2.hidden = true;
          text_scared.hidden = true;
          text_turn_in_friend.hidden = true;
          text_turn_in_friend2.hidden = true;
          text_pick_up.hidden = true;
          text_turn_in_friend3.hidden = true;
          text_destroy3.hidden = true;


          bt_scream.hidden=true;
          bt_stay_still.hidden=true;
          bt_investigate.hidden=true;
          bt_investigate2.hidden=true;
          bt_ignore.hidden=true;
          bt_make_a_run.hidden=false;
          bt_grab_cross.hidden=false;
          bt_window.hidden=true;
          bt_throw_pic.hidden=true;
          bt_pick_up.hidden=true;
          bt_restart.hidden=true;
          bt_turn_in_friend.hidden=true;
          bt_turn_in_friend2.hidden=true;
          bt_destroy.hidden=true;
          bt_scared.hidden=true;
          bt_destroy2.hidden=true;
          bt_destroy3.hidden=true;
          bt_turn_in_friend3.hidden=true;





      } else {
        text_intro.hidden=true;
        text_stay_still.hidden = false;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=false;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=false;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;
      }
    }



///////////////////////////   investigate option   //////////////////////

    function showHideText_investigate() {
        if(text_investigate.hidden){
            text_intro.hidden=true;
            text_stay_still.hidden = true;
            text_scream.hidden = true;
            text_investigate.hidden= false;
            text_investigate2.hidden= true;
            text_ignore.hidden = true;
            text_make_a_run.hidden = true;
            text_grab_cross.hidden = true;
            text_throw_pic.hidden = true;
            text_window.hidden = true;
            text_destroy.hidden = true;
            text_destroy2.hidden = true;
            text_scared.hidden = true;
            text_turn_in_friend.hidden = true;
            text_turn_in_friend2.hidden = true;
            text_pick_up.hidden = true;
            text_turn_in_friend3.hidden = true;
            text_destroy3.hidden = true;


            bt_scream.hidden=true;
            bt_stay_still.hidden=true;
            bt_investigate.hidden=true;
            bt_investigate2.hidden=true;
            bt_ignore.hidden=true;
            bt_make_a_run.hidden=true;
            bt_grab_cross.hidden=true;
            bt_window.hidden=true;
            bt_throw_pic.hidden=true;
            bt_pick_up.hidden=true;
            bt_restart.hidden=true;
            bt_turn_in_friend.hidden=true;
            bt_turn_in_friend2.hidden=false;
            bt_destroy.hidden=true;
            bt_scared.hidden=true;
            bt_destroy2.hidden=false;
            bt_destroy3.hidden=true;
            bt_turn_in_friend3.hidden=true;





        } else {
          text_intro.hidden=false;
          text_stay_still.hidden = true;
          text_scream.hidden = true;
          text_investigate.hidden= true;
          text_investigate2.hidden= true;
          text_ignore.hidden = true;
          text_make_a_run.hidden = true;
          text_grab_cross.hidden = true;
          text_throw_pic.hidden = true;
          text_window.hidden = true;
          text_destroy.hidden = true;
          text_destroy2.hidden = true;
          text_scared.hidden = true;
          text_turn_in_friend.hidden = true;
          text_turn_in_friend2.hidden = true;
          text_pick_up.hidden = true;
          text_turn_in_friend3.hidden = true;
          text_destroy3.hidden = true;


          bt_scream.hidden=false;
          bt_stay_still.hidden=false;
          bt_investigate.hidden=true;
          bt_investigate2.hidden=true;
          bt_ignore.hidden=true;
          bt_make_a_run.hidden=true;
          bt_grab_cross.hidden=true;
          bt_window.hidden=true;
          bt_throw_pic.hidden=true;
          bt_pick_up.hidden=true;
          bt_restart.hidden=true;
          bt_turn_in_friend.hidden=true;
          bt_turn_in_friend2.hidden=true;
          bt_destroy.hidden=true;
          bt_scared.hidden=true;
          bt_destroy2.hidden=true;
          bt_destroy3.hidden=true;
          bt_turn_in_friend3.hidden=true;
        }
      }


//////////////////////////////   ignore   //////////////////////////

      function showHideText_ignore() {
          if(text_ignore.hidden){
            text_intro.hidden=true;
            text_stay_still.hidden = true;
            text_scream.hidden = true;
            text_investigate.hidden= true;
            text_investigate2.hidden= true;
            text_ignore.hidden = false;
            text_make_a_run.hidden = true;
            text_grab_cross.hidden = true;
            text_throw_pic.hidden = true;
            text_window.hidden = true;
            text_destroy.hidden = true;
            text_destroy2.hidden = true;
            text_scared.hidden = true;
            text_turn_in_friend.hidden = true;
            text_turn_in_friend2.hidden = true;
            text_pick_up.hidden = true;
            text_turn_in_friend3.hidden = true;
            text_destroy3.hidden = true;


            bt_scream.hidden=true;
            bt_stay_still.hidden=true;
            bt_investigate.hidden=true;
            bt_investigate2.hidden=false;
            bt_ignore.hidden=true;
            bt_make_a_run.hidden=true;
            bt_grab_cross.hidden=true;
            bt_window.hidden=true;
            bt_throw_pic.hidden=true;
            bt_pick_up.hidden=true;
            bt_restart.hidden=true;
            bt_turn_in_friend.hidden=true;
            bt_turn_in_friend2.hidden=true;
            bt_destroy.hidden=true;
            bt_scared.hidden=false;
            bt_destroy2.hidden=true;
            bt_destroy3.hidden=true;
            bt_turn_in_friend3.hidden=true;





          } else {
            text_intro.hidden=false;
            text_stay_still.hidden = true;
            text_scream.hidden = true;
            text_investigate.hidden= true;
            text_investigate2.hidden= true;
            text_ignore.hidden = true;
            text_make_a_run.hidden = true;
            text_grab_cross.hidden = true;
            text_throw_pic.hidden = true;
            text_window.hidden = true;
            text_destroy.hidden = true;
            text_destroy2.hidden = true;
            text_scared.hidden = true;
            text_turn_in_friend.hidden = true;
            text_turn_in_friend2.hidden = true;
            text_pick_up.hidden = true;
            text_turn_in_friend3.hidden = true;
            text_destroy3.hidden = true;


            bt_scream.hidden=false;
            bt_stay_still.hidden=false;
            bt_investigate.hidden=true;
            bt_investigate2.hidden=true;
            bt_ignore.hidden=true;
            bt_make_a_run.hidden=true;
            bt_grab_cross.hidden=true;
            bt_window.hidden=true;
            bt_throw_pic.hidden=true;
            bt_pick_up.hidden=true;
            bt_restart.hidden=true;
            bt_turn_in_friend.hidden=true;
            bt_turn_in_friend2.hidden=true;
            bt_destroy.hidden=true;
            bt_scared.hidden=true;
            bt_destroy2.hidden=true;
            bt_destroy3.hidden=true;
            bt_turn_in_friend3.hidden=true;

          }
        }




        ///////////////////////   investigate2   ////////////////////////



        function showHideText_investigate2() {
            if(text_investigate.hidden){
                text_intro.hidden=true;
                text_stay_still.hidden = true;
                text_scream.hidden = true;
                text_investigate.hidden= true;
                text_investigate2.hidden= false;
                text_ignore.hidden = true;
                text_make_a_run.hidden = true;
                text_grab_cross.hidden = true;
                text_throw_pic.hidden = true;
                text_window.hidden = true;
                text_destroy.hidden = true;
                text_destroy2.hidden = true;
                text_scared.hidden = true;
                text_turn_in_friend.hidden = true;
                text_turn_in_friend2.hidden = true;
                text_pick_up.hidden = true;
                text_turn_in_friend3.hidden = true;
                text_destroy3.hidden = true;


                bt_scream.hidden=true;
                bt_stay_still.hidden=true;
                bt_investigate.hidden=true;
                bt_investigate2.hidden=true;
                bt_ignore.hidden=true;
                bt_make_a_run.hidden=true;
                bt_grab_cross.hidden=true;
                bt_window.hidden=true;
                bt_throw_pic.hidden=true;
                bt_pick_up.hidden=true;
                bt_restart.hidden=true;
                bt_turn_in_friend.hidden=true;
                bt_turn_in_friend2.hidden=true;
                bt_destroy.hidden=true;
                bt_scared.hidden=true;
                bt_destroy2.hidden=true;
                bt_destroy3.hidden=false;
                bt_turn_in_friend3.hidden=false;





            } else {
              text_intro.hidden=false;
              text_stay_still.hidden = true;
              text_scream.hidden = true;
              text_investigate.hidden= true;
              text_investigate2.hidden= true;
              text_ignore.hidden = true;
              text_make_a_run.hidden = true;
              text_grab_cross.hidden = true;
              text_throw_pic.hidden = true;
              text_window.hidden = true;
              text_destroy.hidden = true;
              text_destroy2.hidden = true;
              text_scared.hidden = true;
              text_turn_in_friend.hidden = true;
              text_turn_in_friend2.hidden = true;
              text_pick_up.hidden = true;
              text_turn_in_friend3.hidden = true;
              text_destroy3.hidden = true;


              bt_scream.hidden=false;
              bt_stay_still.hidden=false;
              bt_investigate.hidden=true;
              bt_investigate2.hidden=true;
              bt_ignore.hidden=true;
              bt_make_a_run.hidden=true;
              bt_grab_cross.hidden=true;
              bt_window.hidden=true;
              bt_throw_pic.hidden=true;
              bt_pick_up.hidden=true;
              bt_restart.hidden=true;
              bt_turn_in_friend.hidden=true;
              bt_turn_in_friend2.hidden=true;
              bt_destroy.hidden=true;
              bt_scared.hidden=true;
              bt_destroy2.hidden=true;
              bt_destroy3.hidden=true;
              bt_turn_in_friend3.hidden=true;
            }

          }



        ////////////////////   turn in   //////////////////////


        function showHideText_friend() {
            if(text_turn_in_friend.hidden){
              text_intro.hidden=true;
              text_stay_still.hidden = true;
              text_scream.hidden = true;
              text_investigate.hidden= true;
              text_investigate2.hidden= true;
              text_ignore.hidden = true;
              text_make_a_run.hidden = true;
              text_grab_cross.hidden = true;
              text_throw_pic.hidden = true;
              text_window.hidden = true;
              text_destroy.hidden = true;
              text_destroy2.hidden = true;
              text_scared.hidden = true;
              text_turn_in_friend.hidden = false;
              text_turn_in_friend2.hidden = true;
              text_pick_up.hidden = true;
              text_turn_in_friend3.hidden = true;
              text_destroy3.hidden = true;


              bt_scream.hidden=true;
              bt_stay_still.hidden=true;
              bt_investigate.hidden=true;
              bt_investigate2.hidden=true;
              bt_ignore.hidden=true;
              bt_make_a_run.hidden=true;
              bt_grab_cross.hidden=true;
              bt_window.hidden=true;
              bt_throw_pic.hidden=true;
              bt_pick_up.hidden=true;
              bt_restart.hidden=false;
              bt_turn_in_friend.hidden=true;
              bt_turn_in_friend2.hidden=true;
              bt_destroy.hidden=true;
              bt_scared.hidden=true;
              bt_destroy2.hidden=true;
              bt_destroy3.hidden=true;
              bt_turn_in_friend3.hidden=true;


            } else {
              text_intro.hidden=false;
              text_stay_still.hidden = true;
              text_scream.hidden = true;
              text_investigate.hidden= true;
              text_investigate2.hidden= true;
              text_ignore.hidden = true;
              text_make_a_run.hidden = true;
              text_grab_cross.hidden = true;
              text_throw_pic.hidden = true;
              text_window.hidden = true;
              text_destroy.hidden = true;
              text_destroy2.hidden = true;
              text_scared.hidden = true;
              text_turn_in_friend.hidden = true;
              text_turn_in_friend2.hidden = true;
              text_pick_up.hidden = true;
              text_turn_in_friend3.hidden = true;
              text_destroy3.hidden = true;


              bt_scream.hidden=false;
              bt_stay_still.hidden=false;
              bt_investigate.hidden=true;
              bt_investigate2.hidden=true;
              bt_ignore.hidden=true;
              bt_make_a_run.hidden=true;
              bt_grab_cross.hidden=true;
              bt_window.hidden=true;
              bt_throw_pic.hidden=true;
              bt_pick_up.hidden=true;
              bt_restart.hidden=true;
              bt_turn_in_friend.hidden=true;
              bt_turn_in_friend2.hidden=true;
              bt_destroy.hidden=true;
              bt_scared.hidden=true;
              bt_destroy2.hidden=true;
              bt_destroy3.hidden=true;
              bt_turn_in_friend3.hidden=true;



            }
          }


          ////////////////////   turn in 2  //////////////////////


          function showHideText_friend2() {
              if(text_turn_in_friend2.hidden){
                text_intro.hidden=true;
                text_stay_still.hidden = true;
                text_scream.hidden = true;
                text_investigate.hidden= true;
                text_investigate2.hidden= true;
                text_ignore.hidden = true;
                text_make_a_run.hidden = true;
                text_grab_cross.hidden = true;
                text_throw_pic.hidden = true;
                text_window.hidden = true;
                text_destroy.hidden = true;
                text_destroy2.hidden = true;
                text_scared.hidden = true;
                text_turn_in_friend.hidden = true;
                text_turn_in_friend2.hidden = false;
                text_pick_up.hidden = true;
                text_turn_in_friend3.hidden = true;
                text_destroy3.hidden = true;


                bt_scream.hidden=true;
                bt_stay_still.hidden=true;
                bt_investigate.hidden=true;
                bt_investigate2.hidden=true;
                bt_ignore.hidden=true;
                bt_make_a_run.hidden=true;
                bt_grab_cross.hidden=true;
                bt_window.hidden=true;
                bt_throw_pic.hidden=true;
                bt_pick_up.hidden=true;
                bt_restart.hidden=true;
                bt_turn_in_friend.hidden=true;
                bt_turn_in_friend2.hidden=true;
                bt_destroy.hidden=true;
                bt_scared.hidden=true;
                bt_destroy2.hidden=true;
                bt_destroy3.hidden=true;
                bt_turn_in_friend3.hidden=true;


              } else {
                text_intro.hidden=false;
                text_stay_still.hidden = true;
                text_scream.hidden = true;
                text_investigate.hidden= true;
                text_investigate2.hidden= true;
                text_ignore.hidden = true;
                text_make_a_run.hidden = true;
                text_grab_cross.hidden = true;
                text_throw_pic.hidden = true;
                text_window.hidden = true;
                text_destroy.hidden = true;
                text_destroy2.hidden = true;
                text_scared.hidden = true;
                text_turn_in_friend.hidden = true;
                text_turn_in_friend2.hidden = true;
                text_pick_up.hidden = true;
                text_turn_in_friend3.hidden = true;
                text_destroy3.hidden = true;


                bt_scream.hidden=false;
                bt_stay_still.hidden=false;
                bt_investigate.hidden=true;
                bt_investigate2.hidden=true;
                bt_ignore.hidden=true;
                bt_make_a_run.hidden=true;
                bt_grab_cross.hidden=true;
                bt_window.hidden=true;
                bt_throw_pic.hidden=true;
                bt_pick_up.hidden=true;
                bt_restart.hidden=true;
                bt_turn_in_friend.hidden=true;
                bt_turn_in_friend2.hidden=true;
                bt_destroy.hidden=true;
                bt_scared.hidden=true;
                bt_destroy2.hidden=true;
                bt_destroy3.hidden=true;
                bt_turn_in_friend3.hidden=true;



              }
            }




            ////////////////////   turn in 3  //////////////////////


            function showHideText_friend3() {
                if(text_turn_in_friend3.hidden){
                  text_intro.hidden=true;
                  text_stay_still.hidden = true;
                  text_scream.hidden = true;
                  text_investigate.hidden= true;
                  text_investigate2.hidden= true;
                  text_ignore.hidden = true;
                  text_make_a_run.hidden = true;
                  text_grab_cross.hidden = true;
                  text_throw_pic.hidden = true;
                  text_window.hidden = true;
                  text_destroy.hidden = true;
                  text_destroy2.hidden = true;
                  text_scared.hidden = true;
                  text_turn_in_friend.hidden = true;
                  text_turn_in_friend2.hidden = true;
                  text_pick_up.hidden = true;
                  text_turn_in_friend3.hidden = false;
                  text_destroy3.hidden = true;


                  bt_scream.hidden=true;
                  bt_stay_still.hidden=true;
                  bt_investigate.hidden=true;
                  bt_investigate2.hidden=true;
                  bt_ignore.hidden=true;
                  bt_make_a_run.hidden=true;
                  bt_grab_cross.hidden=true;
                  bt_window.hidden=true;
                  bt_throw_pic.hidden=true;
                  bt_pick_up.hidden=true;
                  bt_restart.hidden=true;
                  bt_turn_in_friend.hidden=true;
                  bt_turn_in_friend2.hidden=true;
                  bt_destroy.hidden=true;
                  bt_scared.hidden=true;
                  bt_destroy2.hidden=true;
                  bt_destroy3.hidden=true;
                  bt_turn_in_friend3.hidden=true;


                } else {
                  text_intro.hidden=false;
                  text_stay_still.hidden = true;
                  text_scream.hidden = true;
                  text_investigate.hidden= true;
                  text_investigate2.hidden= true;
                  text_ignore.hidden = true;
                  text_make_a_run.hidden = true;
                  text_grab_cross.hidden = true;
                  text_throw_pic.hidden = true;
                  text_window.hidden = true;
                  text_destroy.hidden = true;
                  text_destroy2.hidden = true;
                  text_scared.hidden = true;
                  text_turn_in_friend.hidden = true;
                  text_turn_in_friend2.hidden = true;
                  text_pick_up.hidden = true;
                  text_turn_in_friend3.hidden = true;
                  text_destroy3.hidden = true;


                  bt_scream.hidden=false;
                  bt_stay_still.hidden=false;
                  bt_investigate.hidden=true;
                  bt_investigate2.hidden=true;
                  bt_ignore.hidden=true;
                  bt_make_a_run.hidden=true;
                  bt_grab_cross.hidden=true;
                  bt_window.hidden=true;
                  bt_throw_pic.hidden=true;
                  bt_pick_up.hidden=true;
                  bt_restart.hidden=true;
                  bt_turn_in_friend.hidden=true;
                  bt_turn_in_friend2.hidden=true;
                  bt_destroy.hidden=true;
                  bt_scared.hidden=true;
                  bt_destroy2.hidden=true;
                  bt_destroy3.hidden=true;
                  bt_turn_in_friend3.hidden=true;



                }
              }






//////////////////////////////   destroy   /////////////////////////


function showHideText_destroy() {
    if(text_destroy.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = false;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=false;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;


} else {
  text_intro.hidden=false;
  text_stay_still.hidden = true;
  text_scream.hidden = true;
  text_investigate.hidden= true;
  text_investigate2.hidden= true;
  text_ignore.hidden = true;
  text_make_a_run.hidden = true;
  text_grab_cross.hidden = true;
  text_throw_pic.hidden = true;
  text_window.hidden = true;
  text_destroy.hidden = true;
  text_destroy2.hidden = true;
  text_scared.hidden = true;
  text_turn_in_friend.hidden = true;
  text_turn_in_friend2.hidden = true;
  text_pick_up.hidden = true;
  text_turn_in_friend3.hidden = true;
  text_destroy3.hidden = true;


  bt_scream.hidden=false;
  bt_stay_still.hidden=false;
  bt_investigate.hidden=true;
  bt_investigate2.hidden=true;
  bt_ignore.hidden=true;
  bt_make_a_run.hidden=true;
  bt_grab_cross.hidden=true;
  bt_window.hidden=true;
  bt_throw_pic.hidden=true;
  bt_pick_up.hidden=true;
  bt_restart.hidden=true;
  bt_turn_in_friend.hidden=true;
  bt_turn_in_friend2.hidden=true;
  bt_destroy.hidden=true;
  bt_scared.hidden=true;
  bt_destroy2.hidden=true;
  bt_destroy3.hidden=true;
  bt_turn_in_friend3.hidden=true;
}
}



//////////////////////////////   destroy 2  /////////////////////////


function showHideText_destroy2() {
    if(text_destroy2.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = false;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;



} else {
  text_intro.hidden=false;
  text_stay_still.hidden = true;
  text_scream.hidden = true;
  text_investigate.hidden= true;
  text_investigate2.hidden= true;
  text_ignore.hidden = true;
  text_make_a_run.hidden = true;
  text_grab_cross.hidden = true;
  text_throw_pic.hidden = true;
  text_window.hidden = true;
  text_destroy.hidden = true;
  text_destroy2.hidden = true;
  text_scared.hidden = true;
  text_turn_in_friend.hidden = true;
  text_turn_in_friend2.hidden = true;
  text_pick_up.hidden = true;
  text_turn_in_friend3.hidden = true;
  text_destroy3.hidden = true;


  bt_scream.hidden=false;
  bt_stay_still.hidden=false;
  bt_investigate.hidden=true;
  bt_investigate2.hidden=true;
  bt_ignore.hidden=true;
  bt_make_a_run.hidden=true;
  bt_grab_cross.hidden=true;
  bt_window.hidden=true;
  bt_throw_pic.hidden=true;
  bt_pick_up.hidden=true;
  bt_restart.hidden=true;
  bt_turn_in_friend.hidden=true;
  bt_turn_in_friend2.hidden=true;
  bt_destroy.hidden=true;
  bt_scared.hidden=true;
  bt_destroy2.hidden=true;
  bt_destroy3.hidden=true;
  bt_turn_in_friend3.hidden=true;
}
}


//////////////////////////////   destroy 3  /////////////////////////


function showHideText_destroy3() {
    if(text_destroy3.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = false;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;



} else {
  text_intro.hidden=false;
  text_stay_still.hidden = true;
  text_scream.hidden = true;
  text_investigate.hidden= true;
  text_investigate2.hidden= true;
  text_ignore.hidden = true;
  text_make_a_run.hidden = true;
  text_grab_cross.hidden = true;
  text_throw_pic.hidden = true;
  text_window.hidden = true;
  text_destroy.hidden = true;
  text_destroy2.hidden = true;
  text_scared.hidden = true;
  text_turn_in_friend.hidden = true;
  text_turn_in_friend2.hidden = true;
  text_pick_up.hidden = true;
  text_turn_in_friend3.hidden = true;
  text_destroy3.hidden = true;


  bt_scream.hidden=false;
  bt_stay_still.hidden=false;
  bt_investigate.hidden=true;
  bt_investigate2.hidden=true;
  bt_ignore.hidden=true;
  bt_make_a_run.hidden=true;
  bt_grab_cross.hidden=true;
  bt_window.hidden=true;
  bt_throw_pic.hidden=true;
  bt_pick_up.hidden=true;
  bt_restart.hidden=true;
  bt_turn_in_friend.hidden=true;
  bt_turn_in_friend2.hidden=true;
  bt_destroy.hidden=true;
  bt_scared.hidden=true;
  bt_destroy2.hidden=true;
  bt_destroy3.hidden=true;
  bt_turn_in_friend3.hidden=true;
}
}




//////////////////////////   make a run   /////////////////////



function showHideText_run() {
    if(text_make_a_run.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = false;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=false;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;



    } else {
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = false;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=false;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;

    }
  }

  ///////////////////////////   window   //////////////////////////////////


  function showHideText_window() {
      if(text_window.hidden){
        text_intro.hidden=true;
        text_stay_still.hidden = true;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = false;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=true;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=true;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=false;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;



      } else {
        text_intro.hidden=false;
        text_stay_still.hidden = true;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=false;
        bt_stay_still.hidden=false;
        bt_investigate.hidden=true;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=true;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;


      }
    }


    ////////////////////////   scared   ///////////////////////////////



    function showHideText_scared() {
        if(text_scared.hidden){
          text_intro.hidden=true;
          text_stay_still.hidden = true;
          text_scream.hidden = true;
          text_investigate.hidden= true;
          text_investigate2.hidden= true;
          text_ignore.hidden = true;
          text_make_a_run.hidden = true;
          text_grab_cross.hidden = true;
          text_throw_pic.hidden = true;
          text_window.hidden = true;
          text_destroy.hidden = true;
          text_destroy2.hidden = true;
          text_scared.hidden = false;
          text_turn_in_friend.hidden = true;
          text_turn_in_friend2.hidden = true;
          text_pick_up.hidden = true;
          text_turn_in_friend3.hidden = true;
          text_destroy3.hidden = true;


          bt_scream.hidden=true;
          bt_stay_still.hidden=true;
          bt_investigate.hidden=true;
          bt_investigate2.hidden=true;
          bt_ignore.hidden=true;
          bt_make_a_run.hidden=true;
          bt_grab_cross.hidden=true;
          bt_window.hidden=true;
          bt_throw_pic.hidden=true;
          bt_pick_up.hidden=true;
          bt_restart.hidden=true;
          bt_turn_in_friend.hidden=true;
          bt_turn_in_friend2.hidden=true;
          bt_destroy.hidden=true;
          bt_scared.hidden=true;
          bt_destroy2.hidden=true;
          bt_destroy3.hidden=true;
          bt_turn_in_friend3.hidden=true;


        } else {
          text_intro.hidden=false;
          text_stay_still.hidden = true;
          text_scream.hidden = true;
          text_investigate.hidden= true;
          text_investigate2.hidden= true;
          text_ignore.hidden = true;
          text_make_a_run.hidden = true;
          text_grab_cross.hidden = true;
          text_throw_pic.hidden = true;
          text_window.hidden = true;
          text_destroy.hidden = true;
          text_destroy2.hidden = true;
          text_scared.hidden = true;
          text_turn_in_friend.hidden = true;
          text_turn_in_friend2.hidden = true;
          text_pick_up.hidden = true;
          text_turn_in_friend3.hidden = true;
          text_destroy3.hidden = true;


          bt_scream.hidden=false;
          bt_stay_still.hidden=false;
          bt_investigate.hidden=true;
          bt_investigate2.hidden=true;
          bt_ignore.hidden=true;
          bt_make_a_run.hidden=true;
          bt_grab_cross.hidden=true;
          bt_window.hidden=true;
          bt_throw_pic.hidden=true;
          bt_pick_up.hidden=true;
          bt_restart.hidden=true;
          bt_turn_in_friend.hidden=true;
          bt_turn_in_friend2.hidden=true;
          bt_destroy.hidden=true;
          bt_scared.hidden=true;
          bt_destroy2.hidden=true;
          bt_destroy3.hidden=true;
          bt_turn_in_friend3.hidden=true;


        }
      }


///////////////////////////   grab cross   /////////////////////////////////


function showHideText_cross() {
    if(text_scared.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = false;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=false;
      bt_pick_up.hidden=false;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;


    } else {
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = false;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;




      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=false;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;


    }
  }



  ///////////////////////////   throw pic   ////////////////////////////////



  function showHideText_throw() {
      if(text_throw_pic.hidden){
        text_intro.hidden=true;
        text_stay_still.hidden = true;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = false;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=true;
        bt_stay_still.hidden=true;
        bt_investigate.hidden=true;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=true;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=false;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;


      } else {
        text_intro.hidden=false;
        text_stay_still.hidden = true;
        text_scream.hidden = true;
        text_investigate.hidden= true;
        text_investigate2.hidden= true;
        text_ignore.hidden = true;
        text_make_a_run.hidden = true;
        text_grab_cross.hidden = true;
        text_throw_pic.hidden = true;
        text_window.hidden = true;
        text_destroy.hidden = true;
        text_destroy2.hidden = true;
        text_scared.hidden = true;
        text_turn_in_friend.hidden = true;
        text_turn_in_friend2.hidden = true;
        text_pick_up.hidden = true;
        text_turn_in_friend3.hidden = true;
        text_destroy3.hidden = true;


        bt_scream.hidden=false;
        bt_stay_still.hidden=false;
        bt_investigate.hidden=true;
        bt_investigate2.hidden=true;
        bt_ignore.hidden=true;
        bt_make_a_run.hidden=true;
        bt_grab_cross.hidden=true;
        bt_window.hidden=true;
        bt_throw_pic.hidden=true;
        bt_pick_up.hidden=true;
        bt_restart.hidden=true;
        bt_turn_in_friend.hidden=true;
        bt_turn_in_friend2.hidden=true;
        bt_destroy.hidden=true;
        bt_scared.hidden=true;
        bt_destroy2.hidden=true;
        bt_destroy3.hidden=true;
        bt_turn_in_friend3.hidden=true;


      }
    }



//////////////////////////   pick up   ////////////////////////////////////



function showHideText_pickup() {
    if(text_pick_up.hidden){
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = true;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = false;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=true;
      bt_turn_in_friend.hidden=false;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=false;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;


    } else {
      text_intro.hidden=true;
      text_stay_still.hidden = true;
      text_scream.hidden = true;
      text_investigate.hidden= true;
      text_investigate2.hidden= true;
      text_ignore.hidden = true;
      text_make_a_run.hidden = true;
      text_grab_cross.hidden = true;
      text_throw_pic.hidden = false;
      text_window.hidden = true;
      text_destroy.hidden = true;
      text_destroy2.hidden = true;
      text_scared.hidden = true;
      text_turn_in_friend.hidden = true;
      text_turn_in_friend2.hidden = true;
      text_pick_up.hidden = true;
      text_turn_in_friend3.hidden = true;
      text_destroy3.hidden = true;


      bt_scream.hidden=true;
      bt_stay_still.hidden=true;
      bt_investigate.hidden=true;
      bt_investigate2.hidden=true;
      bt_ignore.hidden=true;
      bt_make_a_run.hidden=true;
      bt_grab_cross.hidden=true;
      bt_window.hidden=true;
      bt_throw_pic.hidden=true;
      bt_pick_up.hidden=true;
      bt_restart.hidden=false;
      bt_turn_in_friend.hidden=true;
      bt_turn_in_friend2.hidden=true;
      bt_destroy.hidden=true;
      bt_scared.hidden=true;
      bt_destroy2.hidden=true;
      bt_destroy3.hidden=true;
      bt_turn_in_friend3.hidden=true;


    }
  }
