import styles from "../../../styles/Home.module.css"

function presentOutput(voice, [presentActive, presentMiddle]) {
                if (voice == "active&middle") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentActive]}</p><p className={styles.index_item}>{[presentMiddle]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentActive]}</p></div>)
                }
                else if (voice == "middle") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentMiddle]}</p></div>)
                }
            }
            export default presentOutput