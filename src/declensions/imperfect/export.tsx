import determineVoice from "../determineVoice"
import imperfectOutput from "./output"
import formTheImperfect from "./formTheImperfect"
import { JSX } from "react"

const imperfectExport = (verb: string, active: boolean, middle: boolean, passive: boolean) => {

let voice = determineVoice({active, middle, passive})

let form = formTheImperfect(verb)

return (imperfectOutput(voice, form as JSX.Element[]))
}

export default imperfectExport