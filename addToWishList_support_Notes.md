```javascript
function clearItem(accessory) {
const productParent = document.querySelectorAll("products");
    const productChild = document.querySelectorAll(".accessory");

        productChild.forEach((element) => {

            element.addEventListener("click", clearItem, false);
            function clearAccessory(e) {
               console.log(e);
            }

            //productParent.removeChild(document.querySelector(".accessory"));
        })
    }
```

```javascript
let accessoryRequest = new XMLHttpRequest();
   accessoryRequest.open('POST', './wishlist.html', false);
            accessoryRequest.onload = () => {
                 let accessoryAsJson1 = JSON.stringify(accessory);
                 localStorage.setItem('accessory1', accessoryAsJson1);
            }

            accessoryRequest.send();


            let accessoryAsJsonArr = JSON.stringify(accessory);
```

```javascript

            let accessoryAsJson1 = JSON.stringify(accessory);
            localStorage.setItem('accessory1', accessoryAsJson1);


             let accessoryAsJson2 = JSON.stringify(accessory);
            localStorage.setItem('accessory2', accessoryAsJson2);

             let accessoryAsJson3 = JSON.stringify(accessory);
            localStorage.setItem('accessory3', accessoryAsJson3);

            const accessoryAsJsonArray = [];
            accessoryAsJsonArray.push(
                accessoryAsJson1,
                accessoryAsJson2,
                accessoryAsJson3
            )
            //let accessoryAsJsonArray I have to pass this array to json.
            localStorage.setItem('accessory4', accessoryAsJsonArray)

            //accessoryAsJsonArray.map((element))


            //console.log(accessory, index);
            console.log(accessoryAsJson1);
```

```javascript
/* The above function is giving different the same object due to the fact that the addToWishlist(accessoryArry[0] is
* pointing to the first accessory of the page.
*
* When target button clicked is different corresponding to each target it is called upon.
* */


/*function addToWishlist (accessory) { //This function is turning the "Add to wishlist" button's caption red, just for testing purposes only.
    //console.log("I am here");
    const allAccessories = document.querySelectorAll(".accessory");
    const addBtn = document.querySelectorAll(".card-body .btn");
    allAccessories.forEach((accessoryElements, accessoryIndex) => {

        addBtn.forEach((btnElements, btnIndex) => {

            btnElements.addEventListener("click", btnAddClicked, false);

            function btnAddClicked (e) {

                if (accessoryIndex === btnIndex ) {
                    //console.log(`${accessoryIndex} ${btnIndex}`)
                    console.log(accessory);

                }

            let accessoryAsJson = JSON.stringify(accessory);
            localStorage.setItem('accessory1', accessoryAsJson);


            /!*   if () {
                console.log(localStorage.length);
                //localStorage.removeItem('accessory1');
            }*!/
            //localStorage.removeItem('accessory1');
            //console.log(accessoryAsJson);
        }

    });

    })
}*/
```