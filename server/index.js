const express = require('express')
const app = express()
const app_port = 3000
var cors = require('cors')
const http = require('http');
const axios = require('axios')
const https = require('https')
const data = `query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+myp%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fsarthak%2Fontologies%2F2021%2F10%2Funtitled-ontology-17%23%3E%0A%0ASELECT+%3Fcategory%0AWHERE+%7B%0A++%3Fsubject+myp%3Ahas_Name+%3Fcategory%0A%7D`
const host = 'http://ec2-3-142-53-61.us-east-2.compute.amazonaws.com:3030/Category/query?'+ data

const res = axios.get(host, {
    headers: {
        'Accept':' application/sparql-results+json',
        'Accept-Encoding' : 'gzip deflate',
        'Accept-Language' : 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie' : 'JSESSIONID=node0me5zssicdbo31qbq9k2ri3xjh1.node0'
    },
}).then((response) => {
    console.log(response.data.results);
    console.log(response.data.results.bindings[3].category);
});
console.log(res);
