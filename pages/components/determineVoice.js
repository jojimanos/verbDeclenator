import errorMessage from "./present/errorMessage"

function determineVoice(active, passive) {

    let error = "No voice checked"
    let voice = ""
    if (active && passive) {
        voice = "both"
    } else if (active && !passive) {
        voice = "active"
    } else {
        voice = "passive"
    }
    console.log(voice)
    if (voice='') {
        return errorMessage(error)
    }
    else {
        return voice
    }
}

export default determineVoice