function formTheAoristSubjunctive(verb) {
  let declension = "";
  verb.match(/.ω$/) ? (declension = "thematic") : declension;
  verb.match(/.μι$/) ? (declension = "athematic") : declension;
  console.log(declension);
  if (declension == "thematic") {
    let stem = verb.slice(0, -1);
    let aoristAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${
      stem + "ωμεν"
    } ${stem + "ητε"} ${stem + "ωσιν"}`;
    let aoristPass = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${
      stem + "ωμεθα"
    } ${stem + "ησθε"} ${stem + "ωνται"}`;
    let aoristActiveArray = aoristAct.split(" ");
    let aoristPassiveArray = aoristPass.split(" ");
    console.log(aoristActiveArray);
    let aoristActive = (
      <div>
        {aoristActiveArray.map((aorist, i) => (
          <p key={i}>{aorist}</p>
        ))}
      </div>
    );
    let aoristPassive = (
      <div>
        {aoristPassiveArray.map((aorist, i) => (
          <p key={i}>{aorist}</p>
        ))}
      </div>
    );
    return [aoristActive, aoristPassive];
  } else if (declension == "athematic") {
    let stem = verb.slice(0, -2);
    let aoristAct = `${stem + "ω"} ${stem + "ῃς"} ${stem + "ῃ"} ${
      stem + "ωμεν"
    } ${stem + "ητε"} ${stem + "ωσιν"}`;
    let aoristPass = `${stem + "ωμαι"} ${stem + "ῃ"} ${stem + "ηται"} ${
      stem + "ώμεθα"
    } ${stem + "ησθε"} ${stem + "ωνται"}`;
    let aoristActiveArray = aoristAct.split(" ");
    let aoristPassiveArray = aoristPass.split(" ");
    console.log(aoristActiveArray);
    let aoristActive = (
      <div>
        {aoristActiveArray.map((aorist, i) => (
          <p key={i}>{aorist}</p>
        ))}
      </div>
    );
    let aoristPassive = (
      <div>
        {aoristPassiveArray.map((aorist, i) => (
          <p key={i}>{aorist}</p>
        ))}
      </div>
    );
    return [aoristActive, aoristPassive];
  } else if (declension == null) {
    let aoristActive = "Not a verb";
    let aoristPassive = "";
    return [aoristActive, aoristPassive];
  }
}

export default formTheAoristSubjunctive;
