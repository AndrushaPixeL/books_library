import React from 'react'
import { SearchData } from '../../types'
import Search from '../Search/Search'
import './Navbar.css'
interface INavbar {
  totalItems: number,
  setSearchData: (searchValue: string, category: string, sort: string) => void,
  loadData: (startIndex: number, searchData: SearchData) => void,
  searchStateVal: SearchData,
  clearData: () => void
}

export const Navbar: React.FunctionComponent<INavbar> = (props) => {
  return (
    <div className="navbar_container">
      <div className="title">
        <h1>Книги всего мира</h1>
      </div>
      <div className="search_component">
        <Search
          setSearchData={props.setSearchData}
          loadData={props.loadData}
          searchStateVal={props.searchStateVal}
          clearData={props.clearData}
        />
      </div>
    </div>
  )
}
