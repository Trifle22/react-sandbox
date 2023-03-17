export const handleCopyToClipboard = (text: string) => {
	navigator.clipboard.writeText(text);
};
