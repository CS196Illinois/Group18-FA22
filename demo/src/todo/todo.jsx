import { React, useRef, useState } from 'react'

const Todo = () => {
    const task = useRef()
    const course = useRef()
    const time = useRef()
    const [tasks, setTasks] = useState([])
    function submit() {
        setTasks((oldTask) => {
            return [...oldTask, { task: task.current.value, course: course.current.value, time: time.current.value }]
        })
    }
    return (
        <div>
            <h1>Task Manager</h1>
            {tasks.map((t) => {
                return (
                    <div>
                        <p>Task: {t.task}, Course: {t.course}, Time Taken: {t.time}</p>
                    </div>
                )
            })}
            <form>
                <input ref={task} placeholder='task name'></input>
                <input ref={course} placeholder='course'></input>
                <input ref={time} placeholder='time taken'></input>
                <button onClick={submit} type='button'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Todo