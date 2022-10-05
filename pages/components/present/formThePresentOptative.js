function formThePresentOptative(verb) {

    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentActive = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} 
      ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentPassive = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} 
      ${stem + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentActive = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} 
      ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentPassive = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} 
      ${stem + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
        return [presentActive, presentPassive]
    }
    else if (declension == null) {
        let presentActive = "Not a verb"
        let presentPassive = ""
        return [presentActive, presentPassive]
    }
}

export default formThePresentOptative