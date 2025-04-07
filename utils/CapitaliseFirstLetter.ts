export default function CapitalizeFirstLetter(word: string) {
const charArray = word.split('')

const capitalizedWord = charArray.map((c, i) => (i === 0 ? c.toUpperCase() : c)).join("")

return capitalizedWord
}