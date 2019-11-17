# Go Backend
The backend is used to submit transactions in and out of fridges and to return the whole list of items in the fridge to the front-end.

## POST http://codejam2019.yifansong.ca/grocery/transaction
Adds the add array to the list of item and removes fromm the remove array in the body.

Make sure the `Content-Type` header is set to `application/json`

```json
{
  "add": [
    {
      "name": "garlic",
      "quantity": 1
    }
  ],
  "remove": [
    {
      "name": "other",
      "quantity": 1
    }
  ]
}
```

## GET http://codejam2019.yifansong.ca/grocery/list
Returns the list of items
