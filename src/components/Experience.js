
function Experience(props) {
    const {inputs, handleChange, handleTaskSubmit} = props.data

    const styles = {
      display: 'block', 
      width: '100%',
      marginBottom: 10
  }

    return (
        <div className="form-container">
            <form onSubmit={handleTaskSubmit}>
                <h2>Work</h2>
                <input 
                style={styles}
                type="text" 
                data-for="experienceState"
                name="companyName"
                placeholder="Company"
                value={inputs.experienceState.companyName}
                onChange={handleChange}
                />
                <input 
                style={styles}
                type="text" 
                data-for="experienceState"
                name="positionTitle"
                placeholder="Position"
                value={inputs.experienceState.positionTitle}
                onChange={handleChange}
                />
                <textarea 
                maxLength="440"
                style={styles}
                type="text" 
                data-for="experienceState"
                name="tasks"
                placeholder="Tasks"
                value={inputs.experienceState.tasks}
                onChange={handleChange}
                />
                <button style={styles} >Add</button>
                </form>

        </div>
    )
}

export default Experience