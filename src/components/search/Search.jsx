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
            results: [  ],
            cursor : 0,
            result2: [  ]
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

   // the key direction arrows work now
    handleKeyDown = (e) => {
        const { cursor, results } = this.state
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38 && cursor > 0) {
            console.log(`up arrow`)
            this.setState( prevState => ({
                cursor: prevState.cursor - 1
            }))
        } else if (e.keyCode === 40 && cursor < results.length - 1) {
            console.log(`down arrow`)
            this.setState( prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }

    // trying to fix cursor indexing for navigation by populating state with filtered search data
    handleKeyUp = (array) => {
        if(array.length < 1){
            const ar = array.slice(0,1)
            this.setState({ result2 : array })
        }else{
            const arr2 = array.slice(0, array.length - 2)
            this.setState({result2 : arr2})
        }
        //this.setState({result2: array})

    }

    render(){
        const { query, results, cursor } = this.state
        const filterSearch = results.filter( person => {
            return person.name.toLowerCase().includes(query.toLowerCase()) || person.address.toLowerCase().includes(query.toLowerCase())
                || person.id.toLowerCase().startsWith(query.toLowerCase())
        } )

        console.log(filterSearch)

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
                        onChange={(e) => this.onhandleInputChange(e)}
                        onKeyDown={(e)=> { this.handleKeyDown(e)} }
                        //onKeyPress={()=> this.handleKeyUp(filterSearch)}
                    />
                    <span><FontAwesomeIcon icon={faSearch} className="search-icon"/></span>
                </label>
                { query.length ?
                    <Scroll>
                        <UserList users = { filterSearch } query={query} cursor={cursor}/>
                    </Scroll> : null
                }
            </div>
        )
    }
}

export default Search