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

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure?'
        }

        return `Are you sure ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);