function CircumflexStemMod(verb) {
        
    let declension = null
    let stem = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;

    if (declension = "thematic") {
        stem = verb.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = verb.slice(0, -4)
    }

    stem.match(/.κ$/) ? stem.replace("κ", "ξ") : stem
    stem.match(/.γ$/) ? stem.replace("γ", "ξ") : stem
    stem.match(/.χ$/) ? stem.replace("χ", "ξ") : stem
    stem.match(/.τ$/) ? stem.replace("τ", "σ") : stem
    stem.match(/.δ$/) ? stem.replace("δ", "σ") : stem
    stem.match(/.θ$/) ? stem.replace("θ", "σ") : stem
    stem.match(/.π$/) ? stem.replace("π", "ψ") : stem
    stem.match(/.β$/) ? stem.replace("β", "ψ") : stem
    stem.match(/.φ$/) ? stem.replace("φ", "ψ") : stem = `${stem + 'σ'}`

    let circumflex = ""

    stem.match(/^ά/) ? circumflex = stem.replace("ά", "α") : circumflex = stem
    stem.match(/.ά./) ? circumflex = stem.replace("ά", "α") : circumflex
    stem.match(/^ί/) ? circumflex = stem.replace("ί", "ι") : circumflex
    stem.match(/.ί./) ? circumflex = stem.replace("ί", "ι") : circumflex
    stem.match(/^ό/) ? circumflex = stem.replace("ό", "ο") : circumflex
    stem.match(/.ό./) ? circumflex = stem.replace("ό", "ο") : circumflex
    stem.match(/^ύ/) ? circumflex = stem.replace("ύ", "ῦ") : circumflex
    stem.match(/.ύ./) ? circumflex = stem.replace("ύ", "ῦ") : circumflex

    return circumflex
}

export default CircumflexStemMod