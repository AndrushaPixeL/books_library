import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Book } from '../../types'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'
import './Home.css'

type HomeProps = {
  items: Array<Book>,
  totalItems: number
}
interface DetailModal {
  isOpen: boolean,
  currentBook: Book
}
const Home: React.FunctionComponent<HomeProps> = (props) => {
  const [detailModal, setDetailModal] = React.useState<DetailModal | null>(null)
  const refModal = React.useRef<HTMLDivElement>(null)

  return (
    <>
    <h5 className="totalItems_text">Найдено {props.totalItems} книг</h5>
      <div className="container_home" ref={refModal}>
        
        {props.items.map((el: Book) => {
          return (
            <div
              key={el?.etag + el?.id}
              onClick={() => {
                setDetailModal({
                  isOpen: true,
                  currentBook: el,
                })
              }}
            >
              <Card volumeInfo={el?.volumeInfo} />
            </div>
          )
        })}
      </div>
      {detailModal?.isOpen &&
        refModal &&
        refModal.current &&
        ReactDOM.createPortal(
          <Modal
          volumeInfo={detailModal.currentBook.volumeInfo}
            onClose={() => {
              setDetailModal(null)
            }}
          />,
          refModal.current
        )}
    </>
  )
}
export default Home
