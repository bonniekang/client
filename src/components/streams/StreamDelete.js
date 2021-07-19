import React from 'react';
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

    renderActions() {
        return (
            <React.Fragment>
                <button>
                    Delete
                </button>
                <button>
                    Cancel
                </button>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    content="are you sure you want to delete this?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

export default StreamDelete;