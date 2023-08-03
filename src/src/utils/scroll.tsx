

export const scrollToId = (id: string, offset: number): void => {
    const div = document.querySelector(`#${id}`);
    if (div) {
        window.scrollTo({
            top: (div as HTMLElement).offsetTop - offset,
            behavior: 'smooth'
        });
    }
}