# mongodb-crud

Demo app with basic REST API

## REST API

List of basic routes:

| Route            | HTTP          | Description      |
| ------------- |:-------------:| ----------------:|
| /    | GET           | Print hai     |

List of user routes:

| Route             | HTTP          | Description      |
| -------------     |:-------------:| :----------------|
| /library          |GET            | Get all the books info    |
| /library/:id      |GET            | Get a single book info     |
| /library/         |POST           | Create a book|
| /library/:id      |DELETE         | Delete a book|
| /library/:id      |PUT            | Update a book with new info |
