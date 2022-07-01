import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddItemForm({ onSubmit }) {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Что нужно сделать?"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </form>
    )
}

AddItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddItemForm