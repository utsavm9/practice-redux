import React from 'react'

class Num extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <p onClick={this.props.handleClick}>{this.props.number}</p>
        );
    }
}

export default Num