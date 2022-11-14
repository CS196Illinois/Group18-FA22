import { React, useRef, useState } from "react";
import styled from 'styled-components';
import './work.css'


const Work = () => {
  
  const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593",
    },
  };

  const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;

  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283593;
  }`


  const GreenButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;

  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #2e7d32;
  }`


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
                      <GreenButton onClick={function() {
                          start()
                      }} type='button'>
                          Start
                      </GreenButton>
                  </div>
              )
          })}
          <form>
              <input ref={task} placeholder='Task Name'></input>
              <input ref={course} placeholder='Course Name + #'></input>
              <input ref={time} placeholder='ETA'></input>
              <Button onClick={add} type='button'>
                  Add
              </Button>
          </form>
      </div>
  )
}
export default Work;    