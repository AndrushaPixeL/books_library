import React from 'react'
import { SearchData } from '../../types'
import '../../App.css'

interface ILoadMore {
    isLoading: boolean,
    loadData: (startIndex: number, searchData: SearchData) => void,
    startIndex: number,
    searchStateVal: SearchData,
    setStartIndex: (startIndex: number) => void
}

const LoadMore: React.FunctionComponent<ILoadMore> = (props) => {

  return (
    <div className="button_spinner_container">

     {!props.isLoading &&
      <>
        <button
          className="botton_loadMore"
          onClick={() => {
            props.setStartIndex(props.startIndex + 30),
              console.log(props.startIndex),
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