exports.removePreposition = (req, res) => {

    const{ verb } = req.body
    let type = ""

    let prepositions = /[^ἀνα]/
    let compound = false

    verb.match(prepositions) ? type = verb.replace("ἀνα", "") : type

    console.log(type)

    exports.type = type
    //exports.compound = compound
}