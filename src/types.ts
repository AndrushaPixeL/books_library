export type AccessInfo = {
  accessViewStatus: String
  country: String
  embeddable: Boolean
}
export type SaleInfo = {
  buyLink: String
  country: String
  isEbook: Boolean
}
export type SearchInfo = {
  textSnippet: String
}
export type ImageLinks = {
  smallThumbnail: String
  thumbnail: String
}
export type IndustryIdentifiers = {
  type: String
  identifier: String
}
export type PanelizationSummary = {
  containsEpubBubbles: Boolean
  containsImageBubbles: Boolean
}
export type VolumeInfo = {
  allowAnonLogging: Boolean
  authors: Array<String>
  cannonicalVolume: String
  categories: Array<String>
  contentVersion: String
  description: String
  imageLinks: ImageLinks
  industryIdentifiers: Array<IndustryIdentifiers>
  infoLink: String
  language: String
  maturityRating: String
  pageCount: Number
  panelizationSummary: PanelizationSummary
  previewLink: String
  printType: String
  publishedDate: String
  publisher: String
}
export type Book = {
  accessInfo: AccessInfo
  etag: String
  id: String
  kind: String
  saleInfo: SaleInfo
  searchInfo: SearchInfo
  selfLink: String
  volumeInfo: VolumeInfo
}

export interface IData {
  items: Array<Book>
  kind: String
  totalItems: Number
}
