import Stem_mod from '../stem_mod'
import { aoristStemMod } from '../aoristStemMod';
import { aoristStemModNoAccent } from '../aoristStemMod';

function formTheAorist(verb) {

  accent = aoristStemMod(verb)
  no_accent = aoristStemModNoAccent(verb)
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let futureAct = `${no_accent + "ω"} ${no_accent + "εις"} ${no_accent + "ει"} ${accent + "ομεν"} ${accent + "ετε"} ${no_accent + "ουσιν"}`
    let futurePass = `${no_accent + "ομαι"} ${accent + "ει"} ${accent + "εται"} ${no_accent + "όμεθα"} ${accent + "εσθε"} ${accent + "ονται"}`
    let futureActiveArray = futureAct.split(" ")
    let futurePassiveArray = futurePass.split(" ")
    console.log(futureActiveArray)
    let futureActive = <div>{futureActiveArray.map((future) => <p>{future}</p>)}</div>
    let futurePassive = <div>{futurePassiveArray.map((future) => <p>{future}</p>)}</div>
    return ([futureActive, futurePassive])
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let futureAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
    let futurePass = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
    let futureActiveArray = futureAct.split(" ")
    let futurePassiveArray = futurePass.split(" ")
    let futureActive = <div>{futureActiveArray.map((future) => <p>{future}</p>)}</div>
    let futurePassive = <div>{futurePassiveArray.map((future) => <p>{future}</p>)}</div>
    return [futureActive, futurePassive]
  }
  else if (declension == null) {
    let futureActive = "Not a verb"
    let futurePassive = ""
    return [futureActive, futurePassive]
  }
}

export default formTheAorist