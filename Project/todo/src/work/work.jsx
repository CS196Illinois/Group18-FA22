import {React, useRef, useState} from 'react'

const Work = () => {
    const task = useRef()
    const course = useRef()
    const time = useRef()
    const [tasks, setTasks] = useState([])

    function add() {
        console.log(task.current.value, course.current.value, time.current.value)
        setTasks((oldTasks)=> {
            return [...oldTasks, {task:task.current.value, course:course.current.value, time:time.current.value}]
        })
    }
    function start(tt) {
        console.log('Start counting down time')
        
    }

    return (
        <div>
            <h1> Test </h1>
            {tasks.map((t) => {
                return (
                    <div>
                        <p>Task: {t.task}, Course: {t.course}, Time: {t.time}</p>
                        <button onClick={start(t.time)} type='button'>
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