//import the format_date() function
const {format_date, format_plural, format_url} = require('../utils/helpers');

//write a test that shortens a URL string
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});

//write a test to ensure that format_plural() correctly pluralizes words
test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);
  
    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
});

//install npm i jest -D
//make sure to add "test": "jest" to the scripts in package.json
//create a folder called __tests__ and had this file to it
//write a test to ensure that format_data() takes Date() objects and returns dates in the MM/DD/YYYY format
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
      
    expect(format_date(date)).toBe('3/20/2020');
});