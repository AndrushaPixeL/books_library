import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useMappedState } from "redux-react-hook";
import { GlobalState } from "../../store";
import { SearchData } from "../../types";
import { MyImmerActionCreator } from "../appReducer";
import { fetchData } from "../thunk/loadData";

function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      data: state.data,
      startIndex: state.startIndex,
      searchData: state.searchData,
      isLoading: state.isLoading
    }),
    []
  );
  return useMappedState(mapState);
}
function useEventHandlers() {
  const dispatch = useDispatch();
  const eventHandlers = useMemo(
    () => ({
      setSearchData: (searchValue: string, category: string, sort: string) => {
        dispatch(
          MyImmerActionCreator.setSearchData(searchValue, category, sort)
        );
      },
      loadData: (startIndex: number, searchData: SearchData) => {
        dispatch(fetchData(startIndex, searchData));
      },
      clearData: () => {
        dispatch(MyImmerActionCreator.clearData());
      },
      setStartIndex: (count: number) => {
        dispatch(MyImmerActionCreator.setStartIndex(count));
      }
    }),
    [dispatch]
  );

  return eventHandlers;
}

export function useAppPresenter() {
  const values = useState();
  const eventHandlers = useEventHandlers();

  return {
    values,
    eventHandlers
  };
}
