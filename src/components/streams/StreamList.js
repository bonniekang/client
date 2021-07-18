import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return <div>Edit/ Delete</div>
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id}>
                    {stream.title}
                    {stream.description}
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams) ,
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);