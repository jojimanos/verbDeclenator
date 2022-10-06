import styles from "../../../styles/Home.module.css"

function output(voice, [presentActive, presentPassive]) {
                if (voice == "both") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentActive]}</p><p className={styles.index_item}>{[presentPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div><p>{[presentActive]}</p></div>)
                }
                else {
                    return (<div><p>{[presentPassive]}</p></div>)
                }
            }
            export default output