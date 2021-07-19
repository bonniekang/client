import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

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

export default connect(null, { fetchStream })(StreamDelete);