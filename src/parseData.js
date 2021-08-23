function getRules(data) {
    const reRule = /^(\d+\.\d+[\w]?[.]?)\s(.*)/gim;
    var rules = [];
    var matchedRule = reRule.exec(data);
    while (matchedRule != null) {
        rules.push({ id: matchedRule[1], content: matchedRule[2] });
        matchedRule = reRule.exec(data);
    }

    return rules;
}
function getChapters(data) {
    const reChapter = /^\r\n(\d)\.\s(.*)\r\n$/gm;
    var chapters = [];

    var matchedChapter = reChapter.exec(data);
    while (matchedChapter != null) {
        chapters.push({ id: matchedChapter[1], content: matchedChapter[2] });
        matchedChapter = reChapter.exec(data);
    }

    return chapters;
}

export { getChapters, getRules };
