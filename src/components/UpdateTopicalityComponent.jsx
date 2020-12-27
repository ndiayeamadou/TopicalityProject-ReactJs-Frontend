import React, { Component } from 'react'
import TopicalityService from '../services/TopicalityService'

export default class UpdateTopicalityComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            // get id from the route
            id: this.props.match.params.id,
            title: '',
            content: '',
        }

        this.handleTitle = this.handleTitle.bind(this)
        this.handleContent = this.handleContent.bind(this)
        this.updateTopicality = this.updateTopicality.bind(this)

    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    handleContent = (event) => {
        this.setState({content: event.target.value})
    }

    updateTopicality = (e) => {
        e.preventDefault();
        let topicality = {title: this.state.title, content: this.state.content}
        console.log('topicalty =>' +JSON.stringify(topicality))

        TopicalityService.updateTopicality(topicality, this.state.id).then( (response) => {
            this.props.history.push('/topicalities')
        })
        /* TopicalityService.createTopicality(topicality).then( (res) => {
            this.props.history.push('/topicalities')
        }) */

    }
    cancel () {
        this.props.history.push('/topicalities')
    }

    componentDidMount () {
        TopicalityService.getTopicalityById(this.state.id).then( (res) => {
            let topicality = res.data
            this.setState({
                title: topicality.title,
                content: topicality.content
            })
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                        <div className="card-header">
                            <h4 className="text-center">Update Topicality</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input name="title" value={this.state.title} onChange={this.handleTitle} className="form-control" placeholder="title here" />
                                </div>
                                <div className="form-group">
                                    <label>Content</label>
                                    <textarea name="content" value={this.state.content} onChange={this.handleContent} className="form-control" placeholder="add content..."></textarea>
                                </div>

                                <div className="row justify-content-between">
                                    <button onClick={this.cancel.bind(this)} className="btn btn-secondary">Annuler</button>
                                    <button onClick={this.updateTopicality} className="btn btn-primary">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
