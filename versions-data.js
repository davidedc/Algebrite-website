var versionsData = {
    "1.4.0": {
        "changes":

"Added sqrt(3)/3, -sqrt(3)/2 to arcsin, arccos. " +
"Fixed #106 'Missing minuses when printing numbers in terms (when printing non-normalised terms)'. " +
"More functions now using JS booleans rather than the C-style integers '0' and '1'. " +
"Fixed #121 '1 - 1/2*0^2 results in divide by zero error'. Refactoring.",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": true
    },
    "1.3.1": {
        "changes":

"Fixing some problems with zero matrices.",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": true
    },
    "1.3.0": {
        "changes":

"Implemented hashing to speed up the integral table. Changes to erf/erfc so they handle symbolic " +
"and numeric evaluation at one/zero better. Better printouts (and options to printout) doubles: " +
"we can now set forceFixedPrintout (defaults to true) and maxFixedPrintoutDigits (defaults to 6) " +
"- closes #85. Refactoring how polys detection works (can now detect polys in factored form), " +
"refactoring gcd and adding gcd of polys (via factoring though). Can now detect and simplify many " +
"rational expressions. Closes #89.",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": true
    },
    "1.2.1": {
        "changes":

"changing tabs into spaces so it works with CoffeeScript 2. Where native BigInt is implemented, " +
"use a dedicated isSmall implementation - closes #78.",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": true
    },
    "1.2.0": {
        "changes":

"results are now printed in 'computer' notation by default / several bug fixes / 'for', 'sum', " +
"'product' arguments and their order have changed (as per new reference docs) / error returned " +
"when something other than a function is used in function invocation / 'printfull' -> 'printcomputer' " +
" / 'printplain' -> 'printhuman'",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": true
    },
    "1.0.0": {
        "changes":

"code generation + latex generation for matrices / can now pass functions as arguments / overhaul " +
"of the matrix notation (see dedicated document in links above) / some refactoring",

        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": false
    },
    "0.4.2": {
        "changes":

"fixed all issues found in previous version. Unified 'mag' into 'abs' (just use abs all the times). " +
"sqrt(x^2) is now correct and returns abs(x). All doubles now show the decimal point when printed. " +
"abs, imag, arg, rect, legendre are now in general more correct than in the previous version.",

        "otherInfo": "Adding a flag 'assumeRealVariables' for assuming/not assuming variables to be real.",
        "knownIssues": "4 integrals from previous version aren't solved anymore.",
        "other links": null,
        "addCommitsLink": false
    },
    "0.3.13": {
        "changes":

"added 'version', 'clear', 'clearall', refactored 'print' and added all the new print* functions. ",

        "otherInfo": "Adding a flag 'assumeRealVariables' for assuming/not assuming variables to be real.",
        "knownIssues":

"'float(sin(2))' gives zero. 'sqrt(x^2)' gives x instead of abs(x). Incorrect " +
"simplifications for: sqrt(x*y) , sqrt(1/x) , sqrt(x^y). Latex printing: wrong formatting of exponents " +
"that are more than one character long.",

        "other links": null,
        "addCommitsLink": false
    },
    "0.2.23": {
        "changes": "One of the first releases.",
        "otherInfo": null,
        "knownIssues": null,
        "other links": null,
        "addCommitsLink": false
    }
};