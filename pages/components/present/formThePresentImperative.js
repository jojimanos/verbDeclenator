function formThePresent(verb) {

    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentActive = `${stem + "ε"} ${stem + "έτω"} 
      ${stem + "ετε"} ${stem + "έτωσαν"}`
        let presentPassive = `${stem + "ου"} ${stem + "έσθω"} 
      ${stem + "εσθε"} ${stem + "έσθωσαν"}`
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentActive = `${stem + ""} ${stem + "τω"} 
      ${stem + "τε"} ${stem + "ντων"}`
        let presentPassive = `${stem + "σο"} ${stem + "σθω"} 
      ${stem + "σθε"} ${stem + "σθων"}`
        return [presentActive, presentPassive]
    }
    else if (declension == null) {
        let presentActive = "Not a verb"
        let presentPassive = ""
        return [presentActive, presentPassive]
    }
}

export default formThePresent