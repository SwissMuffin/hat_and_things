/*    1. Define a simple JavaScript object that represents a hat, with properties name,
 price, color, and imageHref.*/

Hat = {
    name:"<name>",
    price:"<price>",
    color:"<color>",
    imageHref:"<imageHerf>"
};

   /* 2. Attach a function toString() to the object that will
return a String that nicely formats the properties of the hat object i.e. "<name>,
 color <color>, price: <price>, image: <imageHref>". You can test this object using
 console.log().
*/

toString = () => {
    return `name ${Hat.name} price ${Hat.price} color ${Hat.color} imageHref ${Hat.imageHref}`
};





