exports.perfectStem = (req, res) => {

    const { verb } = req.body

    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    let stem = null
    if (declension = "thematic") {
        stem = verb.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = verb.slice(0, -2)
    }
    let sameConsonant = /^[βγδκλμνπρστ]/

    //let frontVowel = /^[αεο][αι][οι][ει]/

    stem.match(sameConsonant) ? stem = `${stem[0] + "ε" + stem}` : stem

    stem.match(/^χ/) ? "κ" + "ε" + stem : stem
    stem.match(/^φ/) ? "π" + "ε" + stem : stem
    stem.match(/^θ/) ? "τ" + "ε" + stem : stem
    stem.match(/^ξ/) ? "κ" + "ε" + stem : stem
    stem.match(/^ψ/) ? "π" + "ε" + stem : stem

    stem.match(/^ἀ/) ? "ἀ" + "ἠ" + stem : stem
    stem.match(/^ἐ/) ? "ἐ" + "ἠ" + stem : stem
    stem.match(/^ὀ/) ? "ὀ" + "ἠ" + stem : stem
    stem.match(/^ἁ/) ? "ἁ" + "ἡ" + stem : stem
    stem.match(/^ἑ/) ? "ἑ" + "ἡ" + stem : stem
    stem.match(/^ὁ/) ? "ὁ" + "ἡ" + stem : stem
    stem.match(/^αἰ/) ? "αἰ" + "ᾑ" + stem : stem
    stem.match(/^εἰ/) ? "εἰ" + "ᾑ" + stem : stem
    stem.match(/^οἰ/) ? "οἰ" + "ᾡ" + stem : stem
    stem.match(/^αἱ/) ? "αἱ" + "ᾑ" + stem : stem
    stem.match(/^εἱ/) ? "εἱ" + "ᾑ" + stem : stem
    stem.match(/^οἱ/) ? "οἱ" + "ᾡ" + stem : stem
    

    //verb.match(frontVowel) ? stem = `${
    //verb[0].match(/α/) ? verb[0].replace(/η/) : 
    //verb[0].match(/ε/) ? verb[0].replace(/η/) :
    //verb[0].match(/ο/) ? verb[0].replace(/ω/) :
    //verb[0].match(/α/) && verb[1].match(/ι/) ? verb[0,1].replace(/^αι/, "α") :
    //verb[0].match(/ε/) && verb[1].match(/ι/) ? verb[0,1].replace(/^ει/, "η") :
    //verb[0].match(/ο/) && verb[1].match(/ι/) ? verb[0,1].replace(/^οι/, "ω") :
    //verb[0].replace(/π/) }+${verb}` : stem

    verb.match(/^ά/) ? stem = stem.replace("ά", "α") : stem
    verb.match(/.ά./) ? stem = stem.replace("ά", "α") : stem
    verb.match(/^έ/) ? stem = stem.replace("έ", "ε") : stem
    verb.match(/.έ./) ? stem = stem.replace("έ", "ε") : stem
    verb.match(/^ί/) ? stem = stem.replace("ί", "ι") : stem
    verb.match(/.ί./) ? stem = stem.replace("ί", "ι") : stem
    verb.match(/^ό/) ? stem = stem.replace("ό", "ο") : stem
    verb.match(/.ό./) ? stem = stem.replace("ό", "ο") : stem
    verb.match(/^ύ/) ? stem = stem.replace("ύ", "υ") : stem
    verb.match(/.ύ./) ? stem = stem.replace("ύ", "υ") : stem

    console.log(stem)

    exports.stem = stem

}