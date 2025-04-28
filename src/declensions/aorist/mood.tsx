import determineVoice from "../determineVoice";
import aoristOutput from "./output";
import formTheAorist from "./formTheAorist";
import formTheAoristSubjunctive from "./formTheAoristSubjunctive";
import formTheAoristOptative from "./formTheAoristOptative";
import formTheAoristImperative from "./formTheAoristImperative";
import { JSX } from "react";

interface AoristDeclensionProps {
  verb: string;
  active: boolean;
  middle: boolean;
  passive: boolean;
  indicative: boolean;
  subjunctive: boolean;
  optative: boolean;
  imperative: boolean;
  mood: string[];
}

const AoristDeclension = ({
  verb,
  active,
  middle,
  passive,
  indicative,
  subjunctive,
  optative,
  imperative,
  mood,
}: AoristDeclensionProps) => {

  let voice = determineVoice({ active, middle, passive });

  let indicativeForm = formTheAorist(verb);

  let subjunctiveForm = formTheAoristSubjunctive(verb);

  let optativeForm = formTheAoristOptative(verb);

  let imperativeForm = formTheAoristImperative(verb);

  return (
    <>
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
    </>
  );
};
export default AoristDeclension;
