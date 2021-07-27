import React from 'react'
import { Image, Input } from 'semantic-ui-react'
import "../assets/css/searchStart.css"

const SearchStart = () => {
    return (
        <div className="container">
        <div className="logo">
            <Image size='medium' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png' wrapped />

        </div>
        <div className="input">
        <Input circular style={{width:"100%"}} size='large' icon='search' placeholder='Search...' iconPosition='left'/>
        </div>
        </div>
    )
}

export default SearchStart
