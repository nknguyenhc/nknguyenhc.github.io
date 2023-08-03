

export const autoHyperlink = (inputText: string): string => {
    return inputText
        .split('`')
        .map((str, i) => (
            i % 2 === 0
            ? str
            : `<a href=${str} class="link">here</a>`
        ))
        .reduce((prev, curr) => prev + curr, '');
}

export const textToId = (text: string): string => text.split(' ').reduce((prev, curr) => prev + '-' + curr);