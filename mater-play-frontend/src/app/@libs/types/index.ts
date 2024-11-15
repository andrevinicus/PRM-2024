export interface ICategory{
    id?: number
    name: string
    active: boolean
}
export interface IGenero{
    id?: number
    name: string;
}
export interface IMove{
    id?: string
    title: string
    description: string
    poster: string
    ageRating: string
    categories: ICategory[]
    generos: IGenero[]
}
