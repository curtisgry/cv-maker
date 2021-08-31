import React, {useState} from 'react'
import './App.css';

import General from './components/General'
import Education from './components/Education';
import Experience from './components/Experience';
import CvDisplay from './components/CvDisplay'



function App() {
  

  const [inputs, setInputs] = useState({
        educationState: {
          schoolName: '',
          topic: '',
          date: '',
          educationList: []
        },
        experienceState: {
          companyName: '',
          positionTitle: '',
          tasks: '',
          taskList: []
        },
        generalState: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
  })

  console.log(inputs)

  function handleChange(event){
    console.log(event.target.value)
    const {name, value, dataset} = event.target
    const forData = dataset.for
          setInputs((values)=>({
          ...values,
          [forData]: {
            ...values[forData],
            [name]: value
          }
      }))
}


  function handleEduSubmit(event){
    event.preventDefault()

    setInputs(values => ({
        ...values,
        educationState: {
          ...values.educationState,
          educationList: [
              ...values.educationState.educationList,
              {
                schoolName: values.educationState.schoolName,
                topic: values.educationState.topic,
                date: values.educationState.date
              }

          ]
      }
    }))
  }

  function handleTaskSubmit(event){
    event.preventDefault()
    setInputs(values => ({
      ...values,
      experienceState: {
        ...values.experienceState,
        taskList: [
            ...values.experienceState.taskList,
            {
              companyName: values.experienceState.companyName,
              positionTitle: values.experienceState.positionTitle,
              tasks: values.experienceState.tasks
            }

        ]
    }
  }))
  }

  return (
    <div className="app">
 
      <header className="app-header">
        <h1>CV Maker</h1>
      </header>
      <main className="container">
      <section className='side-bar'>
        <General data={inputs.generalState} handleChange={handleChange}/>
        <Education data={inputs.educationState} handleChange={handleChange} handleEduSubmit={handleEduSubmit}/>
        <Experience data={{inputs, setInputs, handleChange ,handleTaskSubmit}}/>
      </section>
      <section className="cv-display">
        <CvDisplay data={inputs}/>

      </section>
      </main>
    </div>
  );
}

export default App;
