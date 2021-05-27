var theVersions = Object.keys(versionsData);
// sorting semver routine from https://stackoverflow.com/a/40201629
var sortedVersionsFromOldToNew = theVersions.map( a => a.split('.').map( n => +n+100000 ).join('.') ).sort().map( a => a.split('.').map( n => +n-100000 ).join('.') );
var sortedVersionsFromNewToOld = sortedVersionsFromOldToNew.slice().reverse();

var latestStableAlgebriteVersion = sortedVersionsFromNewToOld[0];
var nextVersionOlderThan = function(whichVersion){
	return sortedVersionsFromNewToOld[sortedVersionsFromNewToOld.indexOf(whichVersion)+1]
}