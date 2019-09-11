import React, { Component }  from 'react'
import { connect } from 'react-redux'

class App extends Component {

    render() {

        return (
            <div className="container">
                {`Home page`}
            </div>
        )
    }
}

export default connect(null,null)(App);