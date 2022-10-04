import determineVoice from "../determineVoice"
import output from "./output"
import formThePresent from "./formThePresent"
import errorMessage from "./errorMessage"
import formThePresentSubjunctive from "./formThePresentSubjunctive"
import formThePresentOptative from "./formThePresentOptative"

const presentDeclension = (verb, active, passive, indicative, subjunctive, optative) => {

    let error = "No mood checked"

    if (indicative) {

        let voice = determineVoice(active, passive)

        let form = formThePresent(verb, indicative)

        return (output(voice, form))
    } 
    else if (subjunctive) {

        let voice = determineVoice(active, passive)

        let form = formThePresentSubjunctive(verb, subjunctive)

        return (output(voice, form))

    }
    else if (optative) {

        let voice = determineVoice(active, passive)

        let form = formThePresentOptative(verb, optative)

        return (output(voice, form))

    }
    else {
        return errorMessage(error)
    }
}
export default presentDeclension
