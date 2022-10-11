import Stem_mod from '../stem_mod'

function formThePresent(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let presentAct = `${"ἔ" + no_accent + "ον"} ${"ἔ" + no_accent + "ες"} ${"ἔ" + no_accent + "ε"} ${"ἐ" + stem + "ομεν"} ${"ἐ" + stem + "ετε"} ${"ἔ" + no_accent + "ον"}`
      let presentPass = `${stem + "ομαι"} ${stem + "ει"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
      let presentActiveArray = presentAct.split(" ")
      let presentPassiveArray = presentPass.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentPassive = <div>{presentPassiveArray.map((present) => <p>{present}</p>)}</div>
        return ([presentActive, presentPassive])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
        let presentPass = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
        let presentActiveArray = presentAct.split(" ")
        let presentPassiveArray = presentPass.split(" ")
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