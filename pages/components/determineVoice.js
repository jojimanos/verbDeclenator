function determineVoice(active, middle, passive) {
    let voice = ""
    if (active && middle && passive) {
        voice = "all"
    } else if (!active && middle && !passive) {
        voice = "middle&passive"
    } else if (active && !middle  && passive) {
        voice = "active&passive"
    } else if (active && middle && !passive) {
        voice = "active&middle"
    } else if (active && !middle && !passive) {
        voice = "active"
    } else if (!active && middle && !passive) {
        voice = "middle"
    } else if (!active && !middle && passive) {
        voice = "passive"
    } else {
        voice = "no voice checked"
    }
    console.log(voice)
    return voice
}

export default determineVoice