# Code for Code Jam 2019

## General Flow
- A Raspberry Pi or other embedded system with a camera will be placed inside a kitchen cabinet/fridge.
- The device will record video of items entering/leaving the fridge/pantry.
- Machine Learning model will label objects entering/leaving the cabinet/fridge.
- Machine Learning should be all done on the device while video is not being recorded.
- Secondary algorithm will also determine if the object is entering or leaving.
- The Pi sends http POST request to the server to store transactions and update the list of items in the fridge.
- Web application will display to user the inventory of their kitchen.

## Potential improvements

- Send weekly grocery list to user notifying them of what they should buy.
- Label objects with expiration dates.
- Users may order grocery by the click of a button by connecting an online grocery store account or an Amazon account.
- Barcode reading for identification of unknown items.
