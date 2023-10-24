export const  Fetchapi=async()=>{
    const result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")

    const data = await result.json()
    return data.drinks
}