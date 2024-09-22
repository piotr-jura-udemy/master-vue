export interface Card {
  id: number
  title: string
  description: string
}

export interface List {
  id: number
  title: string
  cards: Card[]
}
