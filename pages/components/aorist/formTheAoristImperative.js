import {aoristStemMod, aoristStemModNoAccent} from '../aoristStemMod'
import CircumflexStemMod from '../circumflexStemMod'

function formThePresent(verb) {

  let accent = aoristStemMod(verb)
  let no_accent = aoristStemModNoAccent(verb)
  let circumflex = CircumflexStemMod(verb)
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let presentActive = `${circumflex + "ον"} ${no_accent + "άτω"} 
      ${accent + "ατε"} ${no_accent + "άντων / -άτωσαν"}`
    let presentPassive = `${accent + "αι"} ${no_accent + "άσθω"} 
      ${accent + "ασθε"} ${no_accent + "άσθων / -άσθωσαν"}`
    return [presentActive, presentPassive]
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentActive = `${stem + ""} ${stem + "τω"} 
      ${stem + "τε"} ${stem + "ντων"}`
    let presentPassive = `${stem + "σο"} ${stem + "σθω"} 
      ${stem + "σθε"} ${stem + "σθων"}`
    return [presentActive, presentPassive]
  }
  else if (declension == null) {
    let presentActive = "Not a verb"
    let presentPassive = ""
    return [presentActive, presentPassive]
  }
}

export default formThePresent