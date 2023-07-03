import React from "react"; 
import './css/HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            heart: '♡',
        }
    }

    handleLike = () => {
        this.setState({
            likes: this.state.likes + 1,
            heart: '♥',
        })
    }

    displayBeast = () => {
        this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description);
    }

    render(){
        return(
            <article>
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Name: {this.props.title} Likes: {this.state.likes}</Card.Title>
                    <Card.Text>{this.state.heart} {this.state.favorites} favorites</Card.Text>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Img onClick={this.displayBeast} src={this.props.image_url} alt={this.props.title}/>
                    <Button onClick={this.handleLike}>Like</Button>
                </Card.Body>
            </Card>
            </article>
        )
    }
}
export default HornedBeast;