import React, { Component } from 'react'
import TopicalityService from '../services/TopicalityService'

export default class CreateUpdateTopicalityComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: '',
            headerTitle: 'elan'
        }

        this.handleTitle = this.handleTitle.bind(this)
        this.handleContent = this.handleContent.bind(this)
        this.saveTopicality = this.saveTopicality.bind(this)

    }

    componentDidMount () {
        //if(this.state.id == -1) {
        if(this.state.id === '_add') {
            //in this case, we do not fetch a topicality object by id|we do not do anything, we simply return
            return
        }else{
            TopicalityService.getTopicalityById(this.state.id).then( (res) => {
                let topicality = res.data
                this.setState({
                    title: topicality.title,
                    content: topicality.content
                })
            })
        }
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
        //console.log('topicalty =>' +JSON.stringify(topicality))
        //test - for the create method
        //if(this.state.id == -1){
        if(this.state.id === '_add'){
            TopicalityService.createTopicality(topicality).then( (res) => {
                this.props.history.push('/topicalities')
            })
        }else{
            TopicalityService.updateTopicality(topicality, this.state.id).then( res => {
                this.props.history.push('/topicalities')
            })
        }
    }

    cancel () {
        this.props.history.push('/topicalities')
    }

    getHeaderTitle () {
        //if(this.state.id == -1) {
        if(this.state.id == '_add') {
            //One option
            //return this.state.headerTitle = "Add Topicality"
            //Another option... without declare variable
            return <h4 className="text-center">Add Topicality</h4>
        }else {
            //return this.state.headerTitle = "Update Topicality"
            return <h4 className="text-center">Update Topicality</h4>
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                        <div className="card-header">
                            {/* <h4 className="text-center">{ this.getHeaderTitle() }</h4> */}
                            {/* Other Option */}
                            { this.getHeaderTitle() }
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
