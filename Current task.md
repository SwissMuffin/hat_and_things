Write a function `loadRemoteAccessories()`.  The function will use the `textContent` of the button that it is bound to retrieve the objects for that  category via AJAX. 

 The AJAX request will get the JSON file for the  category, which contains those types of accessories.

 It will then  remove all of the currently loaded Accessory HTML components

then It will create  Accessory objects from each of the retrieved JSON objects, 

then it will render  Accessory components for each of these accessory objects on the page. 

Bind the function so that when the "Socks" or "Sunglasses" links are  clicked, the accessories for that category are displayed.

Write and bind a function that will reload the hats when the "Hats" link is clicked.