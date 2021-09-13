import React from 'react'
import { VolumeInfo } from '../../types'
import noImage from '../../images/noImage.png'
import './Modal.css'

type ModalProps = {
  volumeInfo: VolumeInfo,
  onClose: () => void
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  console.log('render', props)
  let categories
  let imgUrl
  let authors
  let description
  if (props.volumeInfo.description) {
    description = props.volumeInfo.description
  } else {
    description = "Описание не найдено"
  }
  if (props.volumeInfo.categories) {
    categories = props.volumeInfo.categories
  } else {
    categories = ['']
  }
  if (props.volumeInfo.imageLinks) {
    imgUrl = props.volumeInfo.imageLinks.thumbnail
  } else {
    imgUrl = noImage
  }
  if (props.volumeInfo.authors) {
    authors = props.volumeInfo.authors
  } else {
    authors = ['']
  }
  return (
    <div className="modal_container" onClick={props.onClose}>
      <div className="modal_dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h3 className="modal_title">{props.volumeInfo.title}</h3>
          {props.volumeInfo.subtitle && (
            <h5 className="modal_title">{props.volumeInfo.subtitle}</h5>
          )}
          <div className="modal_close" onClick={props.onClose}></div>
        </div>
        <div className="modal_body">
          <div className="modal_content">
            <img src={imgUrl} alt="обложка" className="modal_image" />

            <div className="modal_info">
              <div>
                {categories.map((el: string, index: number) => (
                  <h6 key={el + index}>Категории: {el}</h6>
                ))}
              </div>
              <div>
                {authors.map((el: string, index: number) => (
                  <h5 key={el + index}>Авторы: {el}</h5>
                ))}
              </div>
            </div>
          </div>
          <h5 className="modal_description">Описание: {description}</h5>
        </div>
      </div>
    </div>
  )
}

export default Modal
