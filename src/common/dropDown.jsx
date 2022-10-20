import React from 'react'

const Dropdownlist = ({dropdown, handleSelect, name, children}) => {
    return <>
    <label className="col-sm-3" htmlFor={name}>
        {children}
    </label>
    <select onChange={handleSelect} className="form-control col-sm-12" name="cars" id="cars"> 
    {dropdown.map(items => {
        return <option value={items} key={items}>{items}</option>
    })}
    </select></>
}

export default Dropdownlist