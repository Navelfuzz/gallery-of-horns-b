import React from 'react';
import HornedBeast from './HornedBeast';
import './css/Main.css';

class Main extends React.Component {
    render() {
        return(
            <main>
                {this.props.data.map(beastObj => {
                    return <HornedBeast key={beastObj._id} title={beastObj.title} image_url={beastObj.image_url} description={beastObj.description} handleOpenModal={this.props.handleOpenModal} />
                })}
            </main>
        )
    }
}
export default Main;
