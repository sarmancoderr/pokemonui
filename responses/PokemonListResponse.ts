export interface PokemonList {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonItem[];
}

export interface PokemonItem {
    name: string;
    url:  string;
}
