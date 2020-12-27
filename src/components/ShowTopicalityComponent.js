import React, { Component } from 'react';
import TopicalityService from '../services/TopicalityService';

export default class ShowTopicalityComponent extends Component {

    constructor (props) {

        super(props)
        this.state = {
            id: this.props.match.params.id,
            topicalities: {}
        }

    }

    componentDidMount () {
        TopicalityService.getTopicalityById(this.state.id).then( (response) => {
            //extract the topicality data from the response
            //assign the response data to the topicality propriety(object) using setState method
            this.setState({topicalities: response.data})
        })
    }

    render () {
        return (
            <div className="container">
                <div className="pt-5 pb-5">
                    <div className="card col-md-8 offset-md-2 bg-dark">
                        <div className="card-header text-center">Topicality N° { this.state.topicalities.id }</div>
                        <div className="card-body">
                            <div className="row mb-2">
                                <b className="col-md-3">Title</b>
                                <div className="col-md-9">{ this.state.topicalities.title }</div>
                            </div>
                            <hr className="bg-success" />
                            <div className="row">
                                <b className="col-md-3">Content</b>
                                <div className="col-md-9">{ this.state.topicalities.content }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}