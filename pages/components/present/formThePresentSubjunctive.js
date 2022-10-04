function formThePresentSubjunctive(verb) {

    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension = "athematic";
    verb.match(/.μι$/) ? declension = "athematic" : declension = null
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentActive = `${stem + "ω"} ${stem + "ης"} ${stem + "η"} 
      ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
        let presentPassive = `${stem + "ωμαι"} ${stem + "η"} ${stem + "ηται"} 
      ${stem + "ωμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentActive = `${stem + "ω"} ${stem + "ης"} ${stem + "η"} 
      ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
        let presentPassive = `${stem + "ωμαι"} ${stem + "η"} ${stem + "ηται"} 
      ${stem + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
        return [presentActive, presentPassive]
    }
    else if (declension == null) {
        let presentActive = "Not a verb"
        let presentPassive = ""
        return [presentActive, presentPassive]
    }
}

export default formThePresentSubjunctive