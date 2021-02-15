function allAccessoriesAsItems () {

    //storing all retrieved accessories from products into an object

    const retrievedAccessory = {
        accessoryRetrieved1: localStorage.getItem('accessory1'),
        accessoryRetrieved2: localStorage.getItem('accessory2'),
        accessoryRetrieved3: localStorage.getItem('accessory3')
    }

    return retrievedAccessory;
}
    //---- OUTPUT TESTS ----

console.log (allAccessoriesAsItems().accessoryRetrieved1);