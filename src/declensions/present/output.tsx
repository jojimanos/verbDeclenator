import { JSX } from "react"
import styles from "../../../styles/Home.module.css"

function presentOutput(voice: string, [presentActive, presentMiddle]: JSX.Element[]) {
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