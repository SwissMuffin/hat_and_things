/*------------------------------------------accessoryS--------------------------------------------------------*/
const accessory = {
    name: "<name>",
    price: "<price>",
    color: "<color>",
    imageHref: "<imageHerf>"
};

accessory.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

/*------------------------------------------TASK 02--------------------------------------------------------*/

function Accessory(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

/*Accessory.prototype.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}*/

Accessory.prototype.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

/* --------------------------------------------TASK 03-----------------------------------------------------*/

/*const allAccessories = [
    product = new Accessory("Baseball cap","11.99", "red", "waccessoryever"),
    product = new Accessory("Baseball cap", "11.99", "blue", "waccessoryever" ),
    product = new Accessory("Baseball cap", "11.99", "yellow", "waccessoryever"),
    product = new Accessory("Baseball cap", "11.99", "green", "waccessoryever"),
    product = new Accessory("Beanie", "17.99", "red", "waccessoryever"),
    product = new Accessory("Beanie", "17.99", "blue", "waccessoryever"),
    product = new Accessory("Beanie", "17.99", "green", "waccessoryever"),
    product = new Accessory("Straw accessory", "10.99", "green", "waccessoryever"),
    product = new Accessory("Straw accessory", "10.99", "yellow", "waccessoryever"),
    product = new Accessory("Trilby", "10.99", "red", "waccessoryever"),
    product = new Accessory("Trilby", "10.99", "blue", "waccessoryever"),
    product = new Accessory("Trilby", "10.99", "yellow", "waccessoryever"),
    product = new Accessory("Trilby", "10.99", "blue", "waccessoryever"),
    product = new Accessory("Trilby", "10.99", "blue", "waccessoryever")
];*/

/*---------------------------------------------TASK 04-----------------------------------------------------*/

const allAccessories = document.querySelectorAll(".accessory");
const accessoryArr = [];
for (let i = 0; i < allAccessories.length; i++) {
    const valName = allAccessories[i].children[0].children[2].children[0].textContent;
    const valPrice = allAccessories[i].children[0].children[0].textContent;
    const valColor = allAccessories[i].children[0].children[2].children[1].children[0].textContent;
    const valImageHref = allAccessories[i].children[0].children[1].src;
    accessoryArr.push(new Accessory(`${valName}`, `${valPrice}`, `${valColor}`, `${valImageHref}`));// each iteration creates a new object according to the accessory Prototype.
}

/*function allItems () {
    const allAccessories = document.querySelectorAll(".accessory");
    const accessoryArr = [];
    for (let i = 0; i < allAccessories.length; i++) {
       const valName = allAccessories[i].children[0].children[2].children[0].textContent;
       const valPrice = allAccessories[i].children[0].children[0].textContent;
       const valColor = allAccessories[i].children[0].children[2].children[1].children[0].textContent;
       const valImageHref = allAccessories[i].children[0].children[1].src;
       accessoryArr.push(new Accessory(`${valName}`, `${valPrice}`, `${valColor}`, `${valImageHref}`));// each iteration creates a new object according to the accessory Prototype.
    }
    return accessoryArr;

}*/


function displayAccessory(anAccessory) {

    const accessoryPrice = document.createElement("div");
    accessoryPrice.className = "currency btn btn-light disabled";
    accessoryPrice.textContent = anAccessory.price;

    const accessoryImage = document.createElement("img");
    accessoryImage.className = "card-img-top";
    accessoryImage.src = anAccessory.imageHref;

    const accessoryName = document.createElement("h5");
    accessoryName.className = "card-title";
    accessoryName.textContent = anAccessory.name;

    const accessoryColor = document.createElement("p");
    accessoryColor.className = "card-text";
    accessoryColor.textContent = "Color: ";

    const accessoryColorValue = document.createElement("em");
    accessoryColorValue.className = "card-text";
    accessoryColorValue.textContent = anAccessory.color; // This will be de additional class to be created for the filter
    accessoryColor.appendChild(accessoryColorValue);

    const accessoryButton = document.createElement("button");
    accessoryButton.className = "btn btn-outline-primary";
    accessoryButton.textContent = "Add to wishlist!";

    const accessoryBody = document.createElement("div");
    accessoryBody.className = "card-body text-center";
    accessoryBody.appendChild(accessoryName);
    accessoryBody.appendChild(accessoryColor);
    accessoryBody.appendChild(accessoryButton);

    const accessoryCard = document.createElement("div");
    accessoryCard.className = "card my-3";
    accessoryCard.appendChild(accessoryPrice);
    accessoryCard.appendChild(accessoryImage);
    accessoryCard.appendChild(accessoryBody);

    const accessoryAccessory = document.createElement("div");
    accessoryAccessory.className = "accessory col-sm-4";
    accessoryAccessory.appendChild(accessoryCard);

    document.querySelector("#products").appendChild(accessoryAccessory);
}

/*-------------------------------------FILTERS BY COLOR----------------------------------------------------------------*/

function highlightSelectedFilter() {
    const activeFilter = document.querySelectorAll(".btn-group .btn");
    activeFilter.forEach((element) => {
        const valColor = element.textContent;
        element.classList.remove("active");
        element.onload = (e) => {
            if (valColor === e.target.textContent.toLowerCase()) {
                element.setAttribute("class", "btn btn-outline-secondary active");
            }
        }
    })
}


function filterAccessoryByColor(e) {

    const allCurrentProjects = document.querySelectorAll(".accessory");
    allCurrentProjects.forEach((element) => {
        element.style.display = "none";
        const valColor = element.children[0].children[2].children[1].children[0].textContent;

        if (valColor === e.target.textContent.toLowerCase()) {
            element.style.display = "block";
        } else if (e.target.textContent.toLowerCase() === "all") {
            element.style.display = "block";
        }
    })

}

const btnRed = document.querySelector(".btn-group").children[0];
btnRed.addEventListener("click", highlightSelectedFilter, false);
btnRed.addEventListener("click", filterAccessoryByColor, false);

const btnBlue = document.querySelector(".btn-group").children[1];
btnBlue.addEventListener("click", highlightSelectedFilter, false);
btnBlue.addEventListener("click", filterAccessoryByColor, false);

const btnGreen = document.querySelector(".btn-group").children[2];
btnGreen.addEventListener("click", highlightSelectedFilter, false);
btnGreen.addEventListener("click", filterAccessoryByColor, false);

const btnYellow = document.querySelector(".btn-group").children[3];
btnYellow.addEventListener("click", highlightSelectedFilter, false);
btnYellow.addEventListener("click", filterAccessoryByColor, false);

const btnAll = document.querySelector(".btn-group").children[4];
btnAll.addEventListener("click", highlightSelectedFilter, false);
btnAll.addEventListener("click", filterAccessoryByColor, false);

/* --------------------- Btn accessorys, Socks, Sunglasses--------------------------------- */

const btnNavhat = document.querySelector(".navbar-nav").children[0];
btnNavhat.addEventListener("click", loadRemoteAccessories, false);

const btnNavSocks = document.querySelector(".navbar-nav").children[1];
btnNavSocks.addEventListener("click", loadRemoteAccessories, false);

const btnNavSunglasses = document.querySelector(".navbar-nav").children[2];
btnNavSunglasses.addEventListener("click", loadRemoteAccessories, false);

const btnNavGloves = document.querySelector(".navbar-nav").children[3];
btnNavGloves.addEventListener("click", loadRemoteAccessories, false);


function loadRemoteAccessories(e, callback) {

    function clearAll() {
        const productParent = document.getElementById("products");
        const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".accessory"));
        })
    }

    switch (e.target.textContent.toLocaleLowerCase()) {

        case "hats":

            clearAll();
            accessoryArr.forEach((element) => {
                displayAccessory(element);
            })
            addToWishlist();
            break;

        case "socks":

            clearAll();
            let socksRequest = new XMLHttpRequest();
            socksRequest.open('GET', './socks.json', false);
            socksRequest.onload = () => {
                let socksArray = JSON.parse(socksRequest.responseText);
                for (let i = 0; i < socksArray.length; i++) {
                    displayAccessory(socksArray[i]);
                }
            }

            socksRequest.send();
            //addToWishlist();
            break;

        case "sunglasses":

            clearAll();
            let sunglassesRequest = new XMLHttpRequest();
            sunglassesRequest.open('GET', './sunglasses.json', false);
            sunglassesRequest.onload = () => {
                let sunglassesSet = JSON.parse(sunglassesRequest.responseText);
                for (let i = 0; i < sunglassesSet.length; i++) {
                    displayAccessory(sunglassesSet[i]);
                }
            }

            sunglassesRequest.send();

            //addToWishlist();
            break;

        case "gloves":
            clearAll();
            let glovesRequest = new XMLHttpRequest();
            glovesRequest.open('GET', './gloves.json', false);
            glovesRequest.onload = () => {
                let glovesSet = JSON.parse(glovesRequest.responseText);
                for (let i = 0; i < glovesSet.length; i++) {
                    displayAccessory(glovesSet[i]); //position in the array unique can be used
                }
            }

            glovesRequest.send();
            //addToWishlist();
            break;
    }
}

/*function addToWishlist (accessory) {

    const addBtn = document.querySelectorAll(".card-body .btn");

        addBtn.forEach((btnElements, btnIndex) => {

            btnElements.addEventListener("click", btnAddClicked, false);

            function btnAddClicked (e) {

            let accessoryAsJson = JSON.stringify(accessory);
            localStorage.setItem('accessory1', accessoryAsJson);
            console.log(accessoryAsJson);
            console.log(e);
            console.log(accessory);

        }

    });

}*/

addToWishlist(accessoryArr[0])//


function addToWishlist(accessory) {

    let accessoryArrAsJSON = [];

    allAccessories.forEach((accessory, index) => {

        // ----------------- Adding an event listener on each accessory currently loaded object ---------------

        accessory.addEventListener("click", btnAddClick, false);


        function btnAddClick(e) {

            // ---- Isolating the event onto the button's accessory's target ----

            if (e.target.className === "btn btn-outline-primary") {

                accessory = {
                name: accessory.children[0].children[2].children[0].textContent,
                price: accessory.children[0].children[0].textContent,
                color: accessory.children[0].children[2].children[1].textContent,
                imageHref: accessory.children[0].children[1].src

                }
                // ----------------- Storing current's event object on localStorage ---------------

                let accessoryAsJson = JSON.stringify(accessory);
                localStorage.setItem('accessory', accessoryAsJson);
                let accessoryAsJsonGet = localStorage.getItem('accessory');
                localStorage.removeItem('accessory');

                // Creating an a way to inject the accessory values from local storage to an array.

                accessoryArrAsJSON.push(accessoryAsJsonGet);


                // Limiting the accessory array to 3 items

                if (accessoryArrAsJSON.length === 3) {

                    alert("Your cart is full!");

                    let accessoryArrAsObj = {
                        accessory1: accessoryArrAsJSON[0],
                        accessory2: accessoryArrAsJSON[1],
                        accessory3: accessoryArrAsJSON[2]
                    };

                    // Storing all entries into localStorage

                    localStorage.setItem('accessory1', accessoryArrAsObj.accessory1 );
                    localStorage.setItem('accessory2', accessoryArrAsObj.accessory2);
                    localStorage.setItem('accessory3', accessoryArrAsObj.accessory3);

                    //console.log(accessoryArrAsObj);

                }


             // ----------------- Clearing each current's event (clicked) object off the page --------------- //

                const cardToBeClearedParent = e.target.parentElement.parentElement.parentElement.parentElement;
                const cardToBeClearedChild = e.target.parentElement.parentElement.parentElement;
                cardToBeClearedParent.removeChild(cardToBeClearedChild);

                // ---- OUTPUT TEST ----

            //console.log(accessoryArrAsJSON) ; // Any click event that will occur on each contained accessory element.
            //console.log(e.length); // It is the same event's listener accessory object.
            //console.log(accessoryArrAsJSON);

            }

        }
    })
}





















