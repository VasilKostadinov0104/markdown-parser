# markdown-parser
Some functions that help parse markdown to html&lt;string> or to plain text&lt;string>

## advancedParseMarkdown: *returns html `<string>`*
**required** propery `markdownText`:
+ pass markdown text as string


optional properties `font, fontH1, fontH2, fontH3, fontQuote, fontBold, fontSpan, fontI, fontLink, fontParagraph`
+ font
  + styles every html element with the css you pass. example `font="class1 class2 class3"`
+ fontH1, fontH2, fontH3
  + styles every heading respectively, if no `fontH1`, `fontH2`, `fontH3` is present, `font` will be used instead
+ fontQuote,fontBold,fontSpan,fontI,fontLink.
  + styles semantic elements `<span/> <b> <em> <blockquote> <a>`.  If they are not present, `font` will be used instead
+ fontParagraph 
  + styles `<p>` tag, if no `fontParagraph` is present, `font` will be used


## parseMarkdownToPlainText: *returns `<string>`*
**required** property `markdownText`:
+ pass markdown text as string, the function will return string without all markdown elements: `# > ~ *`...
