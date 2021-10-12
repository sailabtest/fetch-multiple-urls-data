const lib = require('./index')

describe('Suite of tests with single URL fetch', () => {
  it('should reject due to invalid url data type', async () => {
    try {
      await lib.getJSONRequestData('https://github.com/sailabtest');
    } catch (e) {
      //console.error('error is: ', e);
      expect(e).toEqual('invalid');
    }
  });

  it('should resolve due to having property data', async () => {
    let result = await lib.getJSONRequestData('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json');
    expect(result).toHaveProperty('data')
  });  
})


describe('Suite of Tests with multiple URL fetch', () => {

  const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
  ];

  // lib.requestMultipleUrls(urls).then((result) => {
  //   it(`URL object should have pass property "${result.url}"`, () => {
  //     expect(result.pass).toBe(true)   
  //   })
  // });        

  let result;
  beforeEach(async () => {
    result = await lib.requestMultipleUrls(urls);
  });
        
  it('should be array', () => {
    expect(Array.isArray(result)).toBe(true); //array
  });
    
  test('Each property pass should be true', () => {
    //console.log(result);
    for (const obj of result) {
      expect(obj.pass).toBe(true)      
    }
  })

})
