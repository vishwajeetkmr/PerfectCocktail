class CocktailAPI{
  // get receipe by name
  async getDrinksByName(name) {
    // search by Name
    const apiResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

    //Returnd JSON Result
    const cocktails = await apiResponse.json();

    return {
      cocktails
    }
}
}
