export function advancedParseMarkdown({
  markdownText,
  font = ``,
  fontH3 = "",
  fontH2 = "",
  fontH1 = "",
  fontQuote = "",
  fontBold = "",
  fontSpan = "",
  fontI = "",
  fontLink = "",
  fontParagraph = "",
}) {
  const htmlText = markdownText
    //heading3
    .replace(
      /^### ?(.*$)/gim,
      `<h3 class='text-[14px] inter leading-[19px] text-black opacity-60 ${
        !fontH3 ? font : fontH3
      }'>$1</h3>`
    )
    //heading 2
    .replace(
      /^## ?(.*$)/gim,
      `<h2 class='text-[16px] inter leading-[19px] text-black opacity-60 ${
        !fontH2 ? font : fontH2
      }'>$1</h2>`
    )
    //heading 1
    .replace(
      /^# ?(.*$)/gim,
      `<h1 class='text-[18px] inter leading-[19px] text-black opacity-60 ${
        !fontH1 ? font : fontH1
      }'>$1</h1>`
    )
    //quote
    .replace(
      /^\> ?(.*$)/gim,
      `<blockquote class='text-[14px] inter leading-[19px] text-black italic opacity-60 ${
        !fontQuote ? font : fontQuote
      }'>$1</blockquote>`
    )
    //code
    .replace(
      /\`(.*)\`/gim,
      `<span class='text-[14px] inter leading-[19px] text-footer bg-primaryLightBlue rounded-xl px-2 my-2   ${
        !fontSpan ? font : fontSpan
      }'>$1</span>`
    )
    //bold
    .replace(
      /\*\*(.*)\*\*/gim,
      `<b class='text-[14px] font-bold inter leading-[19px] text-black opacity-60 ${
        !fontBold ? font : fontBold
      }'>$1</b>`
    )
    //span
    .replace(
      /\~\~(.*)\~\~/gim,
      `<span class='text-[14px] inter leading-[19px] text-red-600 opacity-60 line-through ${
        !fontSpan ? font : fontSpan
      }'>$1</span>`
    )
    //i
    .replace(
      /\*(.*)\*/gim,
      `<em class='text-[14px] italic inter leading-[19px] text-black opacity-60 ${
        !fontI ? font : fontI
      }'>$1</em>`
    )
    //img
    .replace(
      /!\[(.*?)\]\((.*?)\)/gim,
      `<a class='inline-block' src='$2' target='_blank' ><img class='w-[100px] h-[100px] object-cover rounded-xl hover:scale-105 transform transition-all cursor-pointer ' alt='$1' src='$2' /></a>`
    )
    //link
    .replace(
      /\[(.*?)\]\((.*?)\)/gim,
      `<a target='_blank' class='text-[14px] inter leading-[19px] text-black opacity-60' href='$2 ${
        !fontLink ? font : fontLink
      }'>$1</a>`
    )
    //underline
    .replace(/\<u\>(.*)\<\/u\>/, `<u>$1</u>`)
    //break
    .replace(/\n$/gim, `<br />`)
    //paragraph
    .replace(
      /^([^$#@^~*`\n]*)/gim,
      `<p class='${!fontParagraph ? font : fontParagraph}'>$1</p>`
    );
  return htmlText.trim();
}

export const parseMarkdownToPlainText = (markdownText) => {
  const htmlText = markdownText
    //heading3
    .replace(/^### ?(.*$)/gim, "$1")
    //heading 2
    .replace(/^## ?(.*$)/gim, "$1")
    //heading 1
    .replace(/^# ?(.*$)/gim, "$1")
    //quote
    .replace(/^\> ?(.*$)/gim, "$1")
    //code
    .replace(/\`(.*)\`/gim, "$1")
    //bold
    .replace(/\*\*(.*)\*\*/gim, "$1")
    //span
    .replace(/\~\~(.*)\~\~/gim, "$1")
    //i
    .replace(/\*(.*)\*/gim, "$1")
    //img
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "$1")
    //link
    .replace(/\[(.*?)\]\((.*?)\)/gim, "$1")
    //underline
    .replace(/\<u\>(.*)\<\/u\>/, `$1`)
    //break
    .replace(/\n$/gim, ``)
    //paragraph
    .replace(/^([^$#@^~*`\n]*)/gim, "$1");
  return htmlText.trim();
};

