import styles from "../../../styles/Home.module.css"

function imperfectOutput(voice, [imperfectActive, imperfectPassive]) {
                if (voice == "both") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[imperfectActive]}</p><p className={styles.index_item}>{[imperfectPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[imperfectActive]}</p></div>)
                }
                else {
                    return (<div className={styles.index}><p className={styles.index_item}>{[imperfectPassive]}</p></div>)
                }
            }
            export default imperfectOutput