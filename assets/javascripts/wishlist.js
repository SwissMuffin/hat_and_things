    function clearAll() {
        const productParent = document.getElementById("products");
        const productChild = document.querySelectorAll(".accessory"); // a current accessory selector
        productChild.forEach(() => {
            productParent.removeChild(document.querySelector(".accessory"));
        })
    }

function displayWishlistMod () {

    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");
        removeBtn.forEach((element) => {
            element.textContent = "Remove";
            element.className = "btn btn-outline-danger";
        })
}

function  displayWishlist () {

    //retrieving all objects from localStorage

    if (localStorage.length === 0) {

        // --- Hiding the sample object ---

        const sampleAccessory = document.querySelector(".col-sm-4");
        sampleAccessory.style.display = "none";

    }

    if (localStorage.length === 1) {

        const accessoryAsObject1 = JSON.parse(localStorage.accessory1);

        displayAccessory(accessoryAsObject1);
        displayWishlistMod();

    } else if (localStorage.length === 2) {

        const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
        const accessoryAsObject2 = JSON.parse(localStorage.accessory2);

        displayAccessory(accessoryAsObject1);
        displayAccessory(accessoryAsObject2);
        displayWishlistMod();

    } else if (localStorage.length === 3) {

        const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
        const accessoryAsObject2 = JSON.parse(localStorage.accessory2);
        const accessoryAsObject3 = JSON.parse(localStorage.accessory3);

        displayAccessory(accessoryAsObject1);
        displayAccessory(accessoryAsObject2);
        displayAccessory(accessoryAsObject3);
        displayWishlistMod();
    }

    // Parsing all string objects from the values retrieved from localStorage

    // --- conditional to accept values from the localStorage as the come
    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");

}

// --- Recalling the function on the page to render all elements in localStorage

displayWishlist();


    if (localStorage.length === 0) {
        clearAll();
    } else if (localStorage.length > 0) {

        const addWishListBtn1 = document.querySelectorAll(".card-body .btn-outline-danger")[1];
        addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

        const addWishListBtn2 = document.querySelector(".card-body .btn-outline-danger")[2];
        addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

        const addWishListBtn3 = document.querySelector(".card-body .btn-outline-danger")[3];
        addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

    }

function removeFromWishlist(key, htmlComponent, callback) {

    // --- Selection of each button element of the current loaded page

    htmlComponent = document.querySelectorAll(".card-body .btn");

    // --- HTML Element ---

    htmlComponent.forEach((element, index) => {

        element.addEventListener("click", btnRemoval, false);

        function btnRemoval(e) {

            if (e.target.className === "btn btn-outline-danger"){

                let clickedAccessory = e.target.parentElement.parentElement.parentElement;
                function clearElement() {
                    const productParent = document.getElementById("products");
                    const productChild = document.querySelectorAll(".accessory");
                    productChild.forEach(() => {
                        productParent.removeChild(document.querySelector(".accessory"));
                    })
                }

                if (index === 1) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory1');

                } else if (index === 2) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory2');

                } else if (index === 3) {

                    clickedAccessory.style.display = "none";
                    localStorage.removeItem('accessory3');
                }

            }

        }
    })

}