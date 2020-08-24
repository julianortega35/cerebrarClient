import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        search: ""

    }


    handleChange = (e) => {
        const updatedValue = e.target.value
        this.props.filterThougts(updatedValue)

    }

    render() {
        return (
            <div className="searchStyle">
            <p>Búsqueda por categoria:</p>
                

         <div>
                <select name="category" onChange={this.handleChange}>
                  <option value="Todas">Todas las categorías</option>
                  <option value="Dinero">Dinero</option>
                  <option value="Familia">Familia</option>
                  <option value="Futuro">Futuro</option>
                  <option value="Pareja">Pareja</option>
                  <option value="Salud">Salud</option>
                  <option value="Trabajo">Trabajo</option>
                  <option value="Otra">Otra</option>

                </select>
                </div>



            </div>
        )
    }
}

export default SearchBar;
