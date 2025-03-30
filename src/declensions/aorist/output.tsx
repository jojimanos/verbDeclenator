import { JSX } from "react"

function aoristOutput(voice: string, [aoristActive, aoristPassive]: JSX.Element[]) {
                if (voice == "both") {
                    return (<div ><p >{[aoristActive]}</p><p >{[aoristPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div ><p >{[aoristActive]}</p></div>)
                }
                else {
                    return (<div ><p >{[aoristPassive]}</p></div>)
                }
            }
            export default aoristOutput