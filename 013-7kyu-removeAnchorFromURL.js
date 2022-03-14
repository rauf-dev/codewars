//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

console.log(removeUrlAnchor('www.codewars.com/about/'));

function removeUrlAnchor(url) {
  // indexOf returns -1 if not found
  // using Conditional (ternary) operator
  return url.indexOf('#') === -1 ? url : url.slice(0, url.indexOf('#'));
}
