```javascript
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
                console.log(clickedAccessory);
                console.log(index);

            }

        }
    })

}
```