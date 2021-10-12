This package lets you fetch data contents from multiple URLs. 

----
__There are two functions only:__

__Section 1 (getJSONRequestData)__ 

This function returns resolved or rejected promise depends on the URL data

__Section 2 (requestMultipleUrls)__ 

This function returns promise contains the list of contents for each URL.  
  i.e. an object with property `pass: true` represents the data type is valid and `pass: false` is invalid data type 
  i.e. an object with property `data` has either error or resolved data depends on the property `pass`


__Testing__
The above functions are tested using jest.

To run these tests, first install the dependencies with 

`npm install`

Then trigger the test suite with:

`npm test`
  
