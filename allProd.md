```
/*   function allProd (itemProperty) {
       const allAccessoriesElements = document.querySelectorAll(".accessory");
       let allAccessoryArray = [];

       allAccessoriesElements.forEach((element) => {
           const valName = element.children[0].children[2].children[0].textContent;
           const valPrice = element.children[0].children[0].textContent;
           const valColor = element.children[0].children[2].children[1].children[0].textContent;
           const valImageHref = element.children[0].children[1].src;
           allAccessoryArray.push(new Accessory(`${valName}`, `${valPrice}`, `${valColor}`, `${valImageHref}`));
       })

       if (!itemProperty) {
           allAccessoryArray.forEach((element) => {
               console.log(element);
           }) ;

       }else {
           allAccessoryArray.forEach((element) => {
               console.log(element[itemProperty].toLowerCase());
           }) ;
       }
   }*/
```