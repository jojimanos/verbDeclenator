function formThePresentSubjunctive(verb) {

    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentAct = `${stem + "ω"} ${stem + "ης"} ${stem + "η"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
        let presentPass = `${stem + "ωμαι"} ${stem + "η"} ${stem + "ηται"} ${stem + "ωμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
      let presentActiveArray = presentAct.split(" ")
      let presentPassiveArray = presentPass.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentPassive = <div>{presentPassiveArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + "ω"} ${stem + "ης"} ${stem + "η"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
        let presentPass = `${stem + "ωμαι"} ${stem + "η"} ${stem + "ηται"} ${stem + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
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

export default formThePresentSubjunctive