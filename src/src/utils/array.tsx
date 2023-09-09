

export function splitArray<T>(array: Array<T>, itemLength: number): Array<Array<T>> {
    const result: Array<Array<T>> = [];
    for (let i = 0; i < array.length; i += itemLength) {
        result.push(array.slice(i, i + itemLength));
    }
    return result;
}