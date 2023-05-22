import { ContinentInterface } from "./continent";
import { LanguageInterface } from "./language";
import { StateInterface } from "./state";

export interface CountryInterface {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: ContinentInterface;
    capital?: string;
    currency?: string;
    languages: LanguageInterface[];
    emoji: string;
    emojiU: string;
    states: StateInterface[];
}