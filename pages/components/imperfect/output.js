import styles from "../../../styles/Home.module.css"

function imperfectOutput(voice, [imperfectActive, imperfectPassive]) {
                if (voice == "both") {
                    return (<div className={styles.whole_tense}><h3>Imperfect</h3><div className={styles.whole_tense}><h4>Indicative</h4><div className={styles.index}><p className={styles.index_item}>{[imperfectActive]}</p><p className={styles.index_item}>{[imperfectPassive]}</p></div></div></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.whole_tense}><h3>Imperfect</h3><div className={styles.whole_tense}><h4>Indicative</h4><div className={styles.index}><p className={styles.index_item}>{[imperfectActive]}</p></div></div></div>)
                }
                else {
                    return (<div className={styles.whole_tense}><h3>Imperfect</h3><div className={styles.whole_tense}><h4>Indicative</h4><div className={styles.index}><p className={styles.index_item}>{[imperfectPassive]}</p></div></div></div>)
                }
            }
            export default imperfectOutput