import {React, useRef, useState} from 'react'
import './work.css'

const Work = () => {
    const task = useRef()
    const course = useRef()
    const time = useRef()
    const [tasks, setTasks] = useState([])
    var testTimer = 10

    function add() {
        console.log(task.current.value, course.current.value, time.current.value)
        setTasks((oldTasks)=> {
            return [...oldTasks, {task:task.current.value, course:course.current.value, time:time.current.value}]
        })
    }

    function start() {
        var timeInterval = setInterval(function() {
            testTimer = testTimer - 1
            console.log(testTimer)
            if (testTimer <= 0) {
                clearInterval(timeInterval)
            }
        }, 1000)
    }
        

    return (
        <div>
            <h1> Test </h1>
            {tasks.map((t) => {
                return (
                    <div className='List'>
                        <p>Task: {t.task}, Course: {t.course}, Time: {t.time}</p>
                        <p>Test: {testTimer}</p>
                        <button onClick={function() {
                            start()
                        }} type='button'>
                            Start
                        </button>
                    </div>
                )
            })}
            <form>
                <input ref={task} placeholder='Task Name'></input>
                <input ref={course} placeholder='Course Name + #'></input>
                <input ref={time} placeholder='ETA'></input>
                <button onClick={add} type='button'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default Work 