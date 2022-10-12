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
      let imperfectPass = `${stem + "ομαι"} ${stem + "ει"} ${stem + "εται"} ${no_accent + "όμεθα"} ${stem + "εσθε"} ${stem + "ονται"}`
      let imperfectActiveArray = imperfectAct.split(" ")
      let imperfectPassiveArray = imperfectPass.split(" ")
      console.log(imperfectActiveArray)
      let imperfectActive = <div>{imperfectActiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
      let imperfectPassive = <div>{imperfectPassiveArray.map((imperfect) => <p>{imperfect}</p>)}</div>
        return ([imperfectActive, imperfectPassive])
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let imperfectAct = `${stem + "μι"} ${stem + "ς"} ${stem + "σιν"} ${stem + "μεν"} ${stem + "τε"} ${stem + "σιν"}`
        let imperfectPass = `${stem + "μαι"} ${stem + "σαι"} ${stem + "ται"} ${stem + "μεθα"} ${stem + "σθε"} ${stem + "νται"}`
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