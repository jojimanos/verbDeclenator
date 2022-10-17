import determineVoice from "../determineVoice"
import futureOutput from "./output"
import formTheFuture from "./formTheFuture"
import formTheFutureOptative from "./formTheFutureOptative"

const futureDeclension = (verb, active, passive, indicative, optative) => {

    let voice = determineVoice(active, passive)

    console.log(voice)

    let indicativeForm = formTheFuture(verb)

    let optativeForm = formTheFutureOptative(verb)

    return (<div>{indicative && (<p>{futureOutput(voice, indicativeForm)}</p>)}{optative && (<p>{futureOutput(voice, optativeForm)}</p>)}</div>)

}
export default futureDeclension
