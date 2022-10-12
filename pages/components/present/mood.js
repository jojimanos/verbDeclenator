import determineVoice from "../determineVoice"
import presentOutput from "./output"
import formThePresent from "./formThePresent"
import errorMessage from "./errorMessage"
import formThePresentSubjunctive from "./formThePresentSubjunctive"
import formThePresentOptative from "./formThePresentOptative"
import formThePresentImperative from "./formThePresentImperative"

const presentDeclension = (verb, active, passive, indicative, subjunctive, optative, imperative) => {

    let voice = determineVoice(active, passive)

    console.log(voice)

    let indicativeForm = formThePresent(verb)

    let subjunctiveForm = formThePresentSubjunctive(verb)

    let optativeForm = formThePresentOptative(verb)

    let imperativeForm = formThePresentImperative(verb)

    return (<div>{indicative && (<p>{presentOutput(voice, indicativeForm)}</p>)}{subjunctive && (<p>{presentOutput(voice, subjunctiveForm)}</p>)}{optative && (<p>{presentOutput(voice, optativeForm)}</p>)}{imperative && (<p>{presentOutput(voice, imperativeForm)}</p>)}</div>)

}
export default presentDeclension
