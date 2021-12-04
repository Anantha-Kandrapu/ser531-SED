const express = require('express')
const app = express()
var cors = require('cors')
const axios = require('axios')
const fs = require('fs')
app.use(cors())
app.use(express.json())
const cookieC = 'JSESSIONID=node03v57p5q49k1918hples83wfyb9.node0'
const hostC = 'http://ec2-3-142-53-61.us-east-2.compute.amazonaws.com:3030/Category/query?'
const cookieE = 'JSESSIONID=node01ibi9n9b60b9i10xak0npucepa10.node0'
const hostE = 'http://ec2-13-233-151-149.ap-south-1.compute.amazonaws.com:3030/Events/query?'
const cookieL = 'JSESSIONID=node01ibi9n9b60b9i10xak0npucepa10.node0'
const hostL = 'http://ec2-13-233-151-149.ap-south-1.compute.amazonaws.com:3030/Location/query?'

const cat_data = `query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+myp%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fsarthak%2Fontologies%2F2021%2F10%2Funtitled-ontology-17%23%3E%0A%0ASELECT+%3Fcategory%0AWHERE+%7B%0A++%3Fsubject+myp%3Ahas_Name+%3Fcategory%0A%7D`
const eve_data = `query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+myp%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fkalyanreddy%2Fontologies%2F2021%2F10%2Funtitled-ontology-9%23%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0ASELECT+%3Fevent%0AWHERE+%7B%0A++%3Fsubject+myp%3Ahas_LocID+%3Fevent.%0A++FILTER(%3Fevent+%3D+%22989.0%22%5E%5Exsd%3Astring).%0A%7D%0ALimit+100`
const loc_data = `query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+myp%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fsarthak%2Fontologies%2F2021%2F10%2Funtitled-ontology-13%23%3E%0APREFIX+eve%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fkalyanreddy%2Fontologies%2F2021%2F10%2Funtitled-ontology-9%23%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0A%0ASELECT+%3Fid+%3Fdescription+%3Fcity%0AWHERE+%7B%0A++%3Fsubject+myp%3Ahas_ID+%3Fid.%0A++%3Fsubject+myp%3Ahas_Descriptions+%3Fdescription.%0A++%3Fsubject+myp%3Ain_City+%3Fcity.%0A++FILTER(%3Fid+%3D+%2215.0%22%5E%5Exsd%3Astring).%0A%7D%0AORDER+BY+%3Fcity`


const resE = () => {
    axios.get(hostE + eve_data, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': ' application/sparql-results+json',
            'Accept-Encoding': 'gzip deflate',
            'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': cookieE
        },
    }).then((response) => {
        console.log(hostE + eve_data)
        console.log(response.data.results);
        console.log(response.data.results.bindings);
    })
};
async function resL() {
    const x = await axios.get(hostL + loc_data, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': ' application/sparql-results+json',
            'Accept-Encoding': 'gzip deflate',
            'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': cookieL
        },
    }).then((response) => {
        return response.data;
    })

    return x;
};

app.post('/getevents', async (req, res) => {
    var filedata = fs.readFileSync('./data/events.json')
    var data = JSON.parse(filedata);
    var eventdata = data.events;
    var check1 = []
    for (var i = 0; i < eventdata.length; i++) {
        if (eventdata[i].location.valueOf() == req.body.loc.valueOf() && eventdata[i].category.valueOf()== req.body.cat.valueOf()) {
            
            check1.push(eventdata[i])
        }
        console.log(typeof(eventdata[i].category),typeof(req.body.loc))
    }
    console.log(check1.length)
    res.json(check1)
})
app.post('/getlocations', async (req, res) => {
    await axios.get(hostL + loc_data, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': ' application/sparql-results+json',
            'Accept-Encoding': 'gzip deflate',
            'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': cookieL
        },
    }).then((response) => {
        res.json({})
        return response.data;
    })
})
app.post('/getcategories', async (req, res) => {
    await axios.get(hostC + cat_data, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': ' application/sparql-results+json',
            'Accept-Encoding': 'gzip deflate',
            'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': cookieC
        },
    }).then((response) => {
        res.json(response.data)
        return response.data;
    })
})
app.post('/login', async (req, res) => {
    JSON.stringify(req.body)
    const name = req.body.uname;
    const password = req.body.pass;
    console.log(name, password)
    let ans = login(name, password)
    res.json(ans)
})
app.post('/register', async (req, res) => {
    JSON.stringify(req.body)
    const name = req.body.uname;
    const password = req.body.pass;
    const email = req.body.email;
    console.log(name, password)
    let ans = register(name, password, email)
    res.json(ans)
})
const register = (name, password, email) => {
    var filedata = fs.readFileSync('./data/users.json')
    var data = JSON.parse(filedata);
    var users = data.users;
    for (var i = 0; i < users.length; i++) {
        if (users[i].uname === name && users[i].pass === password) {
            return 'fail'
        }
    }

    data.users.push({ uname: name, pass: password, email: email });
    fs.writeFile("./data/users.json", JSON.stringify(data), err => {
        if (err) console.log("Error writing file:", err);
    });
    return 'success';
}

const login = (name, password) => {
    var filedata = fs.readFileSync('./data/users.json')
    var data = JSON.parse(filedata);
    var users = data.users;
    for (var i = 0; i < users.length; i++) {
        if (users[i].uname === name && users[i].pass === password) {
            return 'success'
        }
    }
    return 'fail'
}
const server = app.listen(5000, () => {
    console.log("listening on 5000 port")
})
