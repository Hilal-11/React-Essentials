
// Search Games Helper function
export const filterData = (userQuary , allGamesData) => {
    return allGamesData.filter((game) => game?.title?.toLowerCase()?.includes(userQuary?.toLowerCase()))
}

//