import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { useAppPresenter } from "./redux/presenters/AppPresenter";
import LoadMore from "./components/LoadMore/LoadMore";
import { StageSpinner } from "react-spinners-kit";
import Home from "./components/Home/Home";

import "./App.css";

const App: React.FC = () => {
  const { values, eventHandlers } = useAppPresenter();

  return (
    <>
      <div className="app_container">
        <Navbar
          totalItems={values.data.totalItems}
          setSearchData={eventHandlers.setSearchData}
          loadData={eventHandlers.loadData}
          searchStateVal={values.searchData}
          clearData={eventHandlers.clearData}
        />
        <>
          {values.data.items && (
            <Home
              items={values.data.items}
              totalItems={values.data.totalItems}
            />
          )}

          <div className="stage_spinner">
            <StageSpinner
              size={100}
              color="#e9ffc5"
              loading={values.isLoading}
            />
          </div>

          {!!values.data.items.length && (
            <LoadMore
              isLoading={values.isLoading}
              loadData={eventHandlers.loadData}
              startIndex={values.startIndex}
              setStartIndex={eventHandlers.setStartIndex}
              searchStateVal={values.searchData}
              numberOfBooks={values.data.items.length}
              totalItems={values.data.totalItems}
            />
          )}
        </>
      </div>
    </>
  );
};
export default App;
