function output(voice, [presentActive, presentPassive]) {
                if (voice == "both") {
                    return (<div><p>{[presentActive]}</p><p>{[presentPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div><p>{[presentActive]}</p></div>)
                }
                else {
                    return (<div><p>{[presentPassive]}</p></div>)
                }
            }
            export default output