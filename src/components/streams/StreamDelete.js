import React from 'react';
import Modal from '../Modal'

const StreamDelete = () => {

    const actions = (
        <React.Fragment>
            <button>
                Delete
            </button>
            <button>
                Cancel
            </button>
        </React.Fragment>
    )

    return (
        <div>
            StreamDelete
            <Modal
                content="are you sure you want to delete this?"
                actions={actions}
            />
        </div>
    )
}

export default StreamDelete;