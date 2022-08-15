# Introduction
This repo was created to showcase the following error when using [pdf-merger-js](https://github.com/nbesli/pdf-merger-js) v4:

```
Error: Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.
```

Related issues:
- https://github.com/nbesli/pdf-merger-js/issues/88
- https://github.com/Hopding/pdf-lib/issues/387

## How to reproduce

### Step 1.
Execute:
```
npm install
```

### Step 2.
Execute:
```
npm start
```

**NOTE:** if files `file1.pdf` and `file2.pdf` are opened with your system's PDF viewer they will be unlocked and the issue will not be reproducible. More info at: https://github.com/Hopding/pdf-lib/issues/387#issuecomment-611802391
