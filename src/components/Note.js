import React, {Component} from 'react';
import '../css/Note.css';
class Note extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    }
  }
  componentDidMount() {
    this.setState({
      editMode: false
    })
  }
  handleEdit = () => {
  this.setState({
    editMode: true
  });
  }
  handleSave = () => {
    this.setState({
      editMode: false
    })
    let saveNote = {
      id: this.props.id,
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value
    }
    this.props.onSaveClicked(saveNote)
  }
  // handleDelete = () => this.props.deleteHandler(this.props.id)
  handleDelete = () => this.props.onDeleteClicked(this.props.id)
  render() {
    let titleElement, bodyElement,buttonArea;
    if (this.state.editMode) {
      titleElement = <textarea ref="titleContent" className="title-textarea" placeholder={this.props.title}></textarea>;
      bodyElement = <textarea ref="bodyContent" className="body-textarea" placeholder ={this.props.body}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave}>Save</button></div>;
    } else {
      titleElement = <h5>{this.props.title}</h5>;
      bodyElement = <p>{this.props.body}</p>;
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></div>;
    }
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {bodyElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}
export default Note;