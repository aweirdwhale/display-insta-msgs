/*
###########################################################################
#                      DISPLAYING INSTAGRAM MESSAGES                      #
#                                  ARDUINO                                #
#     This code use 'johnny-five' and '@androz2091/insta.js' npm libs     #
#                                                                         #
#     This bot is open-source, thank you for any help you can provide     #
#                                                                         #
#                                                                         #
###########################################################################
*/



//setUp Johnny-Five for displlaying
const five = require("johnny-five");
const board = new five.Board({port: "Com6"});

//Get Instagram Messages
const Insta = require('@androz2091/insta.js');
const { username, password } = require('../logins.json');

//Get Discord Messages
// const Discord = require('Discord.js');
// const token = require('../logins.json');

const Iclient = new Insta.Client();
    // const Dclient = new Discord.Client();

//Check if it's the right Insta account
Iclient.on('connected', () => {
    console.log(`==>> ${Iclient.user.username} <<== Is that the right Username?`);
});

    //Check if it's the right Discord account
    // Dclient.on('connected', () => {
    //   console.log(`==>> ${Dclient.user.username} <<== Is that the right Username?`);
    // });

//See when you recieved a new message
//And display it on a LED
board.on("ready", () => {
    const led = new five.Led(10); //set the LED's pin
    


      //   Dclient.on('messageCreate', (message) => {
  
      //     message.markSeen();

      //     if (message) { //Is it a random message?
      //         console.log(`==>> +1 new message from ${message.author.username} <<==`) //Useless
      //         //Utilisation de la matrice LED dès que je la reçoit :)

      //         led.blink();//on Led
      //         function ledKill() {
      //           setTimeout(function(){ led.stop() }, 3000);//Led off
      //         }
      //         // led.pulse(); //display
      //         // delay(500); //500ms
      //         // led.off();//set the led off after 500ms
      //     }
  
  // });


    Iclient.on('messageCreate', (message) => {
        if (message.author.id === Iclient.user.id) return; //not your message lol
    
        message.markSeen();


        if (message) { //Is it a random message?
            console.log(`==>> +1 new message from ${message.author.username} <<==`) //Useless
            //Utilisation de la matrice LED dès que je la reçoit :)

            led.on();//on Led
            function ledKill() {
              setTimeout(function(){ led.stop() }, 1000);//Led off
            }
            // led.pulse(); //display
            // delay(500); //500ms
            // led.off();//set the led off after 500ms
        }
    
        if (message.author.username === 'username') { //Is it a message from a particular person?
            console.log(`==>> +1 new message from ${message.author.username} <<==`) //Useless too
            //Utilisation de la matrice LED dès que je la reçoit :)
            led.pulse();//on Led
            function ledKill() {
              setTimeout(function(){ led.stop() }, 1000);//Led Off
            }
            // led.blink(); //display it
            // delay(500); //500ms
            // led.off();//set the led off after 500ms
        }
    
    });

  });


Iclient.login(username, password);
// Dclient.login(token);