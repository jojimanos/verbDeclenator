import determineVoice from "../determineVoice";
import presentOutput from "./output";
import formThePresent from "./formThePresent";
import errorMessage from "./errorMessage";
import formThePresentSubjunctive from "./formThePresentSubjunctive";
import formThePresentOptative from "./formThePresentOptative";
import formThePresentImperative from "./formThePresentImperative";
import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PresentDeclensionProps {
    verb: string,
  active: boolean,
  passive: boolean,
  middle: boolean,
  indicative: boolean,
  subjunctive: boolean,
  optative: boolean,
  imperative: boolean
}

const PresentDeclension = (
  {
    verb,
  active,
  passive,
  middle,
  indicative,
  subjunctive,
  optative,
  imperative
}: PresentDeclensionProps
) => {
  let voice = determineVoice({ active, middle, passive });

  console.log(voice);

  let tense = "Present";

  let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"];

  let indicativeForm = formThePresent(verb);

  let subjunctiveForm = formThePresentSubjunctive(verb);

  let optativeForm = formThePresentOptative(verb);

  let imperativeForm = formThePresentImperative(verb);

  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle>{tense}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-x-8">

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
      </CardContent>
    </Card>
  );
};
export default PresentDeclension;
