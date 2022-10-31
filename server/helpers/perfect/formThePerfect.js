exports.formThePerfect = (req, res) => {

  //const { verb } = req.body

  let myModule = require('../perfectStem')
  let no_accent = myModule.stem
  let declension = null
  let perfectActiveArray
  let perfectMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let perfectAct = `${stem + "ω"} ${stem + "εις"} ${stem + "ει"} ${stem + "ομεν"} ${stem + "ετε"} ${stem + "ουσιν"}`
    let perfectMidd = `${stem + "ομαι"} ${stem + "ει, -ῃ"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
    perfectActiveArray = perfectAct.split(" ")
    perfectMiddleArray = perfectMidd.split(" ")
    //console.log(presentActiveArray)
    //console.log(presentMiddleArray)
    //let presentActive = presentActiveArray.map((present) => { present });
    //let presentMiddle = presentMiddleArray.map((present) => { present });
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let perfectAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
    let perfectMidd = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
    perfectActiveArray = perfectAct.split(" ")
    perfectMiddleArray = perfectMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => { present })
    //let presentMiddle = presentMiddleArray.map((present) => { present })
  }
  else if (declension == null) {
    //let presentActive = "Not a verb"
    //let presentMiddle = "" 
  }
  console.log(perfectActiveArray, perfectMiddleArray, no_accent)

  return res.json({
    perfectActiveArray
  })
}