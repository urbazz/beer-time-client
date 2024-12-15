export const stringWithoutTags = (str: string) => {
    return str.replace(/(<([^>]+)>)/gi, '');
}