import { useState, useEffect, useRef } from 'react'

function Navbar() {

    const [active, setActive] = useState(false)
    const onClick = () => { setActive(!active) }
    const dropDownRef = useRef(null)

    useEffect(() => {
        const pageClickEvent = (e) => {
            console.log(e)
            if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
                setActive(!active)
            }
        }
        if (active) {
            window.addEventListener('click', pageClickEvent)
        }

        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [active])

    return (
        <div ref={dropDownRef}>
            <button onClick={onClick}>Language</button>
            <nav>
                {active && (<div><p>Greek</p><p>English</p></div>)}
            </nav>
            <nav>
                <button onClick={onClick}>Theme</button>
                {active && (<div><p>Light</p><p>Dark</p></div>)}
            </nav>
        </div>
    )
}

export default Navbar