const path = require('path');  // go in node documentation path module

const a=path.basename('/foo/bar/baz/asdf/quux.html');
const b=path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a);
console.log(b);
const c = path.extname(__filename);
console.log(c);
