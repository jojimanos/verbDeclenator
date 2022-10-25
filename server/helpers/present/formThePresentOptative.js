exports.formThePresentOptative = (req, res) => {

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
    let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
    let presentMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
    let presentMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
    presentActiveArray = presentAct.split(" ")
    presentMiddleArray = presentMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
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