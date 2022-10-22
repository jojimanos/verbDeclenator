exports.Stem_mod = (req, res) => {

    const { verb } = req.body

    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    let stem = null
    verb.match(/^ά/) ? stem = verb.replace("ά", "α") : stem = verb
    verb.match(/.ά./) ? stem = verb.replace("ά", "α") : stem
    verb.match(/^έ/) ? stem = verb.replace("έ", "ε") : stem
    verb.match(/.έ./) ? stem = verb.replace("έ", "ε") : stem
    verb.match(/^ί/) ? stem = verb.replace("ί", "ι") : stem
    verb.match(/.ί./) ? stem = verb.replace("ί", "ι") : stem
    verb.match(/^ό/) ? stem = verb.replace("ό", "ο") : stem
    verb.match(/.ό./) ? stem = verb.replace("ό", "ο") : stem
    verb.match(/^ύ/) ? stem = verb.replace("ύ", "υ") : stem
    verb.match(/.ύ./) ? stem = verb.replace("ύ", "υ") : stem

    if (declension = "thematic") {
        stem = stem.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = stem.slice(0, -2)
    }
    console.log(stem)

    exports.stem = stem
        
}