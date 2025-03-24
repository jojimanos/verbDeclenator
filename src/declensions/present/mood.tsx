import determineVoice from "../determineVoice";
import presentOutput from "./output";
import formThePresent from "./formThePresent";
import errorMessage from "./errorMessage";
import formThePresentSubjunctive from "./formThePresentSubjunctive";
import formThePresentOptative from "./formThePresentOptative";
import formThePresentImperative from "./formThePresentImperative";
import styles from "../../../styles/Home.module.css";
import { JSX } from "react";

const presentDeclension = (
  verb: string,
  active: boolean,
  passive: boolean,
  middle: boolean,
  indicative: boolean,
  subjunctive: boolean,
  optative: boolean,
  imperative: boolean
) => {
  let voice = determineVoice({active, middle, passive});

  console.log(voice);

  let tense = "Present";

  let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"];

  let indicativeForm = formThePresent(verb);

  let subjunctiveForm = formThePresentSubjunctive(verb);

  let optativeForm = formThePresentOptative(verb);

  let imperativeForm = formThePresentImperative(verb);

  return (
    <div className={styles.whole_tense}>
      <h3>{tense}</h3>
      <div className={styles.index}>
        {indicative && (
          <div>
            <h4>{mood[0]}</h4>
            <p>{presentOutput(voice, indicativeForm as JSX.Element[])}</p>
          </div>
        )}
        {subjunctive && (
          <div>
            <h4>{mood[1]}</h4>
            <p>{presentOutput(voice, subjunctiveForm as JSX.Element[])}</p>
          </div>
        )}
        {optative && (
          <div>
            <h4>{mood[2]}</h4>
            <p>{presentOutput(voice, optativeForm as JSX.Element[])}</p>
          </div>
        )}
        {imperative && (
          <div>
            <h4>{mood[3]}</h4>
            <p>{presentOutput(voice, imperativeForm as JSX.Element[])}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default presentDeclension;
