const texts = [
    "The Ultimate FiveM Roleplay Experience",
    "Built Around The Community.",
    "Create Your Own Story in RedbackRP"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.getElementById("dynamic-text");

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});

const phrases = [
    "Experience FiveM's Most Immersive Roleplay.",
    "Your Story Begins Here.",
    "Create. Roleplay. Dominate. Live the RedbackRP Experience.",
    "A City of Endless Possibilities Awaits You.",
    "Step Into the Best FiveM Server in Australia."
];

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('fade-in');
    }

    animateLogoGlow();
});

function animateLogoGlow() {
    const logo = document.querySelector(".navbar brand img");
    if (!logo) return;

    let degrees = 0;
    setInterval(() => {
        degrees = (degrees + 5) % 360;
        logo.style.boxShadow = `0 0 ${10 + 10 * Math.sin(degrees * (Math.PI / 180))}px red`;
    }, 50);
}



let phraseIndex = 0;
let index = 0;
const speed = 100; // Typing speed (lower = faster)
const pauseBetweenPhrases = 2000; // Pause before next phrase starts

function typeEffect() {
    const typeElement = document.getElementById("typewriter-text");
    if (!typeElement) return;

    typeElement.innerHTML = ""; // Clear previous text
    index = 0;
    type();

    function type() {
        if (index < phrases[phraseIndex].length) {
            typeElement.innerHTML += phrases[phraseIndex].charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                phraseIndex = (phraseIndex + 1) % phrases.length; // Cycle through phrases
                typeElement.innerHTML = ""; // Clear before new phrase
                typeEffect(); // Start typing next phrase
            }, pauseBetweenPhrases);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchFiveMStats();
    setInterval(fetchFiveMStats, 30000);  // Auto-refresh every 30 seconds
});

const serverIP = "103.152.197.233:30121";  
const corsProxy = "https://api.allorigins.win/raw?url=";  

function fetchFiveMStats() {
    console.log("Fetching FiveM server data...");

    // Fetch Players Online
    fetch(`${corsProxy}http://${serverIP}/players.json`)
        .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch players.json"))
        .then(data => {
            let players = data.contents ? JSON.parse(data.contents) : data;
            console.log("Players Online:", players);

            if (players.length > 0) {
                setElementText("player-count", `${players.length} Players`);
                setElementHTML("server-status", "🟢 Online");
                setClass("server-status-box", "online", "offline");
            } else {
                setElementText("player-count", "0 Players");
                setElementHTML("server-status", "🔴 Offline");
                setClass("server-status-box", "offline", "online");
            }

        })
        .catch(error => {
            console.error("Failed to fetch players.json:", error);
            setElementText("player-count", "❌ Offline");
            setElementHTML("server-status", "🔴 Offline");
            setClass("server-status-box", "offline", "online");
        });

    // Fetch Server Info
    fetch(`${corsProxy}http://${serverIP}/info.json`)
        .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch info.json"))
        .then(data => {
            let info = data.contents ? JSON.parse(data.contents) : data;
            console.log("Server Info:", info);

            if (info.vars?.sv_maxPing) {
                setElementText("server-ping", `${info.vars.sv_maxPing} ms`);
            } else {
                setElementText("server-ping", "N/A");
            }

            if (info.vars?.sv_uptime) {
                let uptime = parseInt(info.vars.sv_uptime);
                let hours = Math.floor(uptime / 3600);
                let minutes = Math.floor((uptime % 3600) / 60);
                setElementText("server-uptime", `${hours}h ${minutes}m`);
            } else {
                setElementText("server-uptime", "--");
            }
        })
        .catch(error => {
            console.error("Failed to fetch info.json:", error);
            setElementText("server-ping", "N/A");
            setElementText("server-uptime", "--");
        });
}

// Utility Functions
function setElementText(id, text) {
    let el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setElementHTML(id, html) {
    let el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function setClass(id, add, remove) {
    let el = document.getElementById(id);
    if (el) {
        el.classList.add(add);
        el.classList.remove(remove);
    }
}


    document.getElementById("showGangs").addEventListener("click", function() {
        document.querySelector(".gangs-container").style.display = "flex";
        document.querySelector(".businesses-container").style.display = "none";
        document.getElementById("showGangs").classList.add("active");
        document.getElementById("showBusinesses").classList.remove("active");
    });

    document.getElementById("showBusinesses").addEventListener("click", function() {
        document.querySelector(".gangs-container").style.display = "none";
        document.querySelector(".businesses-container").style.display = "flex";
        document.getElementById("showGangs").classList.remove("active");
        document.getElementById("showBusinesses").classList.add("active");
    });


