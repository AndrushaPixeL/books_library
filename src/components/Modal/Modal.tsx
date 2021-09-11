import React, { ReactElement } from 'react'
import { Book } from '../../types'
import './Modal.css'
interface IProps {
    currentBook:Book,
    onClose:()=>void
}

const Modal: React.FunctionComponent<IProps> = (props) => {
    console.log('render', props)
    return (
        <div className='wrapper'>
            
        </div>
    )
}


export default Modal


