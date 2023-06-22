import Stem_mod from "../stem_mod";

function formTheFutureOptative(verb) {
  let no_accent = Stem_mod(verb);
  let declension = null;
  verb.match(/.ω$/) ? (declension = "thematic") : declension;
  verb.match(/.μι$/) ? (declension = "athematic") : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1);
    let futureAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${
      stem + "οιμεν"
    } ${stem + "οιτε"} ${stem + "οιεν"}`;
    let futurePass = `${stem + "οίμην"} ${stem + "οιο"} ${stem + "οιτο"} ${
      no_accent + "οίμεθα"
    } ${stem + "οισθε"} ${stem + "οιντο"}`;
    let futureActiveArray = futureAct.split(" ");
    let futurePassiveArray = futurePass.split(" ");
    console.log(futureActiveArray);
    let futureActive = (
      <div>
        {futureActiveArray.map((future, i) => (
          <p key={i}>{future}</p>
        ))}
      </div>
    );
    let futurePassive = (
      <div>
        {futurePassiveArray.map((future, i) => (
          <p key={i}>{future}</p>
        ))}
      </div>
    );
    return [futureActive, futurePassive];
  } else if (declension == "athematic") {
    let stem = verb.slice(0, -2);
    let futureAct = `${stem + "οιμι"} ${stem + "οις"} ${stem + "οι"} ${
      stem + "οιμεν"
    } ${stem + "οιτε"} ${stem + "οιεν"}`;
    let futurePass = `${stem + "οίμην"} ${stem + "οιο"} ${stem + "οιτο"} ${
      stem + "οίμεθα"
    } ${stem + "οισθε"} ${stem + "οιντο"}`;
    let futureActiveArray = futureAct.split(" ");
    let futurePassiveArray = futurePass.split(" ");
    let futureActive = (
      <div>
        {futureActiveArray.map((future, i) => (
          <p key={i}>{future}</p>
        ))}
      </div>
    );
    let futurePassive = (
      <div>
        {futurePassiveArray.map((future, i) => (
          <p key={i}>{future}</p>
        ))}
      </div>
    );
    return [futureActive, futurePassive];
  } else if (declension == null) {
    let futureActive = "Not a verb";
    let futurePassive = "";
    return [futureActive, futurePassive];
  }
}

export default formTheFutureOptative;
