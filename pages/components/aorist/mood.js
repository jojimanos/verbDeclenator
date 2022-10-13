import determineVoice from "../determineVoice"
import aoristOutput from "./output"
import formTheAorist from "./formTheFuture"
import errorMessage from "./errorMessage"
import formTheAoristSubjunctive from "./formTheAoristSubjunctive"
import formTheAoristOptative from "./formThePresentOptative"
import formTheAoristImperative from "./formThePresentImperative"

const futureDeclension = (verb, active, passive, indicative, subjunctive, optative, imperative) => {

    let voice = determineVoice(active, passive)

    console.log(voice)

    let indicativeForm = formTheAorist(verb)

    let subjunctiveForm = formTheAoristSubjunctive(verb)

    let optativeForm = formTheAoristOptative(verb)

    let imperativeForm = formTheAoristImperative(verb)

    return (<div>{indicative && (<p>{aoristOutput(voice, indicativeForm)}</p>)}{subjunctive && (<p>{aoristOutput(voice, subjunctiveForm)}</p>)}{optative && (<p>{aoristOutput(voice, optativeForm)}</p>)}{imperative && (<p>{aoristOutput(voice, imperativeForm)}</p>)}</div>)

}
export default futureDeclension
