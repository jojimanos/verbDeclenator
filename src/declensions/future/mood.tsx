import determineVoice from "../determineVoice";
import futureOutput from "./output";
import formTheFuture from "./formTheFuture";
import formTheFutureOptative from "./formTheFutureOptative";
import { JSX } from "react";

interface FutureDeclensionProps {
  verb: string;
  active: boolean;
  middle: boolean;
  passive: boolean;
  indicative: boolean;
  optative: boolean;
  mood: string[]
}

const FutureDeclension = ({
  verb,
  active,
  middle,
  passive,
  indicative,
  optative,
  mood
}: FutureDeclensionProps) => {

  let voice = determineVoice({ active, middle, passive });

  console.log(voice);

  let indicativeForm = formTheFuture(verb);

  let optativeForm = formTheFutureOptative(verb);

  return (
    <>
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
    </>
  );
};
export default FutureDeclension;
