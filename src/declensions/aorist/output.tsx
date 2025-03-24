import { JSX } from "react"
import styles from "../../../styles/Home.module.css"

function aoristOutput(voice: string, [aoristActive, aoristPassive]: JSX.Element[]) {
                if (voice == "both") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[aoristActive]}</p><p className={styles.index_item}>{[aoristPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[aoristActive]}</p></div>)
                }
                else {
                    return (<div className={styles.index}><p className={styles.index_item}>{[aoristPassive]}</p></div>)
                }
            }
            export default aoristOutput