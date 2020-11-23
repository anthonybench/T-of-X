//===============================================================//
/* CONFIGURATION DATA GOES HERE */
//===============================================================//
const baseURI = "https://t-of-x-backend.anthonybench.vercel.app/"; // Host domain, must end with `/`
//===============================================================//

const https = require('https');
const http = require('http');
let async = require('async');

let url;


try {
    async.waterfall([
            function() {
                console.log("==============Users");
                console.log("======================================");
                url = baseURI + 'users';
            },
            function() {
                const request = https.get(url, response => {
                    if (response.statusCode == 200) {
                    
                    let body = "";
                    response.on('data', data => {
                        body += data.toString();
                    });
            
                    response.on('end', () => {
                        try {
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
            },
            function() {
                console.log("==============Sessions");
                console.log("======================================");
                url = baseURI + 'sessions';
            },
            function() {
                const request = https.get(url, response => {
                    if (response.statusCode == 200) {
                    
                    let body = "";
                    response.on('data', data => {
                        body += data.toString();
                    });
            
                    response.on('end', () => {
                        try {
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
            },
            function() {
                console.log("==============Sessions");
                console.log("======================================");
                url = baseURI + 'counters';
            },
            function () {
                const request = https.get(url, response => {
                    if (response.statusCode == 200) {
                    
                    let body = "";
                    response.on('data', data => {
                        body += data.toString();
                    });
            
                    response.on('end', () => {
                        try {
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
            },
            function() {
                console.log("=====Sessions for specific student");
                console.log("======================================");
                url = baseURI + 'sessions/';
            }
        ],

        function(err, result) {
            if (!err) {
                console.log(result);
            }
        }
    );
} catch(error) {
    printError(error);
}