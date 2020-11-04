import React from 'react'
import { Input } from 'antd';
import './search.less'

function Search () {
    return (
        <div className="search-bar">
            <Input.Search></Input.Search>
        </div>
    )
}

export default Search