import determineVoice from "../determineVoice"
import futureOutput from "./output"
import formTheFuture from "./formTheFuture"
import errorMessage from "./errorMessage"
import formTheFutureOptative from "./formThePresentOptative"
import formThePresentImperative from "./formThePresentImperative"

const futureDeclension = (verb, active, passive, indicative, subjunctive, optative, imperative) => {

    let error = "No mood checked"

    if (indicative) {

        let voice = determineVoice(active, passive)

        let form = formTheFuture(verb)

        return (futureOutput(voice, form))
    } 
    else if (optative) {

        let voice = determineVoice(active, passive)

        let form = formTheFutureOptative(verb)

        return (futureOutput(voice, form))

    }
    else {
        return errorMessage(error)
    }
}
export default futureDeclension
