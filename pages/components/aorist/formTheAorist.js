import {aoristStemMod, aoristStemModNoAccent} from '../aoristStemMod';

function formTheAorist(verb) {

  let accent = aoristStemMod(verb)
  let no_accent = aoristStemModNoAccent(verb)
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let aoristAct = `${"ἔ" + no_accent + "α"} ${"ἔ" + no_accent + "ας"} ${"ἔ" + no_accent + "ε"} ${"ἐ" + accent + "αμεν"} ${"ἐ" + accent + "ατε"} ${"ἔ" + no_accent + "αν"}`
    let aoristPass = `${no_accent + "ομαι"} ${accent + "ει"} ${accent + "εται"} ${no_accent + "όμεθα"} ${accent + "εσθε"} ${accent + "ονται"}`
    let aoristActiveArray = aoristAct.split(" ")
    let aoristPassiveArray = aoristPass.split(" ")
    console.log(aoristActiveArray)
    let aoristActive = <div>{aoristActiveArray.map((aorist) => <p>{aorist}</p>)}</div>
    let aoristPassive = <div>{aoristPassiveArray.map((aorist) => <p>{aorist}</p>)}</div>
    return ([aoristActive, aoristPassive])
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let aoristAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
    let aoristPass = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
    let aoristActiveArray = aoristAct.split(" ")
    let aoristPassiveArray = aoristPass.split(" ")
    let aoristActive = <div>{aoristActiveArray.map((aorist) => <p>{aorist}</p>)}</div>
    let aoristPassive = <div>{aoristPassiveArray.map((aorist) => <p>{aorist}</p>)}</div>
    return [aoristActive, aoristPassive]
  }
  else if (declension == null) {
    let aoristActive = "Not a verb"
    let aoristPassive = ""
    return [aoristActive, aoristPassive]
  }
}

export default formTheAorist