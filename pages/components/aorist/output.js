import styles from "../../../styles/Home.module.css"

function aoristOutput(voice, [futureActive, futurePassive]) {
                if (voice == "both") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[futureActive]}</p><p className={styles.index_item}>{[futurePassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[futureActive]}</p></div>)
                }
                else {
                    return (<div className={styles.index}><p className={styles.index_item}>{[futurePassive]}</p></div>)
                }
            }
            export default aoristOutput