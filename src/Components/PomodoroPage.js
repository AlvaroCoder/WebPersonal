import React,{useState,useEffect} from 'react'
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar"
import RadiaSeparator from './RadialSeparator';
import "react-circular-progressbar/dist/styles.css"

export default function PomodoroPage() {
    const [timeFocus, setTimeFocus] = useState("25:00")
    const [timeBreak, setTimeBreak] = useState("5:00")
    const [textPomodoro, setTextPomodoro] = useState("Focus")
    const [counter, setCounter] = useState(1500)
    const [maxTime, setMaxTime] = useState(1500)
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isStart, setIsStart] = useState(false)
    const [intervalId, setIntervalId] = useState(0)
    const textMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const textSecond = seconds < 10 ? `0${seconds}` : `${seconds}`
    let centinela = 0
    let textPom = "Focus"
    const interValTime = ()=>{
        return setInterval(()=>{
            setCounter(c=>c-1)
            console.log(centinela);
            centinela++
            if (centinela === maxTime) {
                if (textPom === "Focus") {
                    let valTime = parseInt(timeBreak.split(":")[0])*60
                    console.log("Empezo el break");
                    centinela = 0
                    textPom="Break"
                    setTextPomodoro("Break")
                    setCounter(valTime)
                    setMaxTime(valTime)
                } else if (textPom === "Break") {
                    console.log("Acabo el Break");
                    centinela = 0
                    textPom = "Focus"
                    let valtime = parseInt(timeFocus.split(":")[0])*60
                    setTextPomodoro("Focus")
                    setCounter(valtime)
                    setMaxTime(valtime)
                }
            }
        },1000)
    }
    //cambia la hora del trabajo
    const changeTime =(evt)=>{
        evt.preventDefault()
        let valueTime = evt.target.value
        let minutes = parseInt(valueTime.split(":")[0])
        let max = minutes*60
        setMinutes(minutes)
        setTimeFocus(valueTime)
        setMaxTime(max)
        setCounter(max)
    }
    const timeToLeft = (second)=> {
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
    //cambia la hora del descanso
    const changeDurationBreak = (evt)=>{
        evt.preventDefault()
        setTimeBreak(()=>evt.target.value)
    }
    //Inicia el temporizador
    const startTimer = (evt)=>{
        evt.preventDefault()
        setIsStart(true)
        setIntervalId(interValTime())
    }
    const stopTimer = (evt)=>{
        evt.preventDefault()
        setIsStart(false)
        clearInterval(intervalId)
    }
    const resetTimer = (evt)=>{
        evt.preventDefault()
        setIsStart(false)
        clearInterval(intervalId)
        setCounter(maxTime)
        centinela = 0
    }
    useEffect(() => {
        let time = timeToLeft (counter)
        setMinutes(time.m)
        setSeconds(time.s)
       
    }, [counter])
    return(
        <div className="bg-Pomodoro">
            <div className="ctn-header-Pomodoro">
                <h1>Pomodoro</h1>
            </div>
            <div className="ctn-bg-Pomodoro">
            <CircularProgressbarWithChildren
                value={counter}
                maxValue={maxTime}
                text={`${textMinutes}:${textSecond}`}
                strokeWidth={6}
                styles={buildStyles({
                    strokeLinecap:"butt",
                    textSize:"20px",
                    pathTransition:0.5
                })}
            >
                <RadiaSeparator 
                    count={20}
                    style={{
                        background : "#fff",
                        width : "2px",
                        height : `${10}%`
                    }}
                >
                </RadiaSeparator>
            </CircularProgressbarWithChildren>
                <div className="content-Pomodoro">
                    <form >
                        <h2><label>{textPomodoro}</label></h2>
                        <section className="sec-time-Pomodoro">
                            <div className="icon-Pomodoro">
                            </div>
                            <div className="time-form-Pomodoro">
                                <select name="timeFocus" disabled={isStart} value={timeFocus} onChange={changeTime}>
                                    <option value="25:00">25:00</option>
                                    <option value="45:00">45:00</option>
                                    <option value="50:00">50:00</option>
                                </select>
                            </div>
                            <div className="icon-Pomodoro">
                            </div>
                            <div className="time-form-Pomodoro">
                                <select name="timeBreak"  disabled={isStart} value={timeBreak} onChange={changeDurationBreak}>
                                    <option value="5:00">5:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="15:00">15:00</option>
                                </select>
                            </div>
                        </section>
                        <section className="sec-btn-Pomodoro">
                            {
                                isStart ? <div>
                                    <button className="btn-Pomodoro" onClick={stopTimer}>Pause</button>
                                    <button className="btn-Pomodoro" onClick={resetTimer}>Reset</button>
                                </div>
                                :
                                <div>
                                    <button className="btn-Pomodoro" onClick={startTimer}>Start</button>
                                </div>
                            }
                        </section>
                    </form>
                </div>
                
            </div>
            <div className="ctn-btn-add-Pomodoro">
                    <button>Añadir Tarea</button>
            </div>
        </div>  
    )

}
