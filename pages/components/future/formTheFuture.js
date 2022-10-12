import Stem_mod from '../stem_mod'

function formTheFuture(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let futureAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
      let futurePass = `${stem + "ομαι"} ${stem + "ει"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
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

export default formTheFuture