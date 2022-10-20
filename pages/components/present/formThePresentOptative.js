import Stem_mod from "../stem_mod";

function formThePresentOptative(verb) {

  let no_accent = Stem_mod(verb)  
  let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension;
    verb.match(/.μι$/) ? declension = "athematic" : declension;
    console.log(declension);
    if (declension == "thematic") {
        let stem = verb.slice(0, -1)
        let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
      let presentActiveArray = presentAct.split(" ")
      let presentMiddleArray = presentMidd.split(" ")
      console.log(presentActiveArray)
      let presentActive = <div>{presentActiveArray.map((present) => <p>{present}</p>)}</div>
      let presentMiddle = <div>{presentMiddleArray.map((present) => <p>{present}</p>)}</div>
        return [presentActive, presentMiddle]
    }
    else if (declension == "athematic") {
        let stem = verb.slice(0, -2)
        let presentAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${stem + "οιμεν"} ${stem + "οιτε"} ${stem + "οιεν"}`
        let presentMidd = `${stem + "οιμην"} ${stem + "οιο"} ${stem + "οιτο"} ${no_accent + "οίμεθα"} ${stem + "οισθε"} ${stem + "οιντο"}`
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

export default formThePresentOptative