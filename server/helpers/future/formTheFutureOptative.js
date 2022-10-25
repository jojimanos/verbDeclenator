exports.formTheFutureOptative = (req, res) => {

    const {verb} = req.body
  
    let myModule = require('../stem_mod')  
    let no_accent = myModule.stem
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let futureAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
      let futureMidd = `${stem + "οίμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
      futureActiveArray = futureAct.split(" ")
      futureMiddleArray = futureMidd.split(" ")
      //console.log(futureActiveArray)
      //let futureActive = <div>{futureActiveArray.map((future) => <p>{future}</p>)}</div>
      //let futurePassive = <div>{futurePassiveArray.map((future) => <p>{future}</p>)}</div>
      //  return ([futureActive, futurePassive])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let futureAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let futureMidd = `${stem + "οίμην"} ${stem + "οιο"} ${stem + "οιτο"} ${stem + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
        futureActiveArray = futureAct.split(" ")
        futureMiddArray = futureMidd.split(" ")
        //let futureActive = <div>{futureActiveArray.map((future) => <p>{future}</p>)}</div>
        //let futurePassive = <div>{futurePassiveArray.map((future) => <p>{future}</p>)}</div>
        //return [futureActive, futurePassive]
    }
    else if (declension == null) {
        //let futureActive = "Not a verb"
        //let futurePassive = ""
        //return [futureActive, futurePassive]
    }
    exports.futureActiveArray
    exports.futureMiddleArray
}