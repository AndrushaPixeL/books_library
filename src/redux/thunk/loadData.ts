import { IData, SearchData } from '../../types'
import { MyImmerActionCreater } from '../appReducer'

export const fetchData = (startIndex: number, searchData: SearchData) => {
  function getSearchValues() {
    if (!!searchData.category) {
      return `${searchData.searchValue}+subject:${
        searchData.category
      }`
    }
    return `${searchData.searchValue}`
  }
  return (dispatch: (callback: any) => void) => {
    dispatch(MyImmerActionCreater.setIsLoading(true))
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${getSearchValues()}&maxResults=30&startIndex=${startIndex}&orderBy=${
        searchData.sort
      }&key:AIzaSyD1sNdLC_UeZYexvNTQgjL-Gj1FkByF8XI`
    )
      .then((response): Promise<IData> => response.json())
      .then((data) => {
        dispatch(MyImmerActionCreater.setData(data))
        dispatch(MyImmerActionCreater.setIsLoading(false))
      })
  }
}
