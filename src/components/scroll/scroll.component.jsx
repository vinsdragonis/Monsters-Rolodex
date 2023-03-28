import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div style={{ overflowY: "scroll", border: "1px solid black", height: "500px" }}>
                { this.props.children };
            </div>
        );
    }
}

export default Scroll;