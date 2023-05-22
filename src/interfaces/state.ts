import { CountryInterface } from "./country";

export interface StateInterface {
    code?: string;
    name: string;
    country: CountryInterface;
  }