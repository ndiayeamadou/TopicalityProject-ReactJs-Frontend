import React, { Component } from 'react'
import TopicalityService from '../services/TopicalityService'

class CreateTopicalityComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            title: '',
            content: '',
        }

        this.handleTitle = this.handleTitle.bind(this)
        this.handleContent = this.handleContent.bind(this)
        this.saveTopicality = this.saveTopicality.bind(this)

    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    handleContent = (event) => {
        this.setState({content: event.target.value})
    }

    saveTopicality = (e) => {
        e.preventDefault();
        let topicality = {title: this.state.title, content: this.state.content}
        TopicalityService.createTopicality(topicality).then( (res) => {
            this.props.history.push('/topicalities')
        })
        //console.log('topicalty =>' +JSON.stringify(topicality))
    }
    cancel () {
        this.props.history.push('/topicalities')
    }

    render() {
        return(
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                        <div className="card-header">
                            <h4 className="text-center">Add Topicality</h4>
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
                                    <button onClick={this.saveTopicality} className="btn btn-primary">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default CreateTopicalityComponent