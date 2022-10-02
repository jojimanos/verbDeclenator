import determineVoice from "../determineVoice"
import output from "./output"
import formThePresent from "./formThePresent"

const presentDeclension = (verb, active, passive, indicative) => {
    
    let voice = determineVoice(active, passive)

    let form = formThePresent(verb)
        
        return (output(voice, formThePresent(verb)))
}
export default presentDeclension
