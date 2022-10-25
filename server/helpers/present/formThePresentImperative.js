exports.formThePresentImperative = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let declension = null
  let presentActiveArray
  let presentMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let presentAct = `${stem + "ε"} ${no_accent + "έτω"} ${stem + "ετε"} ${no_accent + "όντων, -έτωσαν"}`
    let presentMidd = `${stem + "ου"} ${no_accent + "έσθω"} ${stem + "εσθε"} ${no_accent + "έσθων, -έσθωσαν"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
    //presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>

  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentAct = `${stem + ""} ${stem + "τω"} ${stem + "τε"} ${stem + "ντων"}`
    let presentMidd = `${stem + "σο"} ${stem + "σθω"} ${stem + "σθε"} ${stem + "σθων"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //console.log(presentActiveArray)
    //presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
    //presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
  }
  else if (declension == null) {
    //let presentActive = "Not a verb"
    //let presentMiddle = ""
  }
  console.log(presentActiveArray, presentMiddleArray)
}