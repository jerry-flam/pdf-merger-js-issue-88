const path = require('path');
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  await merger.add(path.join(__dirname, 'file1.pdf'));
  await merger.add(path.join(__dirname, 'file2.pdf'));
  await merger.save(path.join(__dirname, 'merged.pdf'));
})();
