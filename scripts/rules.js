document.addEventListener("DOMContentLoaded", function () {
    setupAccordions();
});

function setupAccordions() {
    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
}

// Function to Switch Between Server Rules and Gang Rules
function switchAccordion(type) {
    document.getElementById("globalrules").style.display = type === "server" ? "block" : "none";
    document.getElementById("gangrules").style.display = type === "gang" ? "block" : "none";
}



document.addEventListener("DOMContentLoaded", function () {
    let someElement = document.getElementById("someElementId");
    if (someElement) {
        someElement.addEventListener("click", function () {
            console.log("Clicked!");
        });
    } else {
        console.error("Element 'someElementId' not found.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("Rules script loaded!");
    // Ensure all IDs exist in the HTML before setting properties
    Object.keys(rulesData).forEach(rule => {
        let element = document.getElementById(rule);
        if (element) {
            element.innerHTML = rulesData[rule];
        } else {
            console.error(`Element with ID '${rule}' not found.`);
        }
    });
});


// Rules Data
const rulesData = {
    general: `
        <h2>General Rules</h2>
        <p>A working, quality mic is required. All communications must remain in English.</p>
        <p>Hospitals are designated safe zones, meaning no hostile roleplay is to be started in or around these areas...</p>
        <p>No scamming for anything classed as ‘clean’...</p>
        <p>Players under 18 are welcome here, but we expect a level of respect and maturity...</p>
        <p>Blatant combat logging may lead to a 24-hour ban...</p>
        <p>Supporter cars are not to be sold in city until they are no longer available in the supporter store...</p>
        <p>Not setting up your character with effort will be considered NITRP and be a rule break.</p>
    `,

    respect: `
        <h2>Respect</h2>
        <p>Any form of racial, homophobic, discriminatory language, hate speech, suicide, or sexually violent roleplay will not be tolerated.</p>
        <p>Respect must be maintained in all community interactions...</p>
        <p>Sharing other community members' private information without consent will result in a ban.</p>
        <p>RedbackRP is not liable for personal actions towards another player or community.</p>
    `,

    staff: `
        <h2>Staff</h2>
        <p>Do not pretend to be staff at any time.</p>
        <p>Do not private message developers, admins, or moderators outside of Discord...</p>
        <p>You are not to deal with server rule breaks yourself...</p>
        <p>If you are unhappy with staff treatment, create a management support ticket.</p>
    `,

    hostile: `
        <h2>Hostile</h2>
        <p>A hostage situation requires at least 6 paramedics for an ambulance hostage...</p>
        <p>No robbing/hostage-taking at all clean job sites...</p>
        <p>Individuals taken hostage must have no connection to the captor.</p>
        <p>Shooting police and paramedics should be a last resort...</p>
        <p>Stealing an emergency vehicle or uniform must be for a valid, pre-planned reason...</p>
        <p>No robbing players or player-owned vehicles with less than 3 police officers...</p>
        <p>No robbing a vehicle of a player who has crashed/head popped.</p>
    `,

    breaking: `
        <h2>Breaking Character</h2>
        <p>Stay in character at all times. No OOC conversation within the server.</p>
        <p>If an issue arises, fully role-play the scenario...</p>
        <p>Our server does not have an OOC chat feature...</p>
        <p>Your police character can only go to civ if you leave the police force...</p>
        <p>No transferring items/money between characters without prior GOV approval.</p>
    `,

    trolling: `
        <h2>Trolling</h2>
        <p>Stay in character at all times. No OOC conversation within the server.</p>
        <p>If an issue arises, fully role-play the scenario...</p>
        <p>Do not use Twitter or other means in the server for OOC questions.</p>
    `,

    mature: `
        <h2>Mature Content</h2>
        <p>The city contains 18+ content. Please be respectful to community members; <b>NO MEANS NO!</b> Any form of sexual harassment will not be tolerated.</p>
        <p>This includes <b>NO rape or overly erotic RP, NO role-playing as a person under 18, and NO suicide RP, disability RP, or any other discriminatory RP.</b></p>
        <p>Extracurricular activities must be done in private housing.</p>
        <p>You must remain clothed at all times. While we allow certain naked body parts for specific clothing options, they are not intended for walking around naked.</p>
    `,

    fear: `
        <h2>Fear RP/Valuing Life</h2>
        <p>Failing to realistically fear for your life when threatened with weapons or serious harm is not acceptable.</p>
        <p>When confronted with the threat of death, treat it as you would in real life: you are mortal and have only one life.</p>
        <p>If someone holds a gun to your head for your wallet, you would hand it over.</p>
        <p>Antagonizing gangs, police, or armed individuals without a valid character reason is not permitted.</p>
        <p>Players should avoid inserting themselves into ongoing situations or shootouts involving two groups or a group and the police.</p>
    `,

    newlife: `
        <h2>RRP New Life Rule</h2>
        <p>Each time you are fully downed (Die), you are “killed” out of that individual RP that led to your “death”.</p>
        <p>This means the previous <b>up to 30 minutes</b> of the past events within the hostile RP are to be forgotten.</p>
        <p>If downed and treated by an on-duty paramedic, you may remember past RP but should role-play injury effects.</p>
        <p><b>NLR applies only to hostile RPs.</b> If you accidentally crash your bike, it does not count.</p>
        <p>While downed, you <b>cannot remember or use any information</b> you hear or see.</p>
        <p><b>No rejoining the RP for 30 minutes</b> if downed, including returning to retrieve your vehicle.</p>
        <p>Pronouncing yourself dead means <b>your character is permanently deleted</b> from the database.</p>
    `,

    injuries: `
        <h2>Role Playing Injuries</h2>
        <p>Use <b>common sense</b>, role play your injuries as if you’d experience them in real life.</p>
        <p>The health bar is not an indication of your injuries if you are shot 3 times but your health bar has not decreased this does not mean you are uninjured</p>
        <p>Role-play your injuries by laying down, crouching after a crash, leaning against a wall, or limping. You MUST show signs of being hurt. Our F3 menu offers a great selection of emotes to assist with your injured RP.</p>
        <p>If you are revived by a paramedic, please don’t just walk away as if you’re done. The RP continues! Spend some time explaining your injuries or your experience in the hospital.</p>
        <p>Do not combat log or use the alpha ambulance to bypass the respawn timer or avoid medical RP with the paramedics.</p>
        <p>No forcing medical RP. If someone is downed you can not take them to be revived to rob them or to continue hostile RP</p>
    `,

    powergaming: `
        <h2>Power Gaming</h2>
        <p>Using methods outside of the game to gain an advantage or failing to integrate into the world in a sensible manner is prohibited.</p>
        <p>Examples:</p>
        <ul>
            <li>Spam Emoting (e.g. prone spam) in combat.</li>
            <li>Using mechanics/jobs in an unrealistic way (e.g. fixing cars in a chase).</li>
            <li>Using a known bug or issue to your advantage.</li>
            <li>Talking, organizing, or calling out locations while downed.</li>
            <li>Holding spawn points to trap players.</li>
            <li>Using motorcycles as an initial getaway vehicle in heists.</li>
            <li>"Flopping" (U) during RP means you're out; do not rejoin the scenario.</li>
        </ul>
    `,

    metagaming: `
        <h2>Meta Gaming</h2>
        <p>Purposely using or sharing information your character did not acquire in-game to influence role-play is prohibited.</p>
        <p>Examples:</p>
        <ul>
            <li>Calling for backup while being held at gunpoint without transmitting through in-game voice.</li>
            <li>Using Discord tags or Twitch streams to identify players.</li>
            <li>Acting on information gained outside of role-play (e.g. watching a stream).</li>
        </ul>
    `,

    exploiting: `
        <h2>Exploiting</h2>
        <p>Using bugs or additional features to gain in-game perks, inventories, cash, etc., is prohibited.</p>
        <p>Examples:</p>
        <ul>
            <li>Transferring assets between characters.</li>
            <li>Repairing cars mid-pursuit with a job menu.</li>
            <li>Selling or handing out emergency service equipment/evidence.</li>
            <li>Exploiting loopholes or grey areas within the rules.</li>
        </ul>
    `,

    realistic: `
        <h2>Realistic Roleplay</h2>
        <p>Role-play scenarios as you would experience them in real life.</p>
        <p>Examples:</p>
        <ul>
            <li>Respect locked doors even if they appear open.</li>
            <li>Realistically role-play injuries (e.g. limping, crouching, laying down after a crash).</li>
            <li>Driving should be realistic—no off-roading supercars or extreme jumps.</li>
            <li>Pitting is allowed up to 200 km/h; ramming is never allowed.</li>
            <li>Hitman role-play is not allowed.</li>
            <li>Do not carry others while riding a bike.</li>
        </ul>
    `,

    badfaith: `
        <h2>Bad Faith Reporting</h2>
        <p>Bad-faith reporting occurs when a player withholds evidence of a rule break to report it later, violating the expectation of timely reports.</p>
        <p>This also applies when a banned player starts submitting reports on others in retaliation.</p>
        <p>Punishments may apply to the player submitting the report.</p>
    `,

    additional: `
        <h2>Additional Information</h2>
        <p>Selling or purchasing anything in-game for real money is against FiveM TOS and RRP rules.</p>
        <p>Whitelist status is granted to players who create great RP and follow the rules—<b>you cannot apply for it</b>.</p>
        <p>Keep in-game concerns out of the game; address them in Discord.</p>
        <p>Player wills must be approved and posted at least one month (IRL) before a permanent character death.</p>
        <p>Only verified organizations may claim colors, turf, and names in RRP.</p>
        <p>Gangs must apply through our website; we do not accept gangs from other servers.</p>
    `,

    appsmembers: `
        <h2>Section 1 - Applications + Member Caps</h2>
        <p>You must have at least 5 active members when making a gang / racing crew application. Applications that state you have less than 5 members will be denied.</p>
        <div class="gang-tier unverified">
                <h2>Crew = 5 Members.</h2>
        </div>

        <div class="gang-tier unverified">
                <h2>Unverified - 6 Members.</h2>
        </div>

        <div class="gang-tier trial-gang">
                <h2>Trial Status - 10 Members.</h2>
        </div>

        <div class="gang-tier official-organisation">
                <h2>Official Organisation Status - 14 Members.</h2>
        </div>

        <div class="gang-tier redback-verified">
                <h2>Redback Official Verification = 16 Members.</h2>
        </div>
    `,


    generalgang: `
        <h2>Section 3 - General Gang / Racing Crew Rules</h2>
        <p><b>All server rules apply at all times</b></p>
        <p>As a gang, you are expected and required to provide hostile RP.</p>
        <p>As a gang, you are also expected to claim and attempt to run a 'market' (Bench).</p>
        <p>As a racing crew, you are expected to be active in the boosting / racing / drifting scenes.</p>
        <p>All requests for tags must go through the ⁠✅request-roles🛑</p>
        <p>New members must have their names setup correctly before requesting tags (Example = [BIA] Lamar Carter | VIC).</p>
    `,

    ganghostile: `
        <h2>Section 4 - Hostile RP rules</h2>
        <p>Only those with tags may participate in hostile RP</p>
        <p>If you are engaging in hostile RP you MUST be wearing at least 2 x identifiers (in your primary gang colours) and be easily identifiable as a member of your gang.</p>
        <p>If you are engaging in hostile RP you MUST be driving a vehicle with your gangs primary colours. (Paint costs $10k....No excuses).</p>
        <p>During a heist, you must use the same cap as every other civilian (6 members), this includes externals. There should never be more than 6 players involved in the initial hostile RP of the bank.</p>
        <p>If you are downed in hostile RP, there is a very straight forward process to avoid being shot again within 30 minutes. Simply remove your gang clothing, do not drive a gang coloured car and do not loiter out in public.</p>
        <p>Non stop hostile RP is for gang v gang only</p>
        <p>Civs who want to get into gang situations, like drugs, money wash etc, have no right to complain if they get retaliated upon</p>
        <p>Gangs can only retaliate against civs once, this shouldn't be a bullying situation</p>
        <p>If civs continue to do the above situation this is a rule break (report it)</p>
        <p>Once a hostile situation has finished. You need to wait a minimum of 7 days before starting the same conflict scenario. Meaning you can start hostilities in other ways that are different to the initial one started.</p>
        <h3>Robberies</h3>
        <p>If you are in conflict between another org, (during a Kos or war) then you may rob them at any present time.</p>
    `,

    pkscooldowns: `
        <h2>Section 5 - PKs + Cooldowns</h2>
        <p>Joining a gang should not be a decision made without thinking about it. Only on the rarest occasion should you be allowed to leave a gang with your life (character slot).</p>
        <p>A HARD PK (character slot deletion) must be communicated to RedBack Gang Staff BEFORE doing so, in your request-and-concerns channel. Failure to do so may see the PK ignored.</p>
        <p>If you leave a gang, by way of PK, or if you're lucky enough to walk away with your life, will start a 7 day cooldown before you can join another gang.</p>
        <p>If a gang is disbanded, this cooldown is removed.</p>
    `,

    colorturf: `
        <h2>Section 6 - Color + Turf contesting</h2>
        <p>Colors can be contested by any gang at any time.</p>
        <p>You cannot take into account items / weapons lost during conflict when making excessive demands will result in serious consequences.</p>
    `,

    gangdemands: `
        <h2>Section 7 - Demands</h2>
        <p>Demands to end hostile RP must not be excessive and must be within the server economy.</p>
        <p>Turfs can also be contested, however once a group reaches verified and purchases an MLO, that turf cannot be contested.</p>
    `,

    gangarounds: `
        <h2>Section 8 - Hangarounds, prospects, associates (People who do not have your tags-roles on this discord)</h2>
        <p>Cannot partake in hostile RP vs another group.</p>
        <p>Cannot wear your custom clothing items however may wear supporter clothes.</p>
        <p>Can wear your gang colored clothing items, however these must be removed if your gang is involved in hostile RP.</p>
        <p>Can drive your gang colored cars, however these must not be used if your gang is invovled in hostile RP.</p>
        <p>Can scout for your gang.</p>
        <p>Can grind for your gang.</p>
        <h3>MC Specific</h3>
        <p>MC supporters / prospects CAN wear their designated supporter / prospect clothing, however as above must remove said clothing if hostile RP is going to occur.</p>
        <p>If an MC supporter / prospect is found in their clothing by an opposing group during hostile RP that the MC isn't aware is coming, they can be used as ransom and the MC MUST treat said ransom demand as they would a fully patched member.</p><br>

        <p><b>If your gang is found to abusing the above to start hostile RP or use the above as additional members you will have this privilege removed</b></p>
    `,

    gangmisc: `
        <h2>Section 9 - Misc Rules</h2>
        <p>Stealing other gang clothing must be done in RP, and must be from an alive player, not a downed one. There must be a significant reason to do so and the clothing item must be discarded at the next server restart.
        <p>Hand holding is strictly forbidden. You may run a bench / market with another group, however you may not craft or retaliate together. If you are in a lab / at a bench crafting at the same time you are hand holding, due to the fact that if you are attacked at that time you will retaliate together.
        <p>Hostile patchovers are not going to be a common thing. Any request for a hostile patchover must go through your request-and-concerns channel and must have video evidence of the initial request from the person being patched over and must be ok'd by RedBack Gang Staff.
    `,

    gangpunish: `
        <h2>Section 10 - Punishments</h2>
        <p>Gangs may face punishments, including strikes, demotion or disbandment, for the following reasons.

        <p>Multiple bans.</p>
        <p>Excessive rule breaks.</p>
        <p>Poor quality RP.</p>
        <p>Cheaters in the gang.</p>
        <p>Inactivity.</p>

        <p><b>IMPORTANT = JOINING A GANG LEAVES YOU AT THE MERCY OF YOUR GANG LEADER, WHO MAY HARD PK YOU (CHARACTER DELETE) FOR WHATEVER REASON THEY CHOOSE</b></p>
    `,

    ganginactivity: `
        <h2>Section 11 - Inactivity</h2>
        <p>A gang will be classified as inactive if it meets any of the following conditions and has not advised gang management of reason for inactivity:</p>

        <li>Fewer than 3 active members log into the server for 7 consecutive days.</li>
        <li>The gang does not engage in any roleplay (RP) activity for 14 days (e.g., no hostile RP, no business activity, no presence in gang-related events).</li>
        <li>Leadership inactivity: If a gangs leadership is absent for 14+ days without appointing an acting leadership, the gang will be considered inactive.</li>

        <p><b>Gangs will have 7 days to retain their status before their gang status is reduced. Every 4 days succeeding this point the status will continue to drop until the organisation has disbanded.</b><p>
    `,


};




// Accordion Toggle
function toggleAccordion(element, rule) {
const item = element.parentElement;
item.classList.toggle("active");
}

// Search Rules
function searchRules() {
let input = document.getElementById("search-rules").value.toLowerCase();
let items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    let header = item.querySelector(".accordion-header").innerText.toLowerCase();
    let content = item.querySelector(".accordion-content").innerText.toLowerCase();

    if (header.includes(input) || content.includes(input)) {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
});
}

// Scroll-to-Top Button
const topButton = document.getElementById("top-button");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
