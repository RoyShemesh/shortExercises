
const baseUrl="https://pokeapi.co/api/v2/pokemon/";
getPokemonByName();
const getPokemonByName= async ()=>{
    try {
        const respone =await axios.get(baseUrl);
        console.log(respone);
    } catch (error) {
        
    }
}