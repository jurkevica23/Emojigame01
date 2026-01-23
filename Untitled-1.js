//no URL iegUst vArdu
let adrese = window.location.hash.substring(1);
let vards = decodeURI(adrese.split(',')[0] ||  '').trim();

//mainīgie spēles darbībai
let laiks = 0; //sekundes
let kliski = 0;

//taimera mainīgie (taimeris strādās ar pirmo kliski)
let timerId = null;
let timerStarted = false;

function formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function updateHD(){
    const ellaiks = document.querySelector('#laiks');
    const elklikski = document.querySelector('#klikski');
    if (ellaiks) ellaiks.textContent = formatTime(laiks);
    if (elKlikski) elKlikski.textContent = klikski;
}

function startTimerIfNeeded() {
if (timerStarted) return;
timerStarted = true;
timerId = setInterval(() => {
    laiks++;
    updateHUD();
}, 1000); 
}

function stopTimer() {
    if (timerId) {
        clearInterval (timerId);
        timerId = null;
    }
}


const laukumiSaturs = ['😙','🥸','👽','😺','😙','🥶','😇','🥶','🥸','😺','👽','😇'];
let atvertilaukumi = [];
let pedejieDivi = [];

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5);

//ģenerē dinamiski spēles laukumu
document.addEventListener('DOMContentLoaded', function() {
    //drošībai; ja nav vārda aizsūta uz sākumu
    if (!vards) {
        window.location.href = '/';
        return;
    }

    let spelesLauks = document.querySelector('.speles_lauk');
    spelesLauks.innerHTML = '';
    laukumiSajaukti.forEach((emoji, index) => {
        let bloks = document.createElement('div');
        bloks.classList.add('bloks');
        bloks.setAttribute('data-idex', index);
        bloks.innerText = ''
        bloks.addEventListener('click', function() {
            veiktGajienu(bloks, emoji);
        });
        spelesLauks.appendChild(bloks);
    })
    
    const elVards = document.querySelector('#vardsHUD');
    if (elVards) elVards.textContent = vards;

    updateHUD()
});

function veiktGajienu(bloks, emoji) {
    //neļauj atvērt jau atvērto, neļauj atvērt vairāk par 2 katriņām
    if (bloks.classList.contains('atverts') || pedejieDivi.lenght === 2) {
        return; 
    }

    startTimerIfNeeded(); 

    //parāda emoji, ja uzklikšķina
    bloks.innerText = emoji;
    bloks.classList.add('atverts')
    klikski++;
    updateHUD();

    //saglabā 2 pēdējās kartiņas 
    pedejieDivi.push({bloks, emoji});

    //ja atverās 2 katrītes, pārbauda sakritību
    if (pedejieDivi.lenght === 2) {
        let [pirmais, otrais] = pedejieDivi;

        if (pirmais, otrais === otrais.emoji) {
            atvertilaukumi.push(pirmais, otrais);
            pedejieDivi = [];

            //parbauda vai spēle pabeigta (visi laukumi atvērt)
            if (atvertilaukumi.lenght === laukumiSajaukti.lenght)
                stopTimer();
            //parāda rezultātu
            setTimeout(() => {
                alter
            })
        }
    }
}