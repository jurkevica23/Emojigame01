//no URL iegUst vArdu
let adrese = window.location.hash.substring(1);
let vards = decodeURI(adrese.split(',')[0]   '').trim();

//mainīgie spēles darbībai
let laiks = 0; //sekundes
let kliski = 0;

//taimera mainīgie (taimeris strādās ar pirmo kliski)
let timerId = null;
let timerStarted = false;






const laukumiSaturs = ['😙','🥸','👽','😺','😙','🥶','😇','🥶','🥸','😺','👽','😇'];
let atvertilaukumi = [];
let pedejieDivi = [];

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5);
