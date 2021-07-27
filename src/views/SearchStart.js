import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Image, Input } from 'semantic-ui-react'
import "../assets/css/searchStart.css"

const SearchStart = () => {
    const [inputValue, setInputValue] = useState("")
    const history= useHistory()

    const redirect= (e) =>{
        // console.log(e);
        if(e.key==="Enter"){
history.push(`/search?q=${inputValue}`)

        }
    }
    return (
        <div className="container">
        <div className="logo">
            <Image size='medium' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png' wrapped />

        </div>
        <div className="input">
        <Input circular="true" onChange={e=>setInputValue(e.target.value)} style={{width:"100%"}} size='large' icon='search' placeholder='Search...' iconPosition='left' onKeyPress={redirect}/>
        </div>
        </div>
    )
}

export default SearchStart



// AIzaSyAV0c8GJE3ooKHOs4xC_Fg_Qf2oa5Q_Pfs