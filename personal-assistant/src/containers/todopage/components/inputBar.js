import React, {useState} from 'react'

const InputBar = (props) => {
    const [inn, setIn] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit(inn)
        setIn('')
    }
    
    const handleChange = e => {
        e.preventDefault()
        setIn(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type = 'text' placeholder={props.txt} value={inn} onChange={handleChange}/>
            <button type='submit' disabled={!inn.trim()}>Submit</button>
        </form>
    )
}

export default InputBar