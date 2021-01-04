/*------------------------------------------HATS--------------------------------------------------------*/

const hat = {
    name: "<name>",
    price: "<price>",
    color: "<color>",
    imageHref: "<imageHerf>"
};

hat.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

/*------------------------------------------TASK 02--------------------------------------------------------*/

function Accessory(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

/* --------------------------------------------TASK 03-----------------------------------------------------*/

/*const hatArray = [
    product = new Accessory("Baseball cap","11.99", "red", "whatever"),
    product = new Accessory("Baseball cap", "11.99", "blue", "whatever" ),
    product = new Accessory("Baseball cap", "11.99", "yellow", "whatever"),
    product = new Accessory("Baseball cap", "11.99", "green", "whatever"),
    product = new Accessory("Beanie", "17.99", "red", "whatever"),
    product = new Accessory("Beanie", "17.99", "blue", "whatever"),
    product = new Accessory("Beanie", "17.99", "green", "whatever"),
    product = new Accessory("Straw hat", "10.99", "green", "whatever"),
    product = new Accessory("Straw hat", "10.99", "yellow", "whatever"),
    product = new Accessory("Trilby", "10.99", "red", "whatever"),
    product = new Accessory("Trilby", "10.99", "blue", "whatever"),
    product = new Accessory("Trilby", "10.99", "yellow", "whatever"),
    product = new Accessory("Trilby", "10.99", "blue", "whatever"),
    product = new Accessory("Trilby", "10.99", "blue", "whatever")
];*/

/*---------------------------------------------TASK 04-----------------------------------------------------*/

const allHats = document.querySelectorAll(".accessory");

const hatArr = [];
   for (let i = 0; i < allHats.length; i++) {
       const valName = allHats[i].children[0].children[2].children[0].textContent;
       const valPrice = allHats[i].children[0].children[0].textContent;
       const valColor = allHats[i].children[0].children[2].children[1].children[0].textContent;
       const valImageHref = allHats[i].children[0].children[1].src;
       hatArr.push(new Accessory(`${valName}`, `${valPrice}`, `${valColor}`, `${valImageHref}`));// each iteration creates a new object according to the hat Prototype.
    }

    function displayHat (aHat) {

        const hatPrice = document.createElement("div");
        hatPrice.className = "currency btn btn-light disabled";
        hatPrice.textContent = aHat.price;

        const hatImage = document.createElement("img");
        hatImage.className = "card-img-top";
        hatImage.src = "./assets/images/red/hats/2.png" // static for demonstration purposes.

        const hatName = document.createElement("h5");
        hatName.className = "card-title";
        hatName.textContent = aHat.name;

        const hatColor = document.createElement("p");
        hatColor.className = "card-text";
        hatColor.textContent = "Color: ";

        const hatColorValue = document.createElement("em");
        hatColorValue.className = "card-text";
        hatColorValue.textContent = aHat.color; // This will be de additional class to be created for the filter
        hatColor.appendChild(hatColorValue);

        const hatButton = document.createElement("button");
        hatButton.className = "btn btn-outline-primary";
        hatButton.textContent = "Add to wishlist!";

        const hatBody = document.createElement("div");
        hatBody.className = "card-body text-center";
        hatBody.appendChild(hatName);
        hatBody.appendChild(hatColor);
        hatBody.appendChild(hatButton);

        const hatCard = document.createElement("div");
        hatCard.className = "card my-3";
        hatCard.appendChild(hatPrice);
        hatCard.appendChild(hatImage);
        hatCard.appendChild(hatBody);

        const hatAccessory = document.createElement("div");
        hatAccessory.className = "accessory col-sm-4";
        hatAccessory.appendChild(hatCard);

        document.querySelector("#products").appendChild(hatAccessory);
}

/*-------------------------------------FILTERS BY COLOR----------------------------------------------------------------*/

function highlightSelectedFilter() {
    const activeFilter = document.querySelector(".btn-group").children;
    for (let i = 0; i < activeFilter.length; i++) {
        activeFilter[i].classList.remove("active");
        activeFilter[i].addEventListener("click", activateFilter);

        function activateFilter(e) {
            e.preventDefault();
            activeFilter[i].setAttribute("class", "btn btn-outline-secondary active");
            for (let i = 0; i < allHats.length; i++) {
                if (hatArr[i]["color"].toLowerCase() === e.target.textContent.toLowerCase()) { //all hat color buttons match
                    allHats[i].setAttribute("class", "accessory col-sm-4" + ` ${hatArr[i]["color"].toLowerCase()}`);
                }
            }
        }
    }

}

function filterHatsByColor(e) {

    for (let i = 0; i < allHats.length; i++) {
        allHats[i].style.display = "none";
        if (hatArr[i]["color"].toLowerCase() === e.target.textContent.toLowerCase()) {
            allHats[i].style.display = "block";
        }
    }

    for (let i = 0; i < allHats.length; i++) {
        if (e.target.textContent.toLowerCase() === "all") {
            allHats[i].style.display = "block";
        }
    }
}
 const btnRed = document.querySelector(".btn-group").children[0];
    btnRed.addEventListener("click", highlightSelectedFilter, false);
    btnRed.addEventListener("click", filterHatsByColor, false);

 const btnBlue = document.querySelector(".btn-group").children[1];
    btnBlue.addEventListener("click", highlightSelectedFilter, false);
    btnBlue.addEventListener("click", filterHatsByColor, false);

 const btnGreen = document.querySelector(".btn-group").children[2];
    btnGreen.addEventListener("click", highlightSelectedFilter, false);
    btnGreen.addEventListener("click", filterHatsByColor, false);

 const btnYellow = document.querySelector(".btn-group").children[3];
    btnYellow.addEventListener("click", highlightSelectedFilter, false);
    btnYellow.addEventListener("click", filterHatsByColor, false);

 const btnAll = document.querySelector(".btn-group").children[4];
    btnAll.addEventListener("click", highlightSelectedFilter, false);
    btnAll.addEventListener("click", filterHatsByColor, false);

/* --------------------- Btn Hats, Socks, Sunglasses--------------------------------- */

const btnNavHat = document.querySelector(".navbar-nav").children[0];
    btnNavHat.addEventListener("click", loadRemoteAccessories, false);
const btnNavSocks = document.querySelector(".navbar-nav").children[1];
    btnNavSocks.addEventListener("click", loadRemoteAccessories, false);
const btnNavSunglasses = document.querySelector(".navbar-nav").children[2];
    btnNavSunglasses.addEventListener("click", loadRemoteAccessories, false);

function loadRemoteAccessories(e) {
    switch (e.target.textContent.toLocaleLowerCase()) {

        case "hats":

            let hatRequest = new XMLHttpRequest();
            hatRequest.open('GET', '' )
            //console.log(e.target.textContent);
            break;

        case "socks":

            let socksRequest = new XMLHttpRequest();
            socksRequest.open('GET', './socks.json', false );
            socksRequest.onload = () => {
                //console.log(socksRequest.responseText);
                let socksArray = JSON.parse(socksRequest.responseText);
                for (let i = 0; i < socksArray.length; i++) {
                   if (e.target.textContent.toLowerCase() === socksArray[i]["name"].toLowerCase()) {
                       console.log("I am here");
                   }

                }

            }
            socksRequest.send();
            //
            // console.log("Socks");
            break;

        case "sunglasses":

            let sunglassesRequest = new XMLHttpRequest();
            sunglassesRequest.open('GET', './sunglasses.json', false );
            sunglassesRequest.onload = () => {
                console.log(sunglassesRequest.responseText)
            }
            sunglassesRequest.send();
            // console.log("Sunglasses");
            break;

    }
}

