import determineVoice from "../determineVoice"
import imperfectOutput from "./output"
import formTheImperfect from "./formTheImperfect"

const imperfectExport = (verb, active, middle, passive) => {

let voice = determineVoice(active, passive)

let form = formTheImperfect(verb)

return (imperfectOutput(voice, form))
}

export default imperfectExport