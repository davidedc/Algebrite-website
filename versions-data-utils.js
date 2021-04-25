var theVersions = Object.keys(versionsData);
// sorting semver routine from https://stackoverflow.com/a/40201629
var sortedVersions = theVersions.map( a => a.split('.').map( n => +n+100000 ).join('.') ).sort().map( a => a.split('.').map( n => +n-100000 ).join('.') );
var sortedVersionsFromNewToOld = sortedVersions.slice().reverse();

var latestStableAlgebriteVersion = sortedVersions[sortedVersions.length-1];