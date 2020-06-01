import React from 'react'
import "./search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios"
import Scroll from "../scroll/Scroll"
import UserList from "../users/UserList"

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            results: [  ]
        }

    }

    componentDidMount() {
        const url = `http://www.mocky.io/v2/5ba8efb23100007200c2750c`

        Axios.get(url)
            .then(res => {
                this.setState({ results : res.data })
            })
    }

    onhandleInputChange = (event) =>{
        const query = event.target.value
        this.setState({ query })
    }

    // onhoverChange = ( inputValue, index = 0) =>{
    //      inputValue = this.state.results[index].name
    //     this.setState({ query : inputValue })
    // }

    // the key direction arrows didnt work out!!
    // handleKeyDown = (e) => {
    //     const { cursor, results } = this.state
    //     // arrow up/down button should select next/previous list element
    //     if (e.keyCode === 38 && cursor > 0) {
    //         this.setState( prevState => ({
    //             cursor: prevState.cursor - 1
    //         }))
    //     } else if (e.keyCode === 40 && cursor < results.length - 1) {
    //         this.setState( prevState => ({
    //             cursor: prevState.cursor + 1
    //         }))
    //     }
    // }

    render(){
        const { query, results } = this.state
        const filterSearch = results.filter( person => {
            return person.name.toLowerCase().includes(query.toLowerCase()) || person.address.toLowerCase().includes(query.toLowerCase())
                || person.id.toLowerCase().startsWith(query.toLowerCase())
        } )

        return(
            <div className="container">
                <h2 className="heading">Youtube Search Functionality</h2>
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        placeholder="Search Users by ID,Address,Name...."
                        onChange={this.onhandleInputChange}
                    />
                    <span><FontAwesomeIcon icon={faSearch} className="search-icon"/></span>
                </label>
                { query.length ?
                    <Scroll>
                        <UserList users = { filterSearch } query={query} />
                    </Scroll> : null
                }
            </div>
        )
    }
}

export default Search