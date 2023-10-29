// https://leetcode.com/problems/design-browser-history/
/**
 * 나는 당연히 단순 배열로 푸는것이 더 쉽고 빠르다고 생각하지만
 * 강의에서 linked list로 해결하라고 하니 해보는 것
 * 물론 실제로 배열을 사용하면 뒤에거 삭제하는 시간이 드니까 list로 사용하는게 더 편하긴 할듯
 */

class Node {
  constructor(url, before=null, next=null) {
    this.url = url;
    this.before = before;
    this.next = next;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.current = new Node(homepage);
  return 'null';
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = new Node(url, this.current);
  this.current = this.current.next;
  return ('null');
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while(this.current.before !== null && steps){
    this.current = this.current.before;
    steps--;
  }
  return this.current.url
};

/**
 * @param {number} steps
 * @return {string}
*/
BrowserHistory.prototype.forward = function (steps) {
  while(this.current.next !== null && steps){
    this.current = this.current.next;
    steps--;
  }
  return this.current.url
};


const obj = new BrowserHistory('myurl1');
console.log(obj.visit('url2222'));
console.log(obj.visit('url33333'));
console.log(obj.visit('url4444'));
console.log(obj.visit('url5555'));
console.log(obj.back(8));
console.log(obj.forward(3));
console.log(obj.back(1));
console.log(obj.visit('newUrl'));
console.log(obj.forward(1));