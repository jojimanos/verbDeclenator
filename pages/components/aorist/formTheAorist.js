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
    let aoristPass = `${"ἔ" + no_accent + "άμην"} ${"ἔ" + accent + "ω"} ${"ἔ" + accent + "ατο"} ${"ἔ" + no_accent + "άμεθα"} ${"ἔ" + accent + "ασθε"} ${"ἔ" + accent + "αντο"}`
    let aoristActiveArray = aoristAct.split(" ")
    let aoristPassiveArray = aoristPass.split(" ")
    console.log(aoristActiveArray)
    let aoristActive = <div>{aoristActiveArray.map((aorist, i) => <p key={i}>{aorist}</p>)}</div>
    let aoristPassive = <div>{aoristPassiveArray.map((aorist, i) => <p key={i}>{aorist}</p>)}</div>
    return ([aoristActive, aoristPassive])
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let aoristAct = `${"ἔ" + stem + "α"} ${"ἔ" + stem + "ας"} ${"ἔ" + stem + "ε"} ${"ἔ" + stem + "αμεν"} ${"ἔ" + stem + "ατε"} ${"ἔ" + stem + "ασαν"}`
    let aoristPass = `${"ἔ" + stem + "άμην"} ${"ἔ" + stem + "ω"} ${"ἔ" + stem + "ατο"} ${"ἔ" + stem + "άμεθα"} ${"ἔ" + stem + "ασθε"} ${"ἔ" + stem + "αντο"}`
    let aoristActiveArray = aoristAct.split(" ")
    let aoristPassiveArray = aoristPass.split(" ")
    let aoristActive = <div>{aoristActiveArray.map((aorist, i) => <p key={i}>{aorist}</p>)}</div>
    let aoristPassive = <div>{aoristPassiveArray.map((aorist, i) => <p key={i}>{aorist}</p>)}</div>
    return [aoristActive, aoristPassive]
  }
  else if (declension == null) {
    let aoristActive = "Not a verb"
    let aoristPassive = ""
    return [aoristActive, aoristPassive]
  }
}

export default formTheAorist