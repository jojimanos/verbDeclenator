import React from "react";
import imperfectExport from "./imperfect/export";
import errorMessage from "./present/errorMessage";
import presentDeclension from "./present/mood";
import aoristDeclension from "./aorist/mood";
import futureDeclension from "./future/mood";

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
          {presentDeclension(
            verb,
            active,
            middle,
            indicative,
            subjunctive,
            optative,
            imperative
          )}
        </p>
      )}
      {imperfect && <p>{imperfectExport(verb, active, middle, passive)}</p>}
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
      )}
    </div>
  );

}

export default output;
