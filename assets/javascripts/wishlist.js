'use strict';

function clearAll() {
    const productParent = document.getElementById("products");
    const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
    productChild.forEach(() => {
        productParent.removeChild(document.querySelector(".accessory"));
    });
}

function displayWishlistMod () {

    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");
    removeBtn.forEach((element) => {
        element.textContent = "Remove";
        element.className = "btn btn-outline-danger";
    });
}

function  displayWishlist () {

    //retrieving all objects from localStorage

    if (localStorage.length === 0) {

        // --- Hiding the sample object ---

        const sampleAccessory = document.querySelector(".col-sm-4");
        sampleAccessory.style.display = "block";

    }

    if (localStorage.length == 1) {

        const emptyWishListItem = document.querySelector(".col-sm-4");
        emptyWishListItem.style.display = "none";

        if (localStorage.accessory1) {

            const accessoryAsObject = JSON.parse(localStorage.accessory1);
            displayAccessory(accessoryAsObject);
            displayWishlistMod();

        } else if (localStorage.accessory2) {

            const accessoryAsObject = JSON.parse(localStorage.accessory2);
            displayAccessory(accessoryAsObject);
            displayWishlistMod();

        } else if (localStorage.accessory3) {

            const accessoryAsObject = JSON.parse(localStorage.accessory3);
            displayAccessory(accessoryAsObject);
            displayWishlistMod();

        }

    } else if (localStorage.length == 2) {

        const emptyWishListItem = document.querySelector(".col-sm-4");
        emptyWishListItem.style.display = "none";


        if (localStorage.accessory1 && localStorage.accessory2 ) {

            const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
            const accessoryAsObject2 = JSON.parse(localStorage.accessory2);
            displayAccessory(accessoryAsObject1);
            displayAccessory(accessoryAsObject2);
            displayWishlistMod();

        } else if (localStorage.accessory1 && localStorage.accessory3)  {

            const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
            const accessoryAsObject3 = JSON.parse(localStorage.accessory3);
            displayAccessory(accessoryAsObject1);
            displayAccessory(accessoryAsObject3);
            displayWishlistMod();

        } else if (localStorage.accessory2 && localStorage.accessory3) {
            const accessoryAsObject2 = JSON.parse(localStorage.accessory2);
            const accessoryAsObject3 = JSON.parse(localStorage.accessory3);
            displayAccessory(accessoryAsObject2);
            displayAccessory(accessoryAsObject3);
            displayWishlistMod();

        }


    } else if (localStorage.length == 3) {

        const emptyWishListItem = document.querySelector(".col-sm-4");
        emptyWishListItem.style.display = "none";

        const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
        const accessoryAsObject2 = JSON.parse(localStorage.accessory2);
        const accessoryAsObject3 = JSON.parse(localStorage.accessory3);

        displayAccessory(accessoryAsObject1);
        displayAccessory(accessoryAsObject2);
        displayAccessory(accessoryAsObject3);
        displayWishlistMod();
    }

}

// --- Recalling the function on the page to render all elements in localStorage

displayWishlist();

activeItem("btn btn-outline-danger", removeFromWishlist);

function removeFromWishlist(key, htmlComponent, callback) {

    // --- Selection of each button element of the current loaded page

    htmlComponent = document.querySelectorAll(".card-body .btn");

    // --- HTML Element ---

    htmlComponent.forEach((element, index) => {

        element.addEventListener("click", btnRemoval, false);

        function btnRemoval(e) {

            if (e.target.className == "btn btn-outline-danger"){

                let clickedAccessory = e.target.parentElement.parentElement.parentElement;

                if (index == 1) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory1');

                    if (localStorage.length == 1) {

                        if (localStorage.accessory2) {
                            clickedAccessory.style.display = "none";
                            localStorage.removeItem('accessory2');

                        } else if (localStorage.accessory3) {
                            clickedAccessory.style.display = "none";
                            localStorage.removeItem('accessory3');
                        }

                    }

                } else if (index == 2) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory2');

                } else if (index == 3) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory3');

                }

            }

        }
    });

}