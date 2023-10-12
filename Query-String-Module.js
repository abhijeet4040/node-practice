const querystring = require('querystring');

const queryString = "q=query+string&page=2&sort=asc"
const parsedQuery = querystring.parse(queryString)

console.log(parsedQuery)

const params = {
    q: "query string",
    page: "2" ,
    sort: "asc"
}
console.log(params)
const qString = querystring.stringify(params)
console.log(qString)


const unescapedValue = "Hello, world!";
const escapedValue = querystring.escape(unescapedValue)
console.log(escapedValue)

const unescapedAgain = querystring.unescape(escapedValue)
console.log(unescapedAgain)