function formThePresent(verb) {
    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension = "athematic";
    console.log(declension);
    if (indicative) {
        if (declension == "thematic") {
            let stem = verb.slice(0, -1)
            let presentActive = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} 
      ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
            let presentPassive = `${stem + "ομαι"} ${stem + "ει"} ${stem + "εται"} 
      ${stem + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
            return [presentActive, presentPassive]
        }
        else if (declension == "athematic") {
            let stem = verb.slice(0, -2)
            let presentActive = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} 
      ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
            let presentPassive = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} 
      ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
            return [presentActive, presentPassive]
        }
    }
}

export default formThePresent