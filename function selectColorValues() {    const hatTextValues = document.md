```javascript
function selectColorValues() {
    const hatTextValues = document.querySelectorAll(".card-text em");
    for (let i = 0; i < hatTextValues.length; i++) {
        if (hatTextValues[i].textContent.toLowerCase() === "red") {
            const btnFilter = document.createElement("div");
            btnFilter.className = "accessory";
            btnRed.className = "active";
            hatTextValues[i].appendChild("ac") // to complete the class assignment to the red button.
            console.log(`I am red`);
        } else if (hatTextValues[i].textContent.toLowerCase() === "blue"){
            console.log("I am blue");
        } else if (hatTextValues[i].textContent.toLowerCase() === "green"){
            console.log("I am green");
        } else if (hatTextValues[i].textContent.toLowerCase() === "yellow"){
            console.log("I am yellow");
        }
    }
}
selectColorValues();
```