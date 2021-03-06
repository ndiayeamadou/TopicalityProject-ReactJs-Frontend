import React, { Component } from 'react'
import TopicalityService from '../services/TopicalityService'

export default class ListTopicalitiesComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //to display a list of topicalities --- initialise an array
            topicalities: [],
        }
        this.addTopicalityPath = this.addTopicalityPath.bind(this);
        this.updateTopicality = this.updateTopicality.bind(this);
        this.showTopicality = this.showTopicality.bind(this);
    }

    componentDidMount () {
        TopicalityService.getTopicalities().then( (response) => {
            this.setState({topicalities: response.data})
        })
    }

    addTopicalityPath () {
        //this.props.history.push('/add-topicality')
        //this.props.history.push('/add-or-update-topicality/-1')
        //if u do not want the -1 in URL
        this.props.history.push('/add-or-update-topicality/_add')
    }

    updateTopicality (id) {
        //this.props.history.push(`/update-topicality/${id}`)
        this.props.history.push(`/add-or-update-topicality/${id}`)
    }

    deleteTopicality (id) {
        TopicalityService.deleteTopicality(id).then( res => {
            //then delete the topicality from the topicalities array - filter out the deleted topicality from the topicalities array
            this.setState({topicalities: this.state.topicalities.filter(topicality => topicality.id !== id)})
            //this.props.history.push('/topicalities')
        })
    }

    showTopicality (id) {
        return this.props.history.push(`/show-topicality/${id}`)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button className="mb-2 mt-4 btn btn-success" onClick={this.addTopicalityPath}>Add Topicality</button>
                </div>
                <h4 className="mb-4 mt-2 text-center">Topicalities List</h4>
                <div className="row">
                    <table className="table table-striped table-bordered" style={{color:'#cbd8f3'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.topicalities.map (
                                topicality =>
                                <tr key = {topicality.id}>
                                    <td>{ topicality.id }</td>
                                    <td>{ topicality.title }</td>
                                    <td>{ topicality.content }</td>
                                    <td>
                                        <button onClick = { () => this.updateTopicality(topicality.id) } className="btn btn-info">Update</button>
                                        <button onClick = { () => this.deleteTopicality(topicality.id) } className="btn btn-danger ml-3">Delete</button>
                                        <button onClick = { () => this.showTopicality(topicality.id) } className="btn btn-primary">View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
