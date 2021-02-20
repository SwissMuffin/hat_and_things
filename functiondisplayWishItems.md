```javascript
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
        })

}
```