import { JSX } from "react"

function imperfectOutput(voice: string, [imperfectActive, imperfectPassive]: JSX.Element[]) {
                if (voice == "both") {
                    return (<div ><h3>Imperfect</h3><div ><h4>Indicative</h4><div ><p >{[imperfectActive]}</p><p >{[imperfectPassive]}</p></div></div></div>)
                }
                else if (voice == "active") {
                    return (<div ><h3>Imperfect</h3><div ><h4>Indicative</h4><div ><p >{[imperfectActive]}</p></div></div></div>)
                }
                else {
                    return (<div ><h3>Imperfect</h3><div ><h4>Indicative</h4><div ><p >{[imperfectPassive]}</p></div></div></div>)
                }
            }
            export default imperfectOutput