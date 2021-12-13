const grok = require("grok-js").loadDefaultSync();

exports.setData = (req, res) => {
	console.log(req.body);
	const { text, pattern } = req.body;

	const p =
		'%{IP:client} \\[%{TIMESTAMP_ISO8601:timestamp}\\] "%{WORD:method} %{URIHOST:site}%{URIPATHPARAM:url}" %{INT:code} %{INT:request} %{INT:response} - %{NUMBER:took} \\[%{DATA:cache}\\] "%{DATA:mtag}" "%{DATA:agent}"';
	const str =
		'203.35.135.165 [2016-03-15T12:42:04+11:00] "GET memz.co/cloud/" 304 962 0 - 0.003 [MISS] "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36"';

	console.log(p.length);
	console.log(pattern);
	console.log(p === pattern);
	console.log(pattern.length);
	// const what = pattern.replace("\\\\", "\\");

	const what = pattern.split("\\\\").join("\\");
	console.log("P", p);
	console.log("what", what);
	console.log(what.length);

	const textP = text.toString();
	const patternP = pattern.toString();

	console.log(text);
	console.log(pattern);

	const grokPattern = grok.createPattern(what);
	try {
		const obj = grokPattern.parseSync(text);
		console.log(obj);
		res.json(obj);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
};
