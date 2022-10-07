function Stem_mod(verb) {
        
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    let stem = null 
    verb.match(/^ά/|/.ά./) ? stem = verb.replace("ά", "α") : stem = verb
    verb.match(/^έ/|/.έ./) ? stem = verb.replace("έ", "ε") : stem
    verb.match(/^ί/|/.ί./) ? stem = verb.replace("ί", "ι") : stem 
    verb.match(/^ό/|/.ό./) ? stem = verb.replace("ό", "ο") : stem
    verb.match(/^ύ/|/.ύ./) ? stem = verb.replace("ύ", "υ") : stem

    if (declension = "thematic") {
        stem = stem.slice(0, -1)
    }
    else if (declension = "athematic") {
        stem = stem.slice(0, -2)
    }
    
    return stem
}

export default Stem_mod