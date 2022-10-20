import Stem_mod from '../stem_mod'

function formTheImperfect(verb) {

    let no_accent = Stem_mod(verb)
    let declension = null
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic": declension;
    console.log(declension);
    if (declension == "thematic") {
      let stem = verb.slice(0, -1)
      let imperfectAct = `${"ἔ" + no_accent + "ον"} ${"ἔ" + no_accent + "ες"} ${"ἔ" + no_accent + "ε"} ${"ἐ" + stem + "ομεν"} ${"ἐ" + stem + "ετε"} ${"ἔ" + no_accent + "ον"}`
      let imperfectPass = `${"ἐ" + stem + "ομην"} ${"ἐ" + stem + "ου"} ${"ἐ" + stem + "ετο"} ${"ἐ" + no_accent + "όμεθα"} ${"ἐ" + stem + "εσθε"} ${"ἐ" + stem + "οντο"}`
      let imperfectActiveArray = imperfectAct.split(" ")
      let imperfectPassiveArray = imperfectPass.split(" ")
      console.log(imperfectActiveArray)
      let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
      let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
        return ([imperfectActive, imperfectPassive])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let imperfectAct = `${"ἐ" + stem + "ν"} ${"ἐ" + stem + "ς"} ${"ἐ" + stem + ""} ${"ἐ" + stem + "μεν"} ${"ἐ" + stem + "τε"} ${"ἐ" + stem + "ν"}`
        let imperfectPass = `${stem + "μην"} ${stem + "σο"} ${stem + "το"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "ντο"}`
        let imperfectActiveArray = imperfectAct.split(" ")
        let imperfectPassiveArray = imperfectPass.split(" ")
        let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
      let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
        return ([imperfectActive, imperfectPassive])
    }
    else if (declension == null) {
        let imperfectActive = "Not a verb"
        let imperfectPassive = ""
        return ([imperfectActive, imperfectPassive])
    }
}

export default formTheImperfect