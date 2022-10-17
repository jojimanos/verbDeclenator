import {aoristStemMod, aoristStemModNoAccent} from '../aoristStemMod'
import CircumflexStemMod from '../circumflexStemMod'

function formTheAoristImperative(verb) {

  let accent = aoristStemMod(verb)
  let no_accent = aoristStemModNoAccent(verb)
  let circumflex = CircumflexStemMod(verb)
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let aoristAct = `${circumflex + "ον"} ${no_accent + "άτω"} ${accent + "ατε"} ${no_accent + "άντων / -άτωσαν"}`
    let aoristPass = `${accent + "αι"} ${no_accent + "άσθω"} ${accent + "ασθε"} ${no_accent + "άσθων / -άσθωσαν"}`
      let aoristActiveArray = aoristAct.split(" ")
      let aoristPassiveArray = aoristPass.split(" ")
      console.log(aoristActiveArray)
      let aoristActive = <div>{aoristActiveArray.map((aorist) => <p>{aorist}</p>)}</div>
      let aoristPassive = <div>{aoristPassiveArray.map((aorist) => <p>{aorist}</p>)}</div>
    return [aoristActive, aoristPassive]
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let aoristAct = `${stem + ""} ${stem + "τω"} ${stem + "τε"} ${stem + "ντων"}`
    let aoristPass = `${stem + "σο"} ${stem + "σθω"} ${stem + "σθε"} ${stem + "σθων"}`
    let aoristActiveArray = aoristAct.split(" ")
      let aoristPassiveArray = aoristPass.split(" ")
      console.log(aoristActiveArray)
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

export default formTheAoristImperative