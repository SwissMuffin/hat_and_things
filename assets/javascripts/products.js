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

function Hat(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

/* --------------------------------------------TASK 03-----------------------------------------------------*/

/*const hatArray = [
    product = new Hat("Baseball cap","11.99", "red", "whatever"),
    product = new Hat("Baseball cap", "11.99", "blue", "whatever" ),
    product = new Hat("Baseball cap", "11.99", "yellow", "whatever"),
    product = new Hat("Baseball cap", "11.99", "green", "whatever"),
    product = new Hat("Beanie", "17.99", "red", "whatever"),
    product = new Hat("Beanie", "17.99", "blue", "whatever"),
    product = new Hat("Beanie", "17.99", "green", "whatever"),
    product = new Hat("Straw hat", "10.99", "green", "whatever"),
    product = new Hat("Straw hat", "10.99", "yellow", "whatever"),
    product = new Hat("Trilby", "10.99", "red", "whatever"),
    product = new Hat("Trilby", "10.99", "blue", "whatever"),
    product = new Hat("Trilby", "10.99", "yellow", "whatever"),
    product = new Hat("Trilby", "10.99", "blue", "whatever"),
    product = new Hat("Trilby", "10.99", "blue", "whatever")
];*/

/*---------------------------------------------TASK 04-----------------------------------------------------*/

const allHats = document.querySelectorAll(".container");
const allDomHats = allHats[2].children[0].children; // It loops from this!

const allArrHats = [];
const hatArr = [];
   for (let i = 0; i < allDomHats.length; i++) {
       const valName = allDomHats[i].children[0].children[2].children[0].textContent;
       const valPrice = allDomHats[i].children[0].children[0].textContent;
       const valColor = allDomHats[i].children[0].children[2].children[1].children[0].textContent;
       const valImageHref = allDomHats[i].children[0].children[1].src;
       hatArr[i] = new Hat(`${valName}`, `${valPrice}`, `${valColor}`); // each iteration creates a new object according to the hat Prototype.
       allArrHats.push(hatArr[i]); //pushing elements from the loop to populate new array.
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
    //const arrSelection = [];
    for (let i = 0; i < activeFilter.length; i++) {
        activeFilter[i].classList.remove("active");
        // activates the selection on button tha has been clicked!
        activeFilter[i].addEventListener("click", activateFilter);
        function activateFilter(e) {
            e.preventDefault();
            activeFilter[i].setAttribute("class", "btn btn-outline-secondary active");
            console.log (allArrHats[1]);
            //allArrHats[i].target.className.setAttribute("class", acessor)
            let val = e.target.textContent.toLowerCase();
            //console.log(val);
        }
    }
}

 const btnRed = document.querySelector(".btn-group").children[0];
    btnRed.addEventListener("click", highlightSelectedFilter, false);

 const btnBlue = document.querySelector(".btn-group").children[1];
    btnBlue.addEventListener("click", highlightSelectedFilter, false);
    

 const btnGreen = document.querySelector(".btn-group").children[2];
    btnGreen.addEventListener("click", highlightSelectedFilter, false);

 const btnYellow = document.querySelector(".btn-group").children[3];
    btnYellow.addEventListener("click", highlightSelectedFilter, false);