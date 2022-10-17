import Stem_mod from '../stem_mod'

function formTheAoristOptative(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let aoristAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
      let aoristPass = `${stem + "ομαι"} ${stem + "ει"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
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

export default formTheAoristOptative