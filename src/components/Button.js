import styled from 'styled-components'

const SButton = styled.button`
    background: blue;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
`

function Button(props) {
    return <SButton {...props}/>
}

export default Button