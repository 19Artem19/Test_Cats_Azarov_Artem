import { Breed } from "./index";

export interface CatImage {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface CatImages {
    catImages: CatImage[]
}
