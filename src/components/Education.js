
import React from 'react'

function Education({schoolName, topic, date, handleChange, handleEduSubmit}) {


    const styles = {
        display: 'block', 
        width: '100%',
        marginBottom: 10
    }

    return (
        <div className="form-container">
            <form onSubmit={handleEduSubmit}>
                <h2>School</h2>
                <input 
                style={styles}
                type="text" 
                name="schoolName"
                data-for="educationState"
                placeholder="School Name"
                value={schoolName}
                onChange={handleChange}
                />
                <input 
                style={styles}
                type="text" 
                name="topic"
                data-for="educationState"
                placeholder="Topic of study"
                value={topic}
                onChange={handleChange}
                />
                <input 
                style={styles}
                type="date" 
                name="date"
                data-for="educationState"
                placeholder="Date"
                value={date}
                onChange={handleChange}
                />
                <br />
                <button style={styles}>Add</button>
            </form>
        </div>
    )
}

export default Education