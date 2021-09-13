import React from "react";
import { VolumeInfo } from "../../types";
import "./Card.css";
import getValues from "../Common/getInfoValues";

type CardProps = {
  volumeInfo?: VolumeInfo;
};

const Card: React.FunctionComponent<CardProps> = props => {
  const { categories, imgUrl, title, authors } = React.useMemo(() => {
    return getValues(props.volumeInfo);
  }, [props.volumeInfo]);

  return (
    <>
      {props.volumeInfo?.title && (
        <>
          <div className="card_container">
            <img
              className="card_image"
              src={imgUrl}
              alt="что-то пошло не так..."
            ></img>
            <div className="card_category">{categories[0]}</div>
            <div className="card_title">{title}</div>

            {authors.map((el: string) => {
              return (
                <div key={el} className="card_authors">
                  {el}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Card;
