import React from 'react'
import { SearchData } from '../../types'
import './Search.css'

type SearchProps = {
  setSearchData: (searchValue: string, category: string, sort: string) => void,
  loadData: (startIndex: number, searchData: SearchData) => void,
  searchStateVal: SearchData,
  clearData: () => void
}

const Search: React.FunctionComponent<SearchProps> = (props) => {

  const executionSearch = () => {
    props.loadData(0, props.searchStateVal)
  }

  const listener = (charCode: number) => {    
    if (charCode === 13) {
      props.clearData()
      executionSearch()
    }
  }
  return (
    <>
      <div className="search_container">
        <input
          className="search_input"
          type="book search"
          placeholder="Введите название книги"
          onKeyPress={(e) => listener(e.charCode)}
          value={props.searchStateVal.searchValue}
          onChange={(e) => {
            props.setSearchData(
              e.target.value,
              props.searchStateVal.category,
              props.searchStateVal.sort
            )
          }}
        />
        <button
          className="search_button"
          onClick={() => {
            props.clearData(), executionSearch()
          }}
        >
          🔎
        </button>
      </div>
      <div className="search_options_container">
        <select
          className="search_sort"
          onChange={(e) =>
            props.setSearchData(
              props.searchStateVal.searchValue,
              e.target.value,
              props.searchStateVal.sort
            )
          }
        >
          <option value="">все</option>
          <option value="art">арт</option>
          <option value="biography">биография</option>
          <option value="computers">компьютеры</option>
          <option value="history">история</option>
          <option value="medical">медицина</option>
          <option value="poetry">поэзия</option>
        </select>
        <select className="search_sort" onChange={(e) =>
            props.setSearchData(
              props.searchStateVal.searchValue,
              props.searchStateVal.category,
              e.target.value
            )
          }>
          <option value="relevance">Сначала актуальные</option>
          <option value="newest">Сначала новые</option>
        </select>
      </div>
    </>
  )
}
export default Search
