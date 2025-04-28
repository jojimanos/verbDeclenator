import { JSX } from "react";
import determineVoice from "../determineVoice";
import presentOutput from "./output";
import formThePresent from "./formThePresent";
import formThePresentSubjunctive from "./formThePresentSubjunctive";
import formThePresentOptative from "./formThePresentOptative";
import formThePresentImperative from "./formThePresentImperative";
import TenseElement from "@/src/components/tenseElement";

interface PresentDeclensionProps {
  verb: string;
  active: boolean;
  passive: boolean;
  middle: boolean;
  indicative: boolean;
  subjunctive: boolean;
  optative: boolean;
  imperative: boolean;
  mood: string[];
}

const PresentDeclension = ({
  verb,
  active,
  passive,
  middle,
  indicative,
  subjunctive,
  optative,
  imperative,
  mood,
}: PresentDeclensionProps) => {
  const voice = determineVoice({ active, middle, passive });

  const forms = [
    { show: indicative, mood: mood[0], form: formThePresent(verb) },
    { show: subjunctive, mood: mood[1], form: formThePresentSubjunctive(verb) },
    { show: optative, mood: mood[2], form: formThePresentOptative(verb) },
    { show: imperative, mood: mood[3], form: formThePresentImperative(verb) },
  ];

  return (
    <>
      {forms.map(({ show, mood, form }, index) => (
        <TenseElement
          key={index}
          showMood={show}
          mood={mood}
          item={presentOutput(voice, form as JSX.Element[]) as JSX.Element}
        />
      ))}
    </>
  );
};

export default PresentDeclension;