import { CountryInterface } from "./country";

export interface ContinentInterface {
    code: string;
    name: string;
    countries: CountryInterface[];
}