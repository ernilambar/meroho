const merohoGetDecodedText = (html) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export { merohoGetDecodedText };
