const insertStrotras = require("../services/insertDataStrotras");
function getLocaleAbbreviation(language) {
	const locales = {
		Arabic: "ar",
		Assamese: "as",
		Bengali: "bn",
		"English-Articles": "en-articles",
		"English-Script": "ro",
		"English-Translation": "en-translation",
		French: "fr",
		German: "de",
		Gujarati: "gu",
		Hebrew: "he",
		Hindi: "hi",
		Italian: "it",
		Japanese: "ja",
		Kannada: "kn",
		Malayalam: "ml",
		Marathi: "mr",
		Odia: "or",
		Punjabi: "pa",
		Sanskrit: "sa",
		Sinhala: "si",
		Tamil: "ta",
		Telugu: "te",
		Urdu: "ur",
	};

	return locales[language] || null;
}
const strotrasInsertionSql = async (strotras) => {
	for (let s of strotras) {
		const locale = s.attributes.language.data.attributes.name;
		if (locale === "English-Articles" && locale === "English-Translation") {
		} else {
			let l = getLocaleAbbreviation(locale);
			const res = insertStrotras(s, l);
			console.log("🚀 ~ strotrasInsertionSql ~ locale:", locale);
		}
	}
};

module.exports = strotrasInsertionSql;
