   function clearAll() {
        const productParent = document.getElementById("products");
        const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".accessory"));
        })
    }


function allAccessoriesAsItems () {

    //retrieving all objects from localStorage

    const accessory1 = localStorage.getItem('accessory1');
    const accessory2 = localStorage.getItem('accessory2');
    const accessory3 = localStorage.getItem('accessory3');

    // Parsing all string objects from the values retrieved from localStorage

    const accessoryAsObject1 = JSON.parse(accessory1);
    const accessoryAsObject2 = JSON.parse(accessory2);
    const accessoryAsObject3 = JSON.parse(accessory3);

    // Storing all values into an object

    return [accessoryAsObject1, accessoryAsObject2, accessoryAsObject3];

}

// allAccessories is being called and each time making use of the display functions of the current loaded objects

function displayWishItems() {

    // --- Hiding the sample obj ect ---

    const sampleAccessory = document.querySelector(".col-sm-4");
    sampleAccessory.style.display = "none";

    allAccessoriesAsItems().forEach((element) => {
    displayAccessory(element);

    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");

    removeBtn.forEach((element) => {
        element.textContent = "Remove";
        element.className = "btn btn-outline-danger";
    })

    //console.log(removeBtn);


    // --- Removing all string objects from localStorage memory

 /*   if (localStorage.length > 0) {

        localStorage.removeItem('accessory1');
        localStorage.removeItem('accessory2');
        localStorage.removeItem('accessory3')

    }*/

})

}

// --- Recalling the function on the page to render all elements in localStorage

displayWishItems()

const addWishListBtn1 = document.querySelectorAll(".card-body .btn-outline-danger")[1];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

const addWishListBtn2 = document.querySelector(".card-body .btn-outline-danger")[2];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

const addWishListBtn3 = document.querySelector(".card-body .btn-outline-danger")[3];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);



/*function removeFromWishlist(key, htmlComponent, callback) {

    // --- Selection of each button element of the current loaded page

    htmlComponent = document.querySelectorAll(".card-body .btn");

    // --- HTML Element ---

    htmlComponent.forEach((element, index) => {

        element.addEventListener("click", btnRemoval, false);


        function btnRemoval(e) {

            if (e.target.className === "btn btn-outline-danger"){

                const clickedAccessory = e.target.parentElement.parentElement.parentElement;
                //clickedAccessory.style.display = "none";
                console.log(clickedAccessory);
                console.log(index);

            }

        }
    })

}*/



function removeFromWishlist(key, htmlComponent, callback) {

    // --- Selection of each button element of the current loaded page

    htmlComponent = document.querySelectorAll(".card-body .btn");

    // --- HTML Element ---

    htmlComponent.forEach((element, index) => {

        element.addEventListener("click", btnRemoval, false);

        function btnRemoval(e) {

            if (e.target.className === "btn btn-outline-danger"){

                const clickedAccessory = e.target.parentElement.parentElement.parentElement;
                //clickedAccessory.style.display = "none";
                //console.log(clickedAccessory);
                //console.log(index);

                if (index === 1) {
                    //console.log("I am number 1");
                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory1');

                } else if (index === 2) {
                    clickedAccessory.style.display = "none";
                    //console.log("I am number 1");
                    localStorage.removeItem('accessory2');
                } else if (index === 3) {
                    clickedAccessory.style.display = "none";
                    //console.log("I am number 3");
                    localStorage.removeItem('accessory3');
                }

            }

        }
    })

}

//removeFromWishlist()




