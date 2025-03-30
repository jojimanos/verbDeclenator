import { JSX } from "react"

function presentOutput(voice: string, [presentActive, presentMiddle]: JSX.Element[]) {
                if (voice == "active&middle") {
                    return (<div ><p >{[presentActive]}</p><p >{[presentMiddle]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div ><p >{[presentActive]}</p></div>)
                }
                else if (voice == "middle") {
                    return (<div ><p >{[presentMiddle]}</p></div>)
                }
            }
            export default presentOutput