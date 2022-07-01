/**
 * URL 다루기
 */

var url1 = "http://wwww.mysite.com/user?name=둘리&no=10";

//  1. escape: URL 전부 encoding, 사용(x), deprecated
var url2 = escape(url1);
console.log(url2);

//  2. encodeURI: parameter만 encoding, 사용(o)
var url3 = encodeURI(url1);
console.log(url3);

//  3. encodeURIComponent: 값만 encoding해야 하는 경우
var url4 = encodeURIComponent(url1);    //  잘못 사용한 경우
console.log(url4);

//  4
//  만들어야 할 URL
//  http://wwww.mysite.com/user?no=10&name=둘리&email=kickscar@gmail.com
var url = "http://wwww.mysite.com/user";
var parmas = {
    name: '둘리',
    no: 10,
    email: 'kickscar@gmail.com'
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + o[prop]);
    }
    return qs.join('&');
}

var url5 = url + '?' + toQueryString(parmas);
console.log(url5);

/**
 * var jQuery = function() {.....}
 * var $ = jQuery;
 * 
 * $.ajax({
 *      url: "",
 *      type: "post",
 *      data: toQueryString(params)
 * })
 */