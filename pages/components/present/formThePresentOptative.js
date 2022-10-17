function formThePresentOptative(verb) {

    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentPass = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${stem + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
      let presentActiveArray = presentAct.split(" ")
      let presentPassiveArray = presentPass.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentPassive = <div>{presentPassiveArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentPassive]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentPass = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${stem + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
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

export default formThePresentOptative