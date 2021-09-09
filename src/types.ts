export type AccessInfo = {
  accessViewStatus: string
  country: string
  embeddable: boolean
}
export type SaleInfo = {
  buyLink: string
  country: string
  isEbook: boolean
}
export type SearchInfo = {
  textSnippet: string
}
export type ImageLinks = {
  smallThumbnail: string
  thumbnail: string
}
export type IndustryIdentifiers = {
  type: string
  identifier: string
}
export type PanelizationSummary = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}
export type VolumeInfo = {
  allowAnonLogging: boolean
  authors: Array<string>
  cannonicalVolume: string
  categories: Array<string>
  contentVersion: string
  description: string
  imageLinks: ImageLinks
  industryIdentifiers: Array<IndustryIdentifiers>
  infoLink: string
  language: string
  maturityRating: string
  pageCount: number
  panelizationSummary: PanelizationSummary
  previewLink: string
  printType: string
  publishedDate: string
  publisher: string
}
export type Book = {
  accessInfo: AccessInfo
  etag: string
  id: string
  kind: string
  saleInfo: SaleInfo
  searchInfo: SearchInfo
  selfLink: string
  volumeInfo: VolumeInfo
}
export interface IData {
  items: Array<Book>
  kind: string
  totalItems: number
}


export type SearchData = {
  searchValue: string
  category: string
  sort: string
}
