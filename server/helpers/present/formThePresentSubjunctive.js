exports.formThePresentSubjunctive = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  var no_accent = myModule.stem
  let declension = null
  let presentActiveArray
  let presentMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let presentAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
    let presentMidd = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${no_accent + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //console.log(presentActiveArray)
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
    //return [presentActive, presentMiddle]
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
    let presentMidd = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${no_accent + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //console.log(presentActiveArray)
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
    //return [presentActive, presentMiddle]
  }
  else if (declension == null) {
    //let presentActive = "Not a verb"
    //let presentMiddle = ""
    //return [presentActive, presentMiddle]
  }
  console.log(presentActiveArray, presentMiddleArray, no_accent)

  return res.json({
    presentActiveArray
  })
}