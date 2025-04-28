import determineVoice from "../determineVoice";
import imperfectOutput from "./output";
import formTheImperfect from "./formTheImperfect";
import { JSX } from "react";

interface ImperfectExport {
  verb: string;
  indicative: boolean;
  active: boolean;
  middle: boolean;
  passive: boolean;
  mood: string[];
}

const ImperfectExport = ({
  verb,
  indicative,
  active,
  middle,
  passive,
  mood,
}: ImperfectExport) => {
  let voice = determineVoice({ active, middle, passive });

  let form = formTheImperfect(verb);

  return (
    <>
      {indicative && (
        <p>
          <h4>{mood[0]}</h4>
          {imperfectOutput(voice, form as JSX.Element[])}
        </p>
      )}
    </>
  );
};

export default ImperfectExport;
