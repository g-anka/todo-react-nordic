import React from 'react'
import './TodoItem.module.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './TodoItem.module.css'
import styled, { css } from 'styled-components'

const Item = styled.div`
  color: #000;
  
  ${(props) => 
          props.completed &&
          css`
          color: #999;
          text-decoration: line-through;
          `}
`
function TodoItem({ item, onComplete, onDelete }) {
    return (
        <Item completed={item.completed}>
            <input type="checkbox" checked={item.completed} onChange={onComplete} />
            {item.title}
            <button type="button" onClick={onDelete}>
                X
            </button>
        </Item>
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