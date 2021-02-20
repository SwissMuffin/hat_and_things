
function displayWishlistMod () {

    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");
        removeBtn.forEach((element) => {
            element.textContent = "Remove";
            element.className = "btn btn-outline-danger";
        })
}

function  displayWishlist () {

    //retrieving all objects from localStorage


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

    }else if (localStorage.length === 3) {

        const accessoryAsObject1 = JSON.parse(localStorage.accessory1);
        const accessoryAsObject2 = JSON.parse(localStorage.accessory2);
        const accessoryAsObject3 = JSON.parse(localStorage.accessory3);

        displayAccessory(accessoryAsObject1);
        displayAccessory(accessoryAsObject2);
        displayAccessory(accessoryAsObject3);
        displayWishlistMod();
    }


    // Parsing all string objects from the values retrieved from localStorage


    // --- Testing ---


    // --- conditional to accept values from the localStorage as the come
    const removeBtn = document.querySelectorAll(".card-body .btn-outline-primary");

    // Storing all values into an object


    /*if (localStorage.length > 0) {

        for (let i = 0; i < 3; i++) {
            const accessoryAsObject1 = JSON.parse(accessory1);
            displayAccessory(accessoryAsObject1);

        }


    }*/

 /*   while (localStorage.accessory) {
        console.log("I am here Here");
        this.localStorage.length += 1;
    }*/

    /*if (localStorage.length > 0) {

        if (accessory1) {

            console.log("I am here");
            const accessoryAsObject1 = JSON.parse(accessory1);
            displayAccessory(accessoryAsObject1)

            removeBtn.textContent = "Remove";
            removeBtn.className = "btn btn-outline-danger";

        } else if (accessory2) {

            const accessoryAsObject1 = JSON.parse(accessory1);
            const accessoryAsObject2 = JSON.parse(accessory2);

            displayAccessory(accessoryAsObject1)
            displayAccessory(accessoryAsObject2)

            removeBtn.textContent = "Remove";
            removeBtn.className = "btn btn-outline-danger";


        } else if (accessory3) {

            const accessoryAsObject1 = JSON.parse(accessory1);
            const accessoryAsObject2 = JSON.parse(accessory2);
            const accessoryAsObject3 = JSON.parse(accessory3);

            displayAccessory(accessoryAsObject1);
            displayAccessory(accessoryAsObject2);
            displayAccessory(accessoryAsObject3);

            removeBtn.textContent = "Remove";
            removeBtn.className = "btn btn-outline-danger";

        }

    }*/





    //return [accessoryAsObject1, accessoryAsObject2, accessoryAsObject3];
}

//console.log(localStorage.accessory1);


//console.log(accessoryAsObject);

/*const accessoryAsObjectArr = {
    accessory1AsObject1: JSON.parse(localStorage.accessory1),
    accessoryAsObject2: JSON.parse(localStorage.accessory2),
    accessoryAsObject3: JSON.parse(localStorage.accessory3)
}*/


/*if (localStorage.accessory2 === "undefined") {
    console.log(" I am nowhere");
}*/


displayWishlist();




// allAccessories is being called and each time making use of the display functions of the current loaded objects

/*function displayWishItems() {


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
        })

}*/

// --- Recalling the function on the page to render all elements in localStorage

/*displayWishItems()*/

/*const addWishListBtn1 = document.querySelectorAll(".card-body .btn-outline-danger")[1];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

const addWishListBtn2 = document.querySelector(".card-body .btn-outline-danger")[2];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);

const addWishListBtn3 = document.querySelector(".card-body .btn-outline-danger")[3];
addWishListBtn1.addEventListener("click", removeFromWishlist(), false);*/



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

                let clickedAccessory = e.target.parentElement.parentElement.parentElement;
                function clearElement(clearedElement) {
                    const productParent = document.getElementById("products");
                    const productChild = document.querySelectorAll(".accessory");
                    productChild.forEach(() => {
                        productParent.removeChild(clearedElement);
                    })
    }


                //console.log(clickedAccessory);
                //let clickedAccessoryChild = ;
                //clickedAccessory.style.display = "none";
                //console.log(clickedAccessory);
                //console.log(index);

                if (index === 1) {
                    //console.log("I am number 1");
                    clickedAccessory.style.display = "none";
                    //clearElement(clickedAccessory);

                    //clearElement(clickedAccessory);
                    localStorage.removeItem('accessory1');
                    //console.log(clickedAccessory);


                } else if (index === 2) {
                    clickedAccessory.style.display = "none";
                    //console.log("I am number 1");
                    //clearElement(clickedAccessory);

                    //clearElement(clickedAccessory);
                    localStorage.removeItem('accessory2');
                } else if (index === 3) {
                    clickedAccessory.style.display = "none";
                    //console.log("I am number 3");
                    //clearElement(clickedAccessory);

                    //clearElement(clickedAccessory);
                    localStorage.removeItem('accessory3');
                }


            }

        }
    })

}

//removeFromWishlist()




