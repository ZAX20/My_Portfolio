const bodyTag = document.querySelector("body");
const mainTag = document.querySelector("main");
const humbergurBtnTag = document.querySelector(".humbergurBtn");
const containerTag = document.querySelector(".firstpageSection");
const removeOverlayBtnTag = document.querySelector(".overlayRemoveBtn");
const cardsCreateBtn = document.querySelector(".see-project");
const cardsDivTag = document.querySelector(".works");


//overlay section
function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add("overlayMenu");
    newDiv.innerHTML =
        `
    <div class="overlayContainer">
    <button class="overlayRemoveBtn"><i class="fa-solid fa-xmark fa-lg"></i></button>
    <span>Portfolio</span>
    <span>About</span>
    <span>Contact</span>
    </div>
    `;
    mainTag.appendChild(newDiv);
    newDiv.querySelector(".overlayRemoveBtn").addEventListener("click", () => {
        newDiv.style.display = "none";
        console.log("Removed");
    })
    console.log("new div created");
}

//works cards
function cardsDiv() {
    console.log("created cards div");
    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add("card-Div");
    cardsDiv.innerHTML =
        `
<div class="cards-ov">
        <div class="header-ov">
            <h2 class="tonic-cd">Tonic</h2>
            <button class="cardOvRemoveBtn"><i class="fa-solid fa-xmark fa-lg"></i></button>
        </div>
        <div class="headingList">
            <span class="canopy">Canopy</span>
            <img src="Assets/Counter.png" alt="counterPng">
            <span class="devStyle">Back End Dev</span>
            <img src="Assets/Counter.png" alt="counterPng">
            <span class="time">2015</span>
        </div>
        <div class="imageDiv">
            <img class="snapshot-photo" src="Assets/Snapshoot Portfolio mobile.png" alt="photo1">
        </div>
        <div class="cards-content">
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essent
            </p>
        </div>
        <div class="tags">
            <img src="Assets/Tags.png" alt="tags">
        </div>
        <div>
        <img id="separator" src="Assets/Separator Bottom mobile.png" alt="Separator">
        </div>
        <div class="buttons-ov">
            <button class="see-live" type="button">See Live</button>
            <button class="see-source" type="button">See Source</button>
        </div>
    </div>
    `
    cardsDivTag.appendChild(cardsDiv);
    cardsDiv.querySelector('.cardOvRemoveBtn').addEventListener('click', () => {
        cardsDiv.style.display = 'none';
    });
}

humbergurBtnTag.addEventListener("click", createDiv);
cardsCreateBtn.addEventListener("click", cardsDiv);
