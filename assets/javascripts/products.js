/*------------------------------------------HATS--------------------------------------------------------*/
/* Define a simple JavaScript object that represents a hat, with properties name,
 price, color, and imageHref.*/

const hat = {
    name: "<name>",
    price: "<price>",
    color: "<color>",
    imageHref: "<imageHerf>"
};

/*------------------------------------------TASK 02--------------------------------------------------------*/

/* TASK 2. Attach a function toString() to the object that will
 return a String that nicely formats the properties of the hat object i.e. "<name>,
 color <color>, price: <price>, image: <imageHref>". You can test this object using
 console.log().*/

hat.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

/* --------------------------------------------TASK 03-----------------------------------------------------*/

/* TASK 3. Now define a JavaScript prototype for a Hat that can be used to construct the object from the
 previous task. The prototype will need to set the property of a hat: name, price, color, and
 imageHref.*/

function HAT(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}
 HAT.prototype.toString = function (name, price, color, imageHref) {
    return `name ${name} price ${price} color ${color} imageHref ${imageHref}`
};

//hat.prototype.toString = hat.toString;

/*--------- Hat Object instances --------- */

const chapeu1 = new HAT("Sombreiro", "40fr", "Marron", "whatever");
const chapeu2 = new HAT("Akubra", "50fr", "Verde", "whatever");
const chapeu3 = new HAT("Bicorne", "60fr", "Preto", "whatever");

/*--------- END of Hat Object instances --------- */

/*---------------------------------------------TASK 04-----------------------------------------------------*/

/* TASK 5tAdd a function toString() to the prototype that is the same as the toString() method
 from the previous task. Leave the object created in the previous task at the top of your products.js
 file.
        ???????
 */


/*------------------------------------------------TASK 05--------------------------------------------------------*/

// TASK 05 Define an array of hat objects using the Hat prototype that represent all of the hats in
// the static HTML.


/*    const allHats = document.querySelectorAll(".card");
    const hatArr = [];
    const allArrHats = [];
    for (let i = 0; i < allHats.length; i++) {
        const valName = allHats[i].children[2].children[0].textContent
        const valPrice = allHats[i].children[0].textContent;
        const valColor = allHats[i].children[2].children[1].children[0].textContent;
        //const valImage = allHats[i].children[1].src;
        hatArr[i] = new HAT(`${valName}`, `${valPrice}`, `${valColor}`); // each iteration creates a new object according to the hat Prototype.
       allArrHats.push(hatArr[i]); //pushing elements from the loop to populate new array.
    }*/
    //console.log(allArrHats); // < = index was added to give access the array elements of this function.

const allHats = document.querySelectorAll(".container");
const allDomHats = allHats[2].children[0].children;
const valName = allHats[2].children[0].children[2].children[0].children[2].children[0].textContent;
const valPrice = allHats[2].children[0].children[2].children[0].children[0].textContent;
const valImageHref = allHats[2].children[0].children[2].children[0].children[1].src;
const valColor = allHats[2].children[0].children[2].children[0].children[2].children[1].children[0].textContent;
/*
const hatArr = [];
const allArrHats = [];
    for (let i = 0; i < allDomHats.length; i++) {
        const valName = allDomHats[i].allHats[2].children[0].children.textContent
        const valPrice = allDomHats[i].children[0].textContent;
        const valColor = allDomHats[i].children[2].children[1].children[0].textContent;
        //const valImage = allHats[i].children[1].src;
        hatArr[i] = new HAT(`${valName}`, `${valPrice}`, `${valColor}`); // each iteration creates a new object according to the hat Prototype.
       allArrHats.push(hatArr[i]); //pushing elements from the loop to populate new array.
    }
*/



/*------------------------------------------------TASK 06--------------------------------------------------------*/

/*
 TASK 06 Define a function displayHat(hat) that will accept a Hat object and create an HTML component using that object.
 The HTML component needs to exactly match the structure of an individual static HTML hat component. Use the
 function to render all of the hat objects on the products.html page instead of the static HTML.
 */

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

/*The products.html page includes a filter-by-color control and this should show or hide the hats that match the selected
 color.*/

/*TASK 01 First, write a function highlightSelectedFilter() that will remove the active CSS class from all filter buttons,
 and then add the active CSS class to the filter button that was clicked. Bind this function to each of filter buttons on
 the products.html page.

 It will be necessary to select all hat components that match the  color of the filter button that has been clicked.
 For each hat object,  set an extra CSS class name on the root element of the hat HTML  component
 (i.e. the element with class name `accessory`).  The additional CSS class will be the value of the `color` property
  of the hat object used to render that component.

 */

function highlightSelectedFilter() {
    // remove the active CSS class form all filter buttons;
    const activeFilter = document.querySelector(".btn-group").children;
    //let colorValue = document.querySelectorAll(".card-text");
    for (let i = 0; i < activeFilter.length; i++) {
        activeFilter[i].classList.remove("active");
        // activates the selection on button tha has been clicked!
        activeFilter[i].addEventListener("click", activateFilter);

        function activateFilter() {
            activeFilter[i].setAttribute("class", "btn btn-outline-secondary active");
        }
    }

    //selecting all hat components that match the color of the filter button that has been clicked.
     console.log(allArrHats)
}

// Binding all highlightSelectedFilter function to each button:

 const btnRed = document.querySelector(".btn-group").children[0];
    btnRed.addEventListener("click", highlightSelectedFilter, false);

 const btnBlue = document.querySelector(".btn-group").children[1];
    btnBlue.addEventListener("click", highlightSelectedFilter, false);

 const btnGreen = document.querySelector(".btn-group").children[2];
    btnGreen.addEventListener("click", highlightSelectedFilter, false);

 const btnYellow = document.querySelector(".btn-group").children[3];
    btnYellow.addEventListener("click", highlightSelectedFilter, false);

