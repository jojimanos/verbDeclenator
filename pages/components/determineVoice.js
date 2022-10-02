function determineVoice(active, passive) {
    let voice = ""
    if (active && passive) {
        voice = "both"
    } else if (active && !passive) {
        voice = "active"
    } else {
        voice = "passive"
    }
    console.log(voice)
    return voice
}

export default determineVoice