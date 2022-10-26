exports.formThePluperfect = (req, res) => {

  const { verb } = req.body

  let myModule = require('../stem_mod')
  let no_accent = myModule.stem
  let declension = null
  let pluperfectActiveArray
  let pluperfectMiddleArray
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let pluperfectAct = `${"ἔ" + no_accent + "ειν"} ${"ἔ" + no_accent + "εις"} ${"ἔ" + no_accent + "ει"} ${"ἐ" + stem + "εμεν"} ${"ἐ" + stem + "ετε"} ${"ἔ" + no_accent + "εσαν"}`
    let pluperfectMidd = `${"ἐ" + no_accent + "μην"} ${"ἐ" + stem + "σο"} ${"ἐ" + stem + "το"} ${"ἐ" + no_accent + "μεθα"} ${"ἐ" + stem + "σθε"} ${"ἐ" + stem + "ντο"}`
    pluperfectActiveArray = pluperfectAct.split(" ")
    pluperfectMiddleArray = pluperfectMidd.split(" ")
    //console.log(imperfectActiveArray)
    //let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
    //let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let pluperfectAct = `${"ἐ" + stem + "ν"} ${"ἐ" + stem + "ς"} ${"ἐ" + stem + ""} ${"ἐ" + stem + "μεν"} ${"ἐ" + stem + "τε"} ${"ἐ" + stem + "ν"}`
    let pluperfectMidd = `${stem + "μην"} ${stem + "σο"} ${stem + "το"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "ντο"}`
    pluperfectActiveArray = pluperfectAct.split(" ")
    pluperfectMiddleArray = pluperfectMidd.split(" ")
    //let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
    //let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
  }
  else if (declension == null) {
    let pluperfectActive = "Not a verb"
    let pluperfectMiddle = ""
    return ([pluperfectActive, pluperfectMiddle])
  }
  console.log(pluperfectActiveArray, pluperfectMiddleArray)

  exports.pluperfectActiveArray = pluperfectActiveArray
  exports.pluperfectMiddleArray = pluperfectMiddleArray
}