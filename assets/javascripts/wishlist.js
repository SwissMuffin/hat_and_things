
function allAccessoriesAsItems (callback) {

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

    // --- Hiding the sample obj ect ---

    const sampleAccessory = document.querySelector(".col-sm-4");
    sampleAccessory.style.display = "none";

    allAccessoriesAsItems().forEach((element) => {
    displayAccessory(element);


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

function removeFromWishlist(accessory, callback) {

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


            /*    accessory = {
                name: accessory.children[0].children[2].children[0].textContent,
                price: accessory.children[0].children[0].textContent,
                color: accessory.children[0].children[2].children[1].textContent,
                imageHref: accessory.children[0].children[1].src

                }*/

                console.log (e);

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




