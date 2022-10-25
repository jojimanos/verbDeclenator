exports.formTheFuture = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let futureAct = `${stem + "σω"} ${stem + "σεις"} ${stem + "σει"} ${stem + "σομεν"} ${stem + "σετε"} ${stem + "σουσιν"}`
    let futureMidd = `${stem + "σομαι"} ${stem + "σει"} ${stem + "σεται"} ${no_accent + "σόμεθα"} ${stem + "σεσθε"} ${stem + "σονται"}`
    futureActiveArray = futureAct.split(" ")
    futureMiddArray = futureMidd.split(" ")
    //console.log(futureActiveArray)
    //let futureActive = <div>{futureActiveArray.map((future) => <p>{future}</p>)}</div>
    //let futurePassive = <div>{futurePassiveArray.map((future) => <p>{future}</p>)}</div>
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let futureAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
    let futureMidd = `${stem + "ομαι"} ${stem + "εσαι"} ${stem + "εται"} ${stem + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
    futureActiveArray = futureAct.split(" ")
    futureMiddleArray = futureMidd.split(" ")
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
  exports.futurePassiveArray
}