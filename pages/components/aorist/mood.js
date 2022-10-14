import determineVoice from "../determineVoice"
import aoristOutput from "./output"
import formTheAorist from "./formTheAorist"
import formTheAoristSubjunctive from "./formTheAoristSubjunctive"
import formTheAoristOptative from "./formTheAoristOptative"
import formTheAoristImperative from "./formTheAoristImperative"

const aoristDeclension = (verb, active, passive, indicative, subjunctive, optative, imperative) => {

    let voice = determineVoice(active, passive)

    console.log(voice)

    let indicativeForm = formTheAorist(verb)

    let subjunctiveForm = formTheAoristSubjunctive(verb)

    let optativeForm = formTheAoristOptative(verb)

    let imperativeForm = formTheAoristImperative(verb)

    return (<div>{indicative && (<p>{aoristOutput(voice, indicativeForm)}</p>)}{subjunctive && (<p>{aoristOutput(voice, subjunctiveForm)}</p>)}{optative && (<p>{aoristOutput(voice, optativeForm)}</p>)}{imperative && (<p>{aoristOutput(voice, imperativeForm)}</p>)}</div>)

}
export default aoristDeclension
