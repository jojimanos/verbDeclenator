import determineVoice from "../determineVoice";
import futureOutput from "./output";
import formTheFuture from "./formTheFuture";
import formTheFutureOptative from "./formTheFutureOptative";
import styles from "../../../styles/Home.module.css";
import { JSX } from "react";

const futureDeclension = (
  verb: string,
  active: boolean,
  middle: boolean,
  passive: boolean,
  indicative: boolean,
  optative: boolean
) => {
  let tense = "Future";

  let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"];

  let voice = determineVoice({active, middle, passive});

  console.log(voice);

  let indicativeForm = formTheFuture(verb);

  let optativeForm = formTheFutureOptative(verb);

  return (
    <div className={styles.whole_tense}>
      <h3>{tense}</h3>
      <div className={styles.index}>
        {indicative && (
          <p>
            <h4>{mood[0]}</h4>
            {futureOutput(voice, indicativeForm as JSX.Element[])}
          </p>
        )}
        {optative && (
          <p>
            <h4>{mood[2]}</h4>
            {futureOutput(voice, optativeForm as JSX.Element[])}
          </p>
        )}
      </div>
    </div>
  );
};
export default futureDeclension;
