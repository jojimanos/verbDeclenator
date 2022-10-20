import Stem_mod from "../stem_mod";

function formThePresentSubjunctive(verb) {

  let no_accent = Stem_mod(verb)
  let declension = ""
  verb.match(/.ω$/) ? declension = "thematic" : declension;
  verb.match(/.μι$/) ? declension = "athematic" : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1)
    let presentAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
    let presentMidd = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${no_accent + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
    let presentActiveArray = presentAct.split(" ")
    let presentMiddleArray = presentMidd.split(" ")
    console.log(presentActiveArray)
    let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
    let presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
    return [presentActive, presentMiddle]
  }
  else if (declension == "athematic") {
    let stem = verb.slice(0, -2)
    let presentAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${stem + "ωμεν"} ${stem + "ητε"} ${stem + "ωσιν"}`
    let presentMidd = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${no_accent + "ώμεθα"} ${stem + "ησθε"} ${stem + "ωνται"}`
    let presentActiveArray = presentAct.split(" ")
    let presentMiddleArray = presentMidd.split(" ")
    console.log(presentActiveArray)
    let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
    let presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
    return [presentActive, presentMiddle]
  }
  else if (declension == null) {
    let presentActive = "Not a verb"
    let presentMiddle = ""
    return [presentActive, presentMiddle]
  }
}

export default formThePresentSubjunctive