
import React from 'react'

function General({firstName, lastName, email, phone, handleChange}) {

    return (
        <div className="form-container">
            <h2>General</h2>
            <input 
            type="text" 
            name="firstName"
            data-for="generalState"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="lastName"
            data-for="generalState"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
            />
            <input 
            type="email" 
            name="email"
            data-for="generalState"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            />
            <input 
            type="tel" 
            name="phone"
            data-for="generalState"
            placeholder="Phone - (123-456-7890)"
            value={phone}
            onChange={handleChange}
            />
        </div>
    )
}

export default General