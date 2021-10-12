This package lets you fetch data contents from multiple URLs.  The functions return contents in Promise.
----
There are two functions only:
__Section 1 (getJSONRequestData)__
This function returns resolved or rejected promise depends on the URL data

__Section 2 (getURLsData)__
This function returns only resolved promise state contains the list of objects inside an array.  
  i.e. an object with property `pass: true` represents the data type is valid and `pass: false` is invalid data type
  i.e. an object with property `data` has either error or resolved data depends on the property `pass`
  ------

__Testing__
The above functions are tested using jest.

To run these tests, first install the dependencies with 

`npm install`

Then trigger the suite with:

`npm test`
  