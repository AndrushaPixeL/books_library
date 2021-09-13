import React from 'react'
import { SearchData } from '../../types'
import '../../App.css'

type LoadMoreProps = {
    isLoading: boolean,
    loadData: (startIndex: number, searchData: SearchData) => void,
    startIndex: number,
    searchStateVal: SearchData,
    setStartIndex: (startIndex: number) => void,
    numberOfBooks: number,
    totalItems: number
}

const LoadMore: React.FunctionComponent<LoadMoreProps> = (props) => {
  return (
    <div className="button_spinner_container">
     {!props.isLoading && props.numberOfBooks<=props.totalItems &&
      <>
        <button
          className="botton_loadMore"
          onClick={() => {
            props.setStartIndex(props.startIndex + 30),
              props.loadData(props.startIndex, props.searchStateVal)
          }}
        >
          больше книг
        </button>
      </>
    }
  </div>
  )
}
export default LoadMore