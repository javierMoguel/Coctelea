export const apiUrl: { [key: string]: string }= {
    cocktailDb: `https://www.thecocktaildb.com/api/json/v1/1/{type}.php?`,
    queryParamsGet: `i={ingrediente}&c={categoria}`,
    queryParamsList: `c=list`,
    queryParamsSearch: 's=',
    filter: 'filter',
    list: 'list',
    search: 'search'
};
