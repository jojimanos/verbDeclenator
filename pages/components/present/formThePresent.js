import Stem_mod from '../stem_mod'

function formThePresent(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let presentAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
      let presentMidd = `${stem + "ομαι"} ${stem + "ει, -ῃ"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
      let presentActiveArray = presentAct.split(" ")
      let presentMiddleArray = presentMidd.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
        return ([presentActive, presentMiddle])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
        let presentMidd = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
        let presentActiveArray = presentAct.split(" ")
        let presentMiddleArray = presentMidd.split(" ")
        let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentMiddle]
    }
    else if (declension == null) {
        let presentActive = "Not a verb"
        let presentMiddle = ""
        return [presentActive, presentMiddle]
    }
}

export default formThePresent