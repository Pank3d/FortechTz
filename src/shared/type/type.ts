export interface PokInter {
    counnt:number,
    next:string,
    previos:string | null,
    results:dataInter,
}

export interface dataInter {
    name:string,
    url:string
}

