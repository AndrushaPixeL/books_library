import React from "react";
import { VolumeInfo } from "../../types";
import useOnClickOutside from "../Common/useOnclickOutside";
import getValues from "../Common/getInfoValues";
import "./Modal.css";

type ModalProps = {
  volumeInfo: VolumeInfo;
  onClose: () => void;
};

const Modal: React.FunctionComponent<ModalProps> = props => {
  const { categories, imgUrl, authors, description } = React.useMemo(() => {
    return getValues(props.volumeInfo);
  }, [props.volumeInfo]);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => {
    props.onClose();
  });

  return (
    <div className="modal_container">
      <div
        className="modal_dialog"
        onClick={e => e.stopPropagation()}
        ref={wrapperRef}
      >
        <div className="modal_header">
          <h3 className="modal_title">{props.volumeInfo.title}</h3>
          {props.volumeInfo.subtitle && (
            <h5 className="modal_title">{props.volumeInfo.subtitle}</h5>
          )}
          <div className="modal_close" onClick={props.onClose}></div>
        </div>
        <div className="modal_body">
          <div className="modal_content">
            <img src={imgUrl} alt="обложка" className="modal_image" />

            <div className="modal_info">
              <div>
                {categories.map((el: string) => (
                  <h6 key={el}>Категории: {el}</h6>
                ))}
              </div>
              <div>
                {authors.map((el: string) => (
                  <h5 key={el}>Авторы: {el}</h5>
                ))}
              </div>
            </div>
          </div>
          <h5 className="modal_description">Описание: {description}</h5>
        </div>
      </div>
    </div>
  );
};

export default Modal;
