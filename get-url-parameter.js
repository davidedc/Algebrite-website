var algebriteVersion, versionFromURL;

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

// get the algebrite version to be loaded directly from the URL
versionFromURL = getURLParameter("version");

if (versionFromURL === undefined) {
    versionFromURL = window.location.pathname.replace(/.*sandboxes\//,"").replace(/\/.*/,"");
    if (versionFromURL ===""){
        versionFromURL = window.location.pathname.replace(/.*docs\//,"").replace(/\/.*/,"");
    }
}

if (versionFromURL === "latest-stable") {
    algebriteVersion = latestStableAlgebriteVersion;
}
else {
    algebriteVersion = versionFromURL;
}
