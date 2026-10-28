export const splitToParagraphs = (text: string): string =>
  text
    .split('\n')
    .map((para) => `<p class="text-justify">${para}</p>`)
    .reduce((prev, curr) => prev + curr);
