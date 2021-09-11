import { IData, SearchData } from '../../types'
import { MyImmerActionCreater } from '../appReducer'

export const fetchData = (
  startIndex: number,
  searchData: SearchData
) => {
  return (dispatch: (callback: any) => void) => {
    dispatch(MyImmerActionCreater.setIsLoading(true))
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchData.searchValue.split(' ').join('+')}&subject:${searchData.category}&maxResults:30&startIndex:${startIndex}&orderBy:${searchData.sort}&key:AIzaSyD1sNdLC_UeZYexvNTQgjL-Gj1FkByF8XI`
    )
      .then((response): Promise<IData> => response.json())
      .then((data) => {
        dispatch(MyImmerActionCreater.setData(data))
        dispatch(MyImmerActionCreater.setIsLoading(false))
      })
  }
}
