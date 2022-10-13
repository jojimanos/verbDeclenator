export function aoristStemMod(verb) {

    let declension = null
    let stem = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;

    if (declension = "thematic") {
        stem = stem.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = stem.slice(0, -4)
    }

    stem.match(/.κ$/) ? stem.replace("κ", "ξ") : stem
    stem.match(/.γ$/) ? stem.replace("γ", "ξ") : stem
    stem.match(/.χ$/) ? stem.replace("χ", "ξ") : stem
    stem.match(/.τ$/) ? stem.replace("τ", "σ") : stem
    stem.match(/.δ$/) ? stem.replace("δ", "σ") : stem
    stem.match(/.θ$/) ? stem.replace("θ", "σ") : stem
    stem.match(/.π$/) ? stem.replace("π", "ψ") : stem
    stem.match(/.β$/) ? stem.replace("β", "ψ") : stem
    stem.match(/.φ$/) ? stem.replace("φ", "ψ") : stem

    let no_accent = ""

    stem.match(/^ά/) ? no_accent = stem.replace("ά", "α") : no_accent = stem
    verb.match(/.ά./) ? no_accent = stem.replace("ά", "α") : no_accent
    verb.match(/^έ/) ? no_accent = stem.replace("έ", "ε") : no_accent
    verb.match(/.έ./) ? no_accent = verb.replace("έ", "ε") : no_accent
    verb.match(/^ί/) ? no_accent = verb.replace("ί", "ι") : no_accent
    verb.match(/.ί./) ? no_accent = verb.replace("ί", "ι") : no_accent
    verb.match(/^ό/) ? no_accent = verb.replace("ό", "ο") : no_accent
    verb.match(/.ό./) ? no_accent = verb.replace("ό", "ο") : no_accent
    verb.match(/^ύ/) ? no_accent = verb.replace("ύ", "υ") : no_accent
    verb.match(/.ύ./) ? no_accent = verb.replace("ύ", "υ") : no_accent

    return stem
}

export function aoristStemModNoAccent(verb) {

    let declension = null
    let stem = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;

    if (declension = "thematic") {
        stem = stem.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = stem.slice(0, -4)
    }

    stem.match(/.κ$/) ? stem.replace("κ", "ξ") : stem
    stem.match(/.γ$/) ? stem.replace("γ", "ξ") : stem
    stem.match(/.χ$/) ? stem.replace("χ", "ξ") : stem
    stem.match(/.τ$/) ? stem.replace("τ", "σ") : stem
    stem.match(/.δ$/) ? stem.replace("δ", "σ") : stem
    stem.match(/.θ$/) ? stem.replace("θ", "σ") : stem
    stem.match(/.π$/) ? stem.replace("π", "ψ") : stem
    stem.match(/.β$/) ? stem.replace("β", "ψ") : stem
    stem.match(/.φ$/) ? stem.replace("φ", "ψ") : stem

    let no_accent = ""

    stem.match(/^ά/) ? no_accent = stem.replace("ά", "α") : no_accent = stem
    verb.match(/.ά./) ? no_accent = stem.replace("ά", "α") : no_accent
    verb.match(/^έ/) ? no_accent = stem.replace("έ", "ε") : no_accent
    verb.match(/.έ./) ? no_accent = verb.replace("έ", "ε") : no_accent
    verb.match(/^ί/) ? no_accent = verb.replace("ί", "ι") : no_accent
    verb.match(/.ί./) ? no_accent = verb.replace("ί", "ι") : no_accent
    verb.match(/^ό/) ? no_accent = verb.replace("ό", "ο") : no_accent
    verb.match(/.ό./) ? no_accent = verb.replace("ό", "ο") : no_accent
    verb.match(/^ύ/) ? no_accent = verb.replace("ύ", "υ") : no_accent
    verb.match(/.ύ./) ? no_accent = verb.replace("ύ", "υ") : no_accent

    return no_accent
}