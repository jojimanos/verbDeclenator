import { JSX } from "react"

function futureOutput(voice: string, [futureActive, futurePassive]: JSX.Element[]) {
                if (voice == "both") {
                    return (<div ><p >{[futureActive]}</p><p >{[futurePassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div ><p >{[futureActive]}</p></div>)
                }
                else {
                    return (<div ><p >{[futurePassive]}</p></div>)
                }
            }
            export default futureOutput