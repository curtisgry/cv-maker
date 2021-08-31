import ExperienceItem from "./ExperienceItem"

function CvDisplay(props){
    const {educationState, generalState, experienceState} = props.data

    const eduList = educationState.educationList.map((item, index)=> <li key={index} id={index}>{item.schoolName} {item.topic} {item.date}</li>)
    const expList = experienceState.taskList.map((task, index) => (
        <ExperienceItem 
        key={index} 
        companyName={task.companyName}
        positionTitle={task.positionTitle}
        tasks={task.tasks}
        />
    ))

    const borders = {
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray'
    }
    return (
        <>
            <div className='general-container'>
                <h2>{generalState.firstName} {generalState.lastName}</h2>
                <span>{generalState.email}</span>
                <br/>
                <span><code>{generalState.phone}</code></span>
            </div>
            <div className="education-list" style={eduList.length ? borders : {display: 'block'}}>
                <h2 className="section-title">{eduList.length ? 'Education' : ''}</h2>
                <ul>
                    {eduList}
                </ul>
                
            </div>
            <div className="experience-list">
                <h2 className="section-title">{expList.length ? 'Work Experience' : ''}</h2>
                {expList}
            </div>
            <div></div>
        </>   
    )
}

export default CvDisplay