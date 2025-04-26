import React from "react";
import imperfectExport from "./imperfect/export";
import errorMessage from "./present/errorMessage";
import presentDeclension from "./present/mood";
import aoristDeclension from "./aorist/mood";
import futureDeclension from "./future/mood";
import { Card } from "@/components/ui/card";
import PresentDeclension from "./present/mood";

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
  return (
    <div>
      {present && (
        <p>
          <PresentDeclension
            verb={verb}
            active={active}
            passive={passive}
            middle={middle}
            indicative={indicative}
            subjunctive={subjunctive}
            optative={optative}
            imperative={imperative}
          />
        </p>
      )}
      {/* {imperfect && <p>{imperfectExport(verb, active, middle, passive)}</p>}
      {future && (
        <p>
          {futureDeclension(
            verb,
            active,
            middle,
            passive,
            indicative,
            optative
          )}
        </p>
      )}
      {aorist && (
        <p>
          {aoristDeclension(
            verb,
            active,
            middle,
            passive,
            indicative,
            subjunctive,
            optative,
            imperative
          )}
        </p>
      )} */}
    </div>
  );
}

export default output;
