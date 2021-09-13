import { VolumeInfo } from "../../types";
import noImage from "../../images/noImage.png";

interface values {
  title: string;
  categories: string[];
  imgUrl: string;
  authors: string[];
  description: string;
}

const getValues = (volumeInfo?: VolumeInfo): values => {
  if (!volumeInfo) {
    return {
      title: "",
      categories: [],
      imgUrl: "",
      authors: [],
      description: ""
    };
  }
  function getTitle(title?: string) {
    if (!title) {
      return "Название отсутсвует";
    }
    if (title.length > 60) {
      return title.substr(0, 60) + "...";
    }
    return title;
  }

  const categories = volumeInfo.categories ?? [""];
  const imgUrl = volumeInfo.imageLinks?.thumbnail ?? noImage;
  const title = getTitle(volumeInfo.title);
  const authors = volumeInfo.authors ?? [];
  const description = volumeInfo.description ?? "Описание не найдено";
  return {
    categories,
    imgUrl,
    title,
    authors,
    description
  };
};

export default getValues;
