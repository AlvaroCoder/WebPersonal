import React,{useState,useEffect} from 'react'

export default function Testing() {
    const [isStart, setIsStart] = useState(false)
    const [counter, setCounter] = useState(1500)
    const [minutes, setMinutes] = useState(25)
    const [intervalId, setintervalId] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const textMinutes = minutes < 10 ? `0${minutes}`:`${minutes}` 
    const textSeconds = seconds<10 ? `0${seconds}` : `${seconds}`
    const interValTime = ()=>{
        return setInterval(()=>{
            setCounter(c=>c-1)
        },1000)
    }
    const startTimer=(evt)=>{
        evt.preventDefault()
        setIsStart(true)
        setintervalId(interValTime())
        console.log(isStart);
    }
    const stopTimer = (evt)=>{
        evt.preventDefault()
        setIsStart(false)
        clearInterval(intervalId)
    }
    const resetTimer=(evt)=>{
        evt.preventDefault()
        setIsStart(false)
        clearInterval(intervalId)
        setCounter(1500)
    }
    useEffect(() => {
        let time = timeToLeft(counter)
        setMinutes(time.m)
        setSeconds(time.s)
    }, [counter])
    const timeToLeft = (second)=>{
        let hours = Math.floor(second/(60*60))
        let divisor_minutes = second%(60*60)
        let minutes = Math.floor(divisor_minutes/60)
        let divisor_seconds = divisor_minutes % 60
        let seconds = Math.ceil(divisor_seconds)
        return {
            "s":seconds,
            "m":minutes,
            "h":hours
        }
    }
    
    return (
        <div>
            <h1>Bienvenido a la pagina de pruebas</h1>
            <h2>Timer </h2>
            <p>{textMinutes}m : {textSeconds}s </p>
            {isStart ?<div>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
                </div>:<div>
                <button onClick={startTimer}>Start</button>
                </div> }
            
        </div>
    )
}
