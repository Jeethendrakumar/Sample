import React, {useState} from 'react'

const Dropdownlist = ({dropdown}) => {
    const [selectedValue, setValue] = useState('')
    const handleSelect = (e) => {
        setValue(e.target.value)
    }
    console.log(selectedValue)
    return <select onChange={(e) => handleSelect(e)} className="form-control col-sm-12" name="cars" id="cars"> 
    {dropdown.map(items => {
        return <option value={items} key={items}>{items}</option>
    })}
    </select>
}

export default Dropdownlist