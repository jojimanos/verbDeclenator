import React, { act } from "react";
import errorMessage from "./present/errorMessage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PresentDeclension from "./present/mood";
import ImperfectExport from "./imperfect/export";
import FutureDeclension from "./future/mood";
import AoristDeclension from "./aorist/mood";
import CapitalizeFirstLetter from "@/utils/CapitaliseFirstLetter";

function output({
  verb,
  active,
  middle,
  passive,
  indicative,
  subjunctive,
  optative,
  imperative,
  present,
  imperfect,
  future,
  aorist,
}: {
  verb: string;
  active: boolean;
  middle: boolean;
  passive: boolean;
  indicative: boolean;
  subjunctive: boolean;
  optative: boolean;
  imperative: boolean;
  present: boolean;
  imperfect: boolean;
  future: boolean;
  aorist: boolean;
}) {
  let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"];

  const itemsToRender = [
    {
      verb: present,
      title: "present",
      item: (
        <PresentDeclension
          verb={verb}
          active={active}
          passive={passive}
          middle={middle}
          indicative={indicative}
          subjunctive={subjunctive}
          optative={optative}
          imperative={imperative}
          mood={mood}
        />
      ),
    },
    {
      verb: imperfect,
      title: "imperfect",
      item: (
        <ImperfectExport
          verb={verb}
          active={active}
          passive={passive}
          middle={middle}
          indicative={indicative}
          mood={mood}
        />
      ),
    },
    {
      verb: future,
      title: "future",
      item: (
        <FutureDeclension
          verb={verb}
          active={active}
          passive={passive}
          middle={middle}
          indicative={indicative}
          optative={optative}
          mood={mood}
        />
      ),
    },
    {
      verb: aorist,
      title: "aorist",
      item: (
        <AoristDeclension
          verb={verb}
          active={active}
          passive={passive}
          middle={middle}
          indicative={indicative}
          subjunctive={subjunctive}
          optative={optative}
          imperative={imperative}
          mood={mood}
        />
      ),
    },
  ];

  return (
    <div>
      {itemsToRender.map(({ verb, title, item }, index) => {
        if (verb) {
          return (
            <Card
              className="flex flex-col justify-center items-center mt-8"
              key={index}
            >
              <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle>{CapitalizeFirstLetter(title)}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-wrap">
                {item}
              </CardContent>
            </Card>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default output;
