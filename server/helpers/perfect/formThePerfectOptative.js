exports.formThePerfectOptative = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let declension = null
  let perfectActiveArray
  let perfectMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let perfectAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
    let perfectMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
    perfectActiveArray = perfectAct.split(" ")
    perfectMiddleArray = perfectMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let perfectAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
    let perfectMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
    perfectActiveArray = perfectAct.split(" ")
    perfectMiddleArray = perfectMidd.split(" ")
    //let presentActive = presentActiveArray.map((present) => {present})
    //let presentMiddle = presentMiddleArray.map((present) => {present})
  }
  else if (declension == null) {
    //let presentActive = "Not a verb"
    //let presentMiddle = ""
    //return [presentActive, presentMiddle]
  }
  console.log(perfectActiveArray, perfectMiddleArray, no_accent)

  return res.json({
    perfectActiveArray
  })
}