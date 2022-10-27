exports.formThePresent = (req, res) => {

  //const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let myModule2 = require('../removePreposition')
  let verb = myModule2.type
  let declension = null
  let presentActiveArray
  let presentMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let presentAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
    let presentMidd = `${stem + "ομαι"} ${stem + "ει, -ῃ"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //console.log(presentActiveArray)
    //console.log(presentMiddleArray)
    //let presentActive = presentActiveArray.map((present) => { present });
    //let presentMiddle = presentMiddleArray.map((present) => { present });
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
    let presentMidd = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => { present })
    //let presentMiddle = presentMiddleArray.map((present) => { present })
  }
  else if (declension == null) {
    //let presentActive = "Not a verb"
    //let presentMiddle = "" 
  }
  console.log(presentActiveArray, presentMiddleArray, no_accent)

  return res.json({
    presentActiveArray
  })
}