exports.formTheImperfect = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let declension = null
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let imperfectAct = `${"ἔ" + no_accent + "ον"} ${"ἔ" + no_accent + "ες"} ${"ἔ" + no_accent + "ε"} ${"ἐ" + stem + "ομεν"} ${"ἐ" + stem + "ετε"} ${"ἔ" + no_accent + "ον"}`
    let imperfectMidd = `${"ἐ" + no_accent + "όμην"} ${"ἐ" + stem + "ου"} ${"ἐ" + stem + "ετο"} ${"ἐ" + no_accent + "όμεθα"} ${"ἐ" + stem + "εσθε"} ${"ἐ" + stem + "οντο"}`
    imperfectActiveArray = imperfectAct.split(" ")
    imperfectMiddleArray = imperfectMidd.split(" ")
    //console.log(imperfectActiveArray)
    //let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
    //let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let imperfectAct = `${"ἐ" + stem + "ν"} ${"ἐ" + stem + "ς"} ${"ἐ" + stem + ""} ${"ἐ" + stem + "μεν"} ${"ἐ" + stem + "τε"} ${"ἐ" + stem + "ν"}`
    let imperfectMidd = `${stem + "μην"} ${stem + "σο"} ${stem + "το"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "ντο"}`
    imperfectActiveArray = imperfectAct.split(" ")
    imperfectMiddleArray = imperfectMidd.split(" ")
    //let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
    //let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
  }
  else if (declension == null) {
    let imperfectActive = "Not a verb"
    let imperfectMiddle = ""
    return ([imperfectActive, imperfectMiddle])
  }
  console.log(imperfectActiveArray, imperfectMiddleArray)

  exports.imperfectActiveArray = imperfectActiveArray
  exports.imperfectMiddleArray = imperfectMiddleArray
}