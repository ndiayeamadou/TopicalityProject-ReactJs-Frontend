import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="http://" className="navbar-brand" target="_blank" rel="noopener noreferrer">Topicality</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
