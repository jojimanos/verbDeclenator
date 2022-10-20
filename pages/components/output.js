import imperfectExport from "./imperfect/export";
import errorMessage from "./present/errorMessage";
import presentDeclension from "./present/mood";
import aoristDeclension from "./aorist/mood";
import futureDeclension from "./future/mood";

function output(verb, active, middle, passive, indicative, subjunctive, optative, imperative, present, imperfect, future, aorist) {
    
    return (<div >{present && (<p>{presentDeclension(verb, active, middle, passive, indicative, subjunctive, optative, imperative)}</p>)}
    {imperfect && (<p>{imperfectExport(verb, active, middle, passive)}</p>)}{future && <p>{futureDeclension(verb, active, middle, passive, indicative, optative)}</p>}{aorist && (<p>{aoristDeclension(verb, active, middle, passive, indicative, subjunctive, optative, imperative)}</p>)}</div>)

    //let error = "No tense selected"
    //
    //if (present == true) {
    //    return presentDeclension(verb, active, passive, indicative, subjunctive, optative, imperative)
    //}
    //else if (imperfect == true) {
    //    return imperfectExport(verb, active, passive)
    //}
    //else {
    //    return errorMessage(error)
    //}
}

export default output