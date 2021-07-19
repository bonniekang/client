import React from 'react';
import Modal from '../Modal'

const StreamDelete = () => {

    const actions = (
        <div>
            <button>
                Delete
            </button>
            <button>
                Cancel
            </button>
        </div>
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