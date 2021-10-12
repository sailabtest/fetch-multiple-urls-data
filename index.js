
const request = require('request');
/**
 * Get JSON data from a URL
 * @param {*} requestUrl    - The endpoint where to get data from
 * @returns Promise
 */
function getJSONRequestData(requestUrl) {
  return new Promise(function (resolve, reject) {

    let reqObj = { method: 'GET', json: true }
    request(requestUrl, reqObj, (error, response, body) => {
      //check for any errors
      if (error) {
        console.log("--Connection Error: ", JSON.stringify(error));
        return reject(error);
      } else if (!response.statusCode || !response.statusCode.toString().startsWith(2)) {
        //console.log("==wrong status code for: " + requestUrl, response.statusCode);
        return reject("invalid");
      }

      return resolve(body);
      
    });
  });

}/**End getJSONRequestData */

/**
 * Get JSON data of multiple URLs.
 * @param {Array} array of urls
 * @returns Promise of array elements
 */
async function requestMultipleUrls(urls){
  if(!Array.isArray(urls)) return Promise.reject("Should be array of URLs!");

  let result = [];
  for (const url of urls) {
     await getJSONRequestData(url).then(reply => result.push({url: url, data: reply, pass: true})).catch(error => result.push({url: url, data: error, pass: false}));
  }
  return result;    
}


module.exports = { getJSONRequestData, requestMultipleUrls }