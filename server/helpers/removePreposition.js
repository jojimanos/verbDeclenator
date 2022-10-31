exports.removePreposition = (req, res) => {

    const { verb } = req.body
    let type = ""

    let prepositionsTwo = [/^ἐκ/, /^ἐν/, /^ἐξ/]
    let prepositionsThree = [/^ἀνα/, /^ἀπο/, /^δια/, /^εἰσ/,
        /^ἐπι/, /^προ/, /^συν/, /^υπο/]
    let prepositionsFour = [/^ἀντι/, /^ἀμφι/, /^κατα/,
        /^μετα/, /^παρα/, /^περι/, /^προσ/, /^υπερ/]
    let compound = false

    prepositionsTwo.map((preposition) => { verb.match(preposition) ? type = verb.slice(2) : type })
    prepositionsThree.map((preposition) => { verb.match(preposition) ? type = verb.slice(3) : type })
    prepositionsFour.map((preposition) => { verb.match(preposition) ? type = verb.slice(4) : type })

    console.log(type)

    exports.type = type
    //exports.compound = compound
}