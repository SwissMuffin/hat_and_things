function clearAll() {
        const productParent = document.getElementById("products");
        const productChild = document.querySelectorAll(".col-sm-4"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".col-sm-4"));
        })
    }

function allAccessoriesAsItems (callback) {

    //Clearing all elements of the page


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

function displayWishItems(callback) {

    // --- Hiding the sample object ---

    const sampleAccessory = document.querySelector(".col-sm-4");
    sampleAccessory.style.display = "none";

    allAccessoriesAsItems().forEach((element) => {
    displayWishlist(element);


    // --- Removing all string objects from localStorage memory

 /*   if (localStorage.length > 0) {

        localStorage.removeItem('accessory1');
        localStorage.removeItem('accessory2');
        localStorage.removeItem('accessory3')

    }*/

})

}

displayWishItems()

function removeFromWishlist(callback) {

    // --- Selection of each button element of the current loaded page

    const htmlComponent = document.querySelectorAll(".card-body .btn");


    // --- HTML Element ---

    htmlComponent.forEach((element) => {
        element.addEventListener("click", test, false);
        function test(e) {
            //console.log(e.target.parentElement.parentElement.parentElement)

            if (e.target.className === "btn btn-outline-danger"){


                const clickedAccessory = e.target.parentElement.parentElement.parentElement;
                clickedAccessory.style.display = "none";

              /* if (displayWishItems() === clickedAccessory) {

               }*/
            }


        }
    })



    /*htmlComponent.addEventListener("click", removeItem, false);

        function removeItem (key) {

            console.log();

            if (key.target.firstChild === allAccessoriesAsItems()["accessoryAsObject1"] || allAccessoriesAsItems()["accessoryAsObject2"] ||  allAccessoriesAsItems()["accessoryAsObject3"] ) {

                console.log(key)
            }
        }*/
}

removeFromWishlist()


function displayWishlist (anAccessory) {
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
    accessoryButton.className = "btn btn-outline-danger";
    accessoryButton.textContent = "Remove";

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



