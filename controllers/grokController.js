exports.setData = async (req, res) => {
	const { text, pattern } = req.body;
	const grokPattern = grok.createPattern(pattern);
	try {
		const obj = grokPattern.parseSync(text);
		res.json(obj);
	} catch (e) {
		res.status(500).send(e);
	}
};
