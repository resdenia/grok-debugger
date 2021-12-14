const grok = require("grok-js").loadDefaultSync();

exports.setData = (req, res) => {
	const { text, pattern } = req.body;

	const patternP = pattern.split("\\\\").join("\\");
	const grokPattern = grok.createPattern(patternP);

	try {
		const obj = grokPattern.parseSync(text);
		res.json(obj);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
};
