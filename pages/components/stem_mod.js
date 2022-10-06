function Stem_mod(verb) {
        
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    let stem = null 
    verb.match(/.ύ./) ? stem = verb.replace("ύ", "υ") : stem = verb
    verb.match(/.ί./) ? stem = verb.replace("ί", "ι") : stem = verb

    if (declension = "thematic") {
        stem = stem.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = stem.slice(0, -2)
    }
    
    return stem
}

export default Stem_mod