
enum optionsCategoryName {
    ALL = 'all',
    ART = 'art',
    BIOGRAPHY = 'biography',
    COMPUTERS = 'computers',
    HISTORY = 'history',
    MEDICAL = 'medical',
    POETRY = 'poetry'
}

export interface optionsCategoryType {
    value: optionsCategoryName
    name: optionsCategoryName
}

export const optionsCategories: optionsCategoryType[] = [
    {value: optionsCategoryName.ALL, name: optionsCategoryName.ALL},
    {value: optionsCategoryName.ART, name: optionsCategoryName.ART},
    {value: optionsCategoryName.BIOGRAPHY, name: optionsCategoryName.BIOGRAPHY},
    {value: optionsCategoryName.COMPUTERS, name: optionsCategoryName.COMPUTERS},
    {value: optionsCategoryName.HISTORY, name: optionsCategoryName.HISTORY},
    {value: optionsCategoryName.MEDICAL, name: optionsCategoryName.MEDICAL},
    {value: optionsCategoryName.POETRY, name: optionsCategoryName.POETRY}
]