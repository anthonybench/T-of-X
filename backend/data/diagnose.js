//===============================================================//
/* CONFIGURATION DATA GOES HERE */
//===============================================================//
const baseURI = "https://t-of-x-backend.anthonybench.vercel.app/"; // Host domain, must end with `/`
const specificStudentSessions = 4; // Test sessions registered with particular uid
const specificStudent = 1; // Test specific student
//===============================================================//

const https = require('https');
const http = require('http');

let url;
let request;

// Utility: time delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const delay = 1000;

// Utility: log error message
function printError(error) {
    console.error(error.message);
}

try {
    //////////////////////////////////////////////////////////
    sleep(delay);
    url = baseURI + 'users'; // endpoint
    sleep(delay);
    request = https.get(url, response => {
        if (response.statusCode == 200) {
        
        let body = "";
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                console.log("==============Users"); // console logging divider
                console.log("======================================");
                const theResponse = JSON.parse(body);
                console.log(theResponse);
            } catch(error) {
                printError(error);
            }
        });
        } else {
            const message = `There was an error: ${http.STATUS_CODES[response.statusCode]}`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    });
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
    //////////////////////////////////////////////////////////
    sleep(delay);
    url = baseURI + 'sessions'; // endpoint
    request = https.get(url, response => {
        if (response.statusCode == 200) {
        
        let body = "";
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                console.log("==============Sessions");  // console logging divider
                console.log("======================================");
                const theResponse = JSON.parse(body);
                console.log(theResponse);
            } catch(error) {
                printError(error);
            }
        });
        } else {
            const message = `There was an error: ${http.STATUS_CODES[response.statusCode]}`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    });
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
    //////////////////////////////////////////////////////////
    sleep(delay);
    url = baseURI + 'counters'; // endpoint
    request = https.get(url, response => {
        if (response.statusCode == 200) {
        
        let body = "";
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                console.log("==============Counters");  // console logging divider
                console.log("======================================");
                const theResponse = JSON.parse(body);
                console.log(theResponse);
            } catch(error) {
                printError(error);
            }
        });
        } else {
            const message = `There was an error: ${http.STATUS_CODES[response.statusCode]}`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    });
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
    //////////////////////////////////////////////////////////
    sleep(delay);
    url = baseURI + `sessions/${specificStudentSessions}`; // endpoint
    request = https.get(url, response => {
        if (response.statusCode == 200) {
        
        let body = "";
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                console.log(`====Sessions for user ${specificStudentSessions}`);  // console logging divider
                console.log("======================================");
                const theResponse = JSON.parse(body);
                console.log(theResponse);
            } catch(error) {
                printError(error);
            }
        });
        } else {
            const message = `There was an error: ${http.STATUS_CODES[response.statusCode]}`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    });
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
    //////////////////////////////////////////////////////////
    sleep(delay);
    url = baseURI + `users/${specificStudent}`; // endpoint
    request = https.get(url, response => {
        if (response.statusCode == 200) {
        
        let body = "";
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                console.log(`====Student ${specificStudent}`);  // console logging divider
                console.log("======================================");
                const theResponse = JSON.parse(body);
                console.log(theResponse);
            } catch(error) {
                printError(error);
            }
        });
        } else {
            const message = `There was an error: ${http.STATUS_CODES[response.statusCode]}`;
            const statusCodeError = new Error(message);
            printError(statusCodeError);
        }
    });
    request.on('error', error => console.error(`Problem with request: ${error.message}`));
} catch(err) {
    printError(err);
}