import React, { PureComponent } from 'react';

class Comment extends PureComponent {
    render() {
        return(
            <div className="Comment">
                <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                    <div className="media-body">
                        <h5 className="mt-0">Commenter Name</h5>
                        {this.props.data.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment