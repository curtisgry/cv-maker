import React, {useState} from 'react'


function ExperienceItem({tasks, companyName, positionTitle}) {
    const initText = tasks
    const [text, setText] = useState(initText)

    function updateText(event){
        const {value} = event.target
        setText(value)
    }
    console.log(text.length)
    return (
        
        <div className="experience-item">
            <h2 >{companyName}</h2>
            <h4>{positionTitle}</h4>
            <textarea
            maxLength="440"
            className="edit-text"
            name="text"
            value={text}
            onChange={updateText}
            />
            {/* <p>{text}</p> */}
        </div>
    )

}

export default ExperienceItem