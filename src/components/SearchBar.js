import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        search: ""

    }


    handleChange = (e) => {
        const updatedValue = e.target.value
        this.setState({search: updatedValue })

        this.props.filterThougts(updatedValue)

    }

    render() {
        return (
            <div className="searchStyle">
            <p>Búsqueda por categoria:</p>
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBar;
