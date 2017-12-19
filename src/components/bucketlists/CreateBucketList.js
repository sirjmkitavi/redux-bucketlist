import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

class CreateBucketList extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      bucketlist: {}
    };
    this.onChange = this.onChange.bind(this);
    this.myClose =  this.myClose.bind(this);
    this.mySave =  this.mySave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    let bucketlist = this.state.bucketlist;
    bucketlist[field] = event.target.value;
    return this.setState({bucketlist: bucketlist});
  }

  myClose() {
    this.setState({bucketlist: {}});
    return this.props.closeModal()
  }

  mySave() {
    console.log("On Save", this.state.bucketlist)
    this.props.saveBucketlist(this.state.bucketlist)
    this.props.closeModal()
  }

  render() {
    const { showModal } = this.props;
    return (
      <div>
        <Modal show={showModal} onHide={this.myClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Add BucketList</Modal.Title>
          </Modal.Header>
          <Modal.Body className="app-container">
          <form>
            <div className="form-group">
              <label htmlFor="Title" className="control-label">Title</label>
              <input type="title" name="title" className="form-control" placeholder="Enter Title" onChange={this.onChange} required /> 
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input type="text" name="description" className="form-control"  placeholder="Description" onChange={this.onChange} />
            </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button
                bsSize="small"
                bsStyle="info"
                onClick={this.mySave}>
                Save
              </Button>
              <Button
                bsStyle="warning"
                bsSize="small"
                onClick={this.myClose}>
                Cancel
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

CreateBucketList.PropTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default CreateBucketList;
