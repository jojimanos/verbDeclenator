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

    let tense = "Present"

    let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"]

    let indicativeForm = formThePresent(verb)

    let subjunctiveForm = formThePresentSubjunctive(verb)

    let optativeForm = formThePresentOptative(verb)

    let imperativeForm = formThePresentImperative(verb)

    return (<div><h3>{tense}</h3>{indicative && (<div><h4>{mood[0]}</h4><p>{presentOutput(voice, indicativeForm)}</p></div>)}{subjunctive && (<div><h4>{mood[1]}</h4><p>{presentOutput(voice, subjunctiveForm)}</p></div>)}{optative && (<div><h4>{mood[2]}</h4><p>{presentOutput(voice, optativeForm)}</p></div>)}{imperative && (<div><h4>{mood[3]}</h4><p>{presentOutput(voice, imperativeForm)}</p></div>)}</div>)

}
export default presentDeclension
