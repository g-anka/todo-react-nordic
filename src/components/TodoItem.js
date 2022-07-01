import React from 'react'
import './TodoItem.css'
import PropTypes from 'prop-types'

function TodoItem({ item, onComplete, onDelete }) {
    return(
        <div className={item.completed ? 'todo-item-completed' : 'todo-item'}>
            <input type="checkbox" checked={item.completed} onChange={onComplete} />
            {item.title}
            <button type="button" onClick={onDelete}>
                X
            </button>
        </div>
    )
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool,
    }),
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
}

export default TodoItem