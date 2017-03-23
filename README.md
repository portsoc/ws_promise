# Promise Examples

The lecture goes a but like this...

\_00\_
* Firstly, a common error is introduced in \_00\_commonerror
* The \_00\_commonerror\_10.js file attempts to return a value from a callback function
* NB there's a small express server so that browsers which refuse to XHR or fetch from a file url will happily fetch some content.

Promises can help fix this.

* \_10\_ Resolving a simple Promise
* \_20\_ Fulfilled and rejected Promises
* \_30\_ All promises
* \_40\_ Races

Back to \_00\_
* In \_00\_commonerror\_20.js we wrap an XHR in a promise.
* In \_00\_commonerror\_30.js we simplify with fetch, which is already promise based.
* In \_00\_commonerror\_40.js we simplify even more using fetch's .json function
* In \_00\_commonerror\_50.js we simplify further using a lambda function
