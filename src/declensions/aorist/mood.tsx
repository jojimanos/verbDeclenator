import determineVoice from "../determineVoice";
import aoristOutput from "./output";
import formTheAorist from "./formTheAorist";
import formTheAoristSubjunctive from "./formTheAoristSubjunctive";
import formTheAoristOptative from "./formTheAoristOptative";
import formTheAoristImperative from "./formTheAoristImperative";
import styles from "../../../styles/Home.module.css";
import { JSX } from "react";

const aoristDeclension = (
  verb: string,
  active: boolean,
  middle: boolean,
  passive: boolean,
  indicative: boolean,
  subjunctive: boolean,
  optative: boolean,
  imperative: boolean
) => {
  let tense = "Aorist";

  let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"];

  let voice = determineVoice({ active, middle, passive });

  console.log(voice);

  let indicativeForm = formTheAorist(verb);

  let subjunctiveForm = formTheAoristSubjunctive(verb);

  let optativeForm = formTheAoristOptative(verb);

  let imperativeForm = formTheAoristImperative(verb);

  return (
    <div className={styles.whole_tense}>
      <h3>{tense}</h3>
      <div className={styles.index}>
        {indicative && (
          <p>
            <h4>{mood[0]}</h4>
            {aoristOutput(voice, indicativeForm as JSX.Element[])}
          </p>
        )}
        {subjunctive && (
          <p>
            <h4>{mood[1]}</h4>
            {aoristOutput(voice, subjunctiveForm as JSX.Element[])}
          </p>
        )}
        {optative && (
          <p>
            <h4>{mood[2]}</h4>
            {aoristOutput(voice, optativeForm as JSX.Element[])}
          </p>
        )}
        {imperative && (
          <p>
            <h4>{mood[3]}</h4>
            {aoristOutput(voice, imperativeForm as JSX.Element[])}
          </p>
        )}
      </div>
    </div>
  );
};
export default aoristDeclension;
