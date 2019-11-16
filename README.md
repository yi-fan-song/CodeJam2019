# Code for Code Jam 2019

## General Flow
- A Raspberry Pi with a camera will be placed inside a kitchen cabinet/fridge.
- Raspberry Pi will take images every Xms and timestamp them. 
- Image files will be transferd to a storage server using SCP.
- Machine Learning model will label objects entering/leaving the cabinet/fridge.
- Secondary algorithm will also determine if the object is entering or leaving.
- Database will be maintained containing the type and number of items within the kitchen inventory.
- Web application will display to user the inventory of their kitchen.

## Potential improvements

- Send weekly grocery list to user notifying them of what they should buy.
- Label objects with expiration dates.