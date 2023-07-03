import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
    render(){
        return(
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastTitle}</Modal.Title>
                </Modal.Header>
                <Card style={{ width: '30rem'}}>
                    <Card.Body>
                        <Card.Img src={this.props.beastImg} 
                                  alt={this.props.beastDescription}
                                  title={this.props.beastTitle}
                        />
                        <Card.Text>Description: {this.props.beastDescription}</Card.Text>
                    </Card.Body>
                </Card>
            </Modal>
        )
    }
}
export default SelectedBeast;