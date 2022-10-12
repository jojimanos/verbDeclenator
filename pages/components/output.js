import imperfectExport from "./imperfect/export";
import errorMessage from "./present/errorMessage";
import presentDeclension from "./present/mood";

function output(verb, active, passive, indicative, subjunctive, optative, imperative, present, imperfect) {
    
    return (<div >{present && (<p>{presentDeclension(verb, active, passive, indicative, subjunctive, optative, imperative)}</p>)}
    {imperfect && (<p>{imperfectExport(verb, active, passive)}</p>)}</div>)

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