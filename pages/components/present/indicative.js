import determineVoice from "../determineVoice"
import output from "./output"
import formThePresent from "./formThePresent"
import errorMessage from "./errorMessage"

const presentDeclension = (verb, active, passive, indicative) => {

    let error = "No mood checked"

    if (indicative) {

        let voice = determineVoice(active, passive)

        let form = formThePresent(verb, indicative)

        return (output(voice, form))
    } else {
        return errorMessage(error)
    }
}
export default presentDeclension
