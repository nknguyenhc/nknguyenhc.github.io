export const autoHyperlink = (inputText: string): string => {
  return inputText
    .split('`')
    .map((str, i) =>
      i % 2 === 0 ? str : `<a href=${str} class="link">here</a>`
    )
    .reduce((prev, curr) => prev + curr, '');
};

export const textToId = (text: string): string =>
  text.split(' ').reduce((prev, curr) => prev + '-' + curr);

export const splitToParagraphs = (text: string): string =>
  text
    .split('\n')
    .map((para) => `<p class="text-justify">${para}</p>`)
    .reduce((prev, curr) => prev + curr);

export const highlightCodes = (text: string): string => {
  return text
    .split('~')
    .map((str, i) => (i % 2 === 0 ? str : `<code>${str}</code>`))
    .reduce((prev, curr) => prev + curr, '');
};
