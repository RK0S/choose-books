
enum optionsSortName {
    RELEVANCE = 'relevance',
    NEWEST = 'newest'
}

interface optionsSortType {
    value: optionsSortName
    name: optionsSortName
}

export const optionsSort: optionsSortType[] = [
    {value: optionsSortName.RELEVANCE, name: optionsSortName.RELEVANCE},
    {value: optionsSortName.NEWEST, name: optionsSortName.NEWEST},
]