
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
        const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".accessory"));
        })
    }


function loadRemoteAccessories(e, callback) {

/*    function clearAll() {
        const productParent = document.getElementById("products");
        const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".accessory"));
        })
    }*/

    switch (e.target.textContent.toLocaleLowerCase()) {

        case "hats":

            clearAll();
            accessoryArr.forEach((element) => {
                displayAccessory(element);
            })
             addToWishlist(accessoryArr);

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
                addToWishlist(socksArraySet);
            }
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
                addToWishlist(sunglassesSet);
                
            }

            sunglassesRequest.send();

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
                addToWishlist(glovesSet);

            }
            glovesRequest.send();

            break;
    }
}

function addToWishlist() {

    let accessoryArrAsJSON = [];

    let accessoryItems = document.querySelectorAll(".accessory");

    accessoryItems.forEach((accessoryItem) => {

        // ----------------- Adding an event listener on each accessory currently loaded object ---//

        accessoryItem.addEventListener("click", btnAddClick, false);


        function btnAddClick(e) {

            // ---- Isolating the event onto the button's accessory's target ---//

            if (e.target.className === "btn btn-outline-primary") {

                accessoryItem = {
                name: accessoryItem.children[0].children[2].children[0].textContent,
                price: accessoryItem.children[0].children[0].textContent,
                color: accessoryItem.children[0].children[2].children[1].textContent,
                imageHref: accessoryItem.children[0].children[1].src

                }
                // --- Storing current's event object on localStorage --- //

                let accessoryAsJson = JSON.stringify(accessoryItem);
                localStorage.setItem('accessory', accessoryAsJson);

                let accessoryAsJsonGet = localStorage.getItem('accessory');
                localStorage.removeItem('accessory');

                // --- Creating an a way to inject the accessory values from local storage to an array. ---//

                accessoryArrAsJSON.push(accessoryAsJsonGet);


                // --- Storing values from the accessoryArrAsJSON -> accessoryArrAsObj

                let accessoryArrAsObj = {
                        accessory1: accessoryArrAsJSON[0],
                        accessory2: accessoryArrAsJSON[1],
                        accessory3: accessoryArrAsJSON[2]
                    };

                     // Storing all entries into localStorage

                    localStorage.setItem('accessory1', accessoryArrAsObj.accessory1);
                    localStorage.setItem('accessory2', accessoryArrAsObj.accessory2);
                    localStorage.setItem('accessory3', accessoryArrAsObj.accessory3);

                    // --- Logic to remove the 'undefined' entries on local storage.

                    if (localStorage.accessory2 === 'undefined' & localStorage.accessory3 === 'undefined') {
                        localStorage.removeItem('accessory2');
                        localStorage.removeItem('accessory3');

                    } else if (localStorage.accessory3 === 'undefined') {
                        localStorage.removeItem('accessory3');
                    }

                // --- Limiting the accessory array to 3 items ---

                if (accessoryArrAsJSON.length === 3) {

                    alert("Your cart is full!");

                }


             // ----------------- Clearing each current's event (clicked) object off the page --------------- //

                const cardToBeClearedParent = e.target.parentElement.parentElement.parentElement.parentElement;
                const cardToBeClearedChild = e.target.parentElement.parentElement.parentElement;
                cardToBeClearedParent.removeChild(cardToBeClearedChild);

            }

        }
    })
}

addToWishlist(accessoryArr);
























