import { number } from 'prop-types'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { GlobalState } from '../../store'
import { MyImmerActionCreater } from '../appReducer'
import { fetchData } from '../thunk/loadData'


function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      data: state.data,
      startIndex: state.startIndex
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      loadData: (startIndex: number) => {
        dispatch(fetchData(startIndex))
      },
      setStartIndex: (count: number) => {
        dispatch( MyImmerActionCreater.setStartIndex(count))
      }
    }),
    [dispatch]
  )

  return eventHandlers
}

export function useAppPresenter() {
  // useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers
  }
}
