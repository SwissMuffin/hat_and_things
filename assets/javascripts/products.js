'use strict';
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
        };
    });
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
    });

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


// --- Btn accessories, Socks, Sunglasses --- //


const btnNavhat = document.querySelector(".navbar-nav").children[0];
btnNavhat.addEventListener("click", loadRemoteAccessories, false);

const btnNavSocks = document.querySelector(".navbar-nav").children[1];
btnNavSocks.addEventListener("click", loadRemoteAccessories, false);

const btnNavSunglasses = document.querySelector(".navbar-nav").children[2];
btnNavSunglasses.addEventListener("click", loadRemoteAccessories, false);

const btnNavGloves = document.querySelector(".navbar-nav").children[3];
btnNavGloves.addEventListener("click", loadRemoteAccessories, false);

function clearAll() {
    const productParent = document.getElementById("products");
    const productChild = document.querySelectorAll(".accessory");
    productChild.forEach(() => {
        productParent.removeChild(document.querySelector(".accessory"));
    });
}


function loadRemoteAccessories(e) {

    switch (e.target.textContent.toLocaleLowerCase()) {

        case "hats":
            clearAll();
            accessoryArr.forEach((element) => {
                displayAccessory(element);
            });

            activeItem("btn btn-outline-primary", addToWishlist);

            break;

        case "socks":

            clearAll();
            let socksRequest = new XMLHttpRequest();
            socksRequest.open('GET', './socks.json', false);
            socksRequest.onload = () => {

                let socksArraySet = JSON.parse(socksRequest.responseText);
                for (let i = 0; i < socksArraySet.length; i++) {
                    displayAccessory(socksArraySet[i]);
                }

                activeItem("btn btn-outline-primary", addToWishlist);

            };
            socksRequest.send();
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

                activeItem("btn btn-outline-primary", addToWishlist);

            };
            sunglassesRequest.send();
            break;

        case "gloves":

            clearAll();

            let glovesRequest = new XMLHttpRequest();
            glovesRequest.open('GET', './gloves.json', false);
            glovesRequest.onload = () => {

                let glovesSet = JSON.parse(glovesRequest.responseText);
                for (let i = 0; i < glovesSet.length; i++) {
                    displayAccessory(glovesSet[i]);
                }

                activeItem("btn btn-outline-primary", addToWishlist);

            };
            glovesRequest.send();
            break;
    }
}

function addToWishlist(accessory){

    accessory = {

        name: accessory.children[0].children[2].children[0].textContent,
        price: accessory.children[0].children[0].textContent,
        color: accessory.children[0].children[2].children[1].textContent,
        imageHref: accessory.children[0].children[1].src
    };


    if (localStorage.length == 0) {

        let accessoryObject = JSON.stringify(accessory);
        localStorage.setItem('accessory1', accessoryObject);
        return localStorage;
    }

    if (localStorage.length == 1) {

        if (localStorage.accessory2 || localStorage.accessory3) {

            let accessoryObject = JSON.stringify(accessory);
            localStorage.setItem('accessory1', accessoryObject);
            return localStorage;

        }

        let accessoryObject = JSON.stringify(accessory);
        localStorage.setItem('accessory2', accessoryObject);
        return localStorage;

    }

    if (localStorage.length == 2 ) {

        if (localStorage.accessory3 && localStorage.accessory2) {

            let accessoryObject = JSON.stringify(accessory);
            localStorage.setItem('accessory1', accessoryObject);
            return localStorage;

        }

        if (localStorage.accessory3 && localStorage.accessory1) {

            let accessoryObject = JSON.stringify(accessory);
            localStorage.setItem('accessory2', accessoryObject);
            return localStorage;

        }

        let accessoryObject = JSON.stringify(accessory);
        localStorage.setItem('accessory3', accessoryObject);
        return localStorage;
    }

    if (localStorage.length == 3 ) {
        alert ("You have reached max of 3 items!")
    }

}

activeItem("btn btn-outline-primary", addToWishlist);























