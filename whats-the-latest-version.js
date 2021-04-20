var latestStableAlgebriteVersion = "1.4.0";

var versionsData = {
    "1.4.0": {
        "changes":

"Added sqrt(3)/3, -sqrt(3)/2 to arcsin, arccos. " +
"Fixed #106 'Missing minuses when printing numbers in terms (when printing non-normalised terms)'. " +
"More functions now using JS booleans rather than the C-style integers '0' and '1'. " +
"Fixed #121 '1 - 1/2*0^2 results in divide by zero error'. Refactoring.",

        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "1.3.1": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "1.3.0": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "1.2.1": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "1.2.0": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "1.0.0": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "0.4.2": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "0.3.13": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    },
    "0.2.23": {
        "changes": "asasas",
        "improved": "asasas",
        "other info": "asasas",
        "known issues": "asasas",
        "other links": {
            "link 1": {
                "title": "why the tensor notation changes in v1.0.0?",
                "url": "why-tensor-notation-changes-in-v1.0.0.html"
            }
        }
    }
};

var theVersions = Object.keys(versionsData);
// sorting semver routine from https://stackoverflow.com/a/40201629
var sortedVersions = theVersions.map( a => a.split('.').map( n => +n+100000 ).join('.') ).sort().map( a => a.split('.').map( n => +n-100000 ).join('.') );
