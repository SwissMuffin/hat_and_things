const accessory = {
    name: "<name>",
    price: "<price>",
    color: "<color>",
    imageHref: "<imageHerf>"
};

accessory.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

function Accessory(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

Accessory.prototype.toString = function () {
    return `name ${this.name} price ${this.price} color ${this.color} imageHref ${this.imageHref}`
}

const allAccessories = document.querySelectorAll(".accessory");

const accessoryArr = [];

for (let i = 0; i < allAccessories.length; i++) {
    const valName = allAccessories[i].children[0].children[2].children[0].textContent;
    const valPrice = allAccessories[i].children[0].children[0].textContent;
    const valColor = allAccessories[i].children[0].children[2].children[1].children[0].textContent;
    const valImageHref = allAccessories[i].children[0].children[1].src;
    accessoryArr.push(new Accessory(`${valName}`, `${valPrice}`, `${valColor}`, `${valImageHref}`));// each iteration creates a new object according to the accessory Prototype.
}

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



