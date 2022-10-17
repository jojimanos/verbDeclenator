import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import output from './components/output'
import Navbar from './components/settings/navbar'

export default function Home() {

  const [verb, setVerb] = useState("")
  const [presentDeclension, setPresentDeclension] = useState("")
  const [present, setPresent] = useState(false)
  const [imperfect, setImperfect] = useState(false)
  const [future, setFuture] = useState(false)
  const [aorist, setAorist] = useState(false)
  const [perfect, setPerfect] = useState(false)
  const [pluperfect, setPluperfect] = useState(false)
  const [active, setActive] = useState(false)
  const [passive, setPassive] = useState(false)
  const [indicative, setIndicative] = useState(false)
  const [subjunctive, setSubjunctive] = useState(false)
  const [optative, setOptative] = useState(false)
  const [imperative, setImperative] = useState(false)
  const handleActive = () => { setActive(!active), console.log(active) }
  const handlePassive = () => { setPassive(!passive), console.log(passive) }
  const handlePresent = () => {setPresent(!present), console.log(present)}
  const handleImperfect = () => {setImperfect(!imperfect), console.log(imperfect)}
  const handleFuture = () => {setFuture(!future), console.log(future)}
  const handleAorist = () => {setAorist(!aorist), console.log(aorist)}
  const handlePerfect = () => {setPerfect(!perfect), console.log(perfect)}
  const handlePluperfect = () => {setPluperfect(!pluperfect), console.log(pluperfect)}
  const handleIndicative = () => { setIndicative(!indicative), console.log(indicative) }
  const handleSubjunctive = () => { setSubjunctive(!subjunctive), console.log(subjunctive) }
  const handleOptative = () => { setOptative(!optative), console.log(optative) }
  const handleImperative = () => { setImperative(!imperative), console.log(imperative) }

  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Smart Verb Declenator
        </h1>
        <fieldset>
          <input required id='verb' type="text" onChange={(e) => setVerb(e.target.value)} value={verb} />
          <fieldset>
            <h3>Choose Tense</h3>
          <div>
            <input required id='present' type="checkbox" name="declension" onClick={handlePresent} />
            <label for='present'>Present</label>
          </div>
          <div>
            <input required id='imperfect' type="checkbox" name="declension" onClick={handleImperfect} />
            <label for='imperfect'>Imperfect</label>
          </div>
          <div>
            <input required id='future' type="checkbox" name="declension" onClick={handleFuture} />
            <label for='future'>Future</label>
          </div>
          <div>
            <input required id='aorist' type="checkbox" name="declension" onClick={handleAorist} />
            <label for='Aorist'>Aorist</label>
          </div>
          <div>
            <input required id='perfect' type="checkbox" name="declension" onClick={handlePerfect} />
            <label for='perfect'>Perfect</label>
          </div>
          <div>
            <input required id='pluperfect' type="checkbox" name="declension" onClick={handlePluperfect} />
            <label for='pluperfect'>Pluperfect</label>
          </div>
          </fieldset>
          <fieldset>
            <h3>Voice</h3>
          <div>
            <input required id='active' type="checkbox" name="declension" onClick={handleActive} />
            <label for='active'>Active</label>
          </div>
          <div>
            <input required id='passive' type="checkbox" name="declension" onClick={handlePassive} />
            <label for='passive'>Passive</label>
          </div>
          </fieldset>
          <fieldset>
            <h3>Mood</h3>
          <div>
            <input required id='indicative' type="checkbox" name="declension" onClick={handleIndicative} />
            <label for='indicative'>Indicative</label>
          </div>
          <div>
            <input required id='subjunctive' type="checkbox" name="declension" onClick={handleSubjunctive} />
            <label for='subjunctive'>Subjunctive</label>
          </div>
          <div>
            <input required id='optative' type="checkbox" name="declension" onClick={handleOptative} />
            <label for='optative'>Optative</label>
          </div>
          <div>
            <input required id='imperative' type="checkbox" name="declension" onClick={handleImperative} />
            <label for='optative'>Imperative</label>
          </div>
          </fieldset>
        </fieldset>
        <button for="verb" onClick={() => setPresentDeclension(output(verb, active, passive, indicative, subjunctive, optative, imperative, present, imperfect, future, aorist))}>Submit</button>
        <div>{presentDeclension}</div>
      </main>
    </div>
  )
}
