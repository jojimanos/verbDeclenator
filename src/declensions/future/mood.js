import determineVoice from "../determineVoice"
import futureOutput from "./output"
import formTheFuture from "./formTheFuture"
import formTheFutureOptative from "./formTheFutureOptative"
import styles from "../../../styles/Home.module.css"

const futureDeclension = (verb, active, middle, passive, indicative, optative) => {

    let tense = "Future"

    let mood = ["Indicative", "Subjunctive", "Optative", "Imperative"]

    let voice = determineVoice(active, passive)

    console.log(voice)

    let indicativeForm = formTheFuture(verb)

    let optativeForm = formTheFutureOptative(verb)

    return (<div className={styles.whole_tense}><h3>{tense}</h3><div className={styles.index}>{indicative && (<p><h4>{mood[0]}</h4>{futureOutput(voice, indicativeForm)}</p>)}{optative && (<p><h4>{mood[2]}</h4>{futureOutput(voice, optativeForm)}</p>)}</div></div>)

}
export default futureDeclension
