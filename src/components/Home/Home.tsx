import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Book } from '../../types'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'
import './Home.css'

interface IHome {
  items: Array<Book>
}
interface DetailModal {
  isOpen:boolean,
  currentBook:Book
}
const Home: React.FunctionComponent<IHome> = (props) => {
  const [detailModal,setDetailModal] = React.useState<DetailModal|null>(null)
  const refModal = React.useRef<HTMLDivElement>(null)

  return (
    <Fragment>
      <div className="container" ref = {refModal}>
        {props.items[0] ? (
          props.items.map((el: any) => {
            return (
              <div key={el?.etag + el?.id} onClick={()=>{
                setDetailModal({
                  isOpen:true,
                  currentBook:el
                })
              }}>
                <Card volumeInfo={el?.volumeInfo} />
              </div>
            )
          })
        ) : (
          <h1>Книг с таким названием нет :❲ </h1>
        )}
      </div>
      {
        (detailModal?.isOpen&&refModal&&refModal.current&&
        ReactDOM.createPortal(<Modal currentBook={detailModal.currentBook} onClose={()=>{setDetailModal(null)}}/>,refModal.current))
      }
    </Fragment>
  )
}
export default Home
