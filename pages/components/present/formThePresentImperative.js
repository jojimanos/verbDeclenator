import Stem_mod from "../stem_mod";

function formThePresent(verb) {

  let no_accent = Stem_mod(verb)  
  let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentAct = `${stem + "ε"} ${no_accent + "έτω"} ${stem + "ετε"} ${no_accent = Stem_mod(verb) + "όντων, -έτωσαν"}`
        let presentPass = `${stem + "ου"} ${no_accent + "έσθω"} ${stem + "εσθε"} ${no_accent + "έσθων, -έσθωσαν"}`
      let presentActiveArray = presentAct.split(" ")
      let presentPassiveArray = presentPass.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentPassive = <div>{presentPassiveArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + ""} ${stem + "τω"} ${stem + "τε"} ${stem + "ντων"}`
        let presentPass = `${stem + "σο"} ${stem + "σθω"} ${stem + "σθε"} ${stem + "σθων"}`
        let presentActiveArray = presentAct.split(" ")
      let presentPassiveArray = presentPass.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentPassive = <div>{presentPassiveArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentPassive]
    }
    else if (declension == null) {
        let presentActive = "Not a verb"
        let presentPassive = ""
        return [presentActive, presentPassive]
    }
}

export default formThePresent