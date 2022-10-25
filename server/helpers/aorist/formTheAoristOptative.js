import Stem_mod from '../stem_mod'

function formTheAoristOptative(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let aoristAct = `${stem + "αιμι"} ${stem + "αις, -ειας"} ${stem + "αι, -ειε(ν)"} ${stem + "αιμεν"} ${stem + "αιτε"} ${stem + "αιεν, -ειαν"}`
      let aoristPass = `${stem + "αίμην"} ${stem + "αιο"} ${stem + "αιτο"} ${no_accent + "αίμεθα"} ${stem + "αισθε"} ${stem + "αιντο"}`
      let aoristActiveArray = aoristAct.split(" ")
      let aoristPassiveArray = aoristPass.split(" ")
      console.log(aoristActiveArray)
      let aoristActive = <div>{aoristActiveArray.map((aorist) => <p>{aorist}</p>)}</div>
      let aoristPassive = <div>{aoristPassiveArray.map((aorist) => <p>{aorist}</p>)}</div>
        return ([aoristActive, aoristPassive])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let aoristAct = `${stem + "αιμι"} ${stem + "αις, -ειας"} ${stem + "αι, -ειε(ν)"} ${stem + "αιμεν"} ${stem + "αιτε"} ${stem + "αιεν, -ειαν"}`
        let aoristPass = `${stem + "αίμην"} ${stem + "αιο"} ${stem + "αιτο"} ${stem + "αίμεθα"} ${stem + "αισθε"} ${stem + "αιντο"}`
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