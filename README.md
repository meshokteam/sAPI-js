# sAPI-js
JS библиотека для использования API для продавцов аукциона Мешок

```JS
// Create an instance of the MeshokAPI class with your token
const api = new MeshokAPI('your_token_here');

// Example: Get the list of items
api.getItemList()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Get the account information
api.getAccountInfo()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Get the information of a specific item
const itemId = 'your_item_id_here';
api.getItemInfo(itemId)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example: List an item
const itemParams = {
  name: 'Item Name',
  // ... other item parameters
};
api.listItem(itemParams)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Update an item
const updatedItemParams = {
  id: 'your_item_id_here',
  name: 'Updated Item Name',
  // ... other updated item parameters
};
api.updateItem(updatedItemParams)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Delete an item
const itemIdToDelete = 'your_item_id_here';
api.deleteItem(itemIdToDelete)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

```
