import React from 'react'

const SearchBar = (props) => {
    const handleSearch = e => {
        e.preventDefault()
        props.onChange(e.target.value)
    }
    return (
        <input placeholder={props.txt} value={props.value} onChange={handleSearch}></input>
    )
}

export default SearchBar