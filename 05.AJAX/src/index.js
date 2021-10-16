
const baseUrl="https://pokeapi.co/api/v2/";
//get the info about to pokemon from the api
const getPokemonByName= async (pok)=>{
    try {
        if(checkEmpty(pok))
            throw("You need to enter name or id")
        const respone =await axios.get(`${baseUrl}pokemon/${pok}`);
        return respone;
    } catch (error) {
        let img =document.getElementById("pokImg");
        img.classList.add("hide");
        let typesFather=document.getElementById("types");
        typesFather.classList.add("hide");
        if(!(error=="You need to enter name or id"))
            error="Pokemon not found"
        document.getElementById("info").innerText= `${error}`;
    }
}

const getPokemonByType= async (type)=>{
    try {
        const respone =await axios.get(`${baseUrl}type/${type}`);
        return respone;
    } catch (error) {
        let typeAlikeEle =document.getElementById("typeAlike");
        document.getElementById("typeAlike").innerText= `${error}`;
    }
}

const getPokemonByNameFetch=async (pok)=>{
    try {
        const respone= await fetch(`${baseUrl}pokemon/1`,{            
        }) 
        console.log((respone.json).results);
    //    return await (respone.json());
    } catch (error) {
        let img =document.getElementById("pokImg");
        img.classList.add("hide");
        let typesFather=document.getElementById("types");
        typesFather.classList.add("hide");
        if(!(error=="You need to enter name or id"))
            error="Pokemon not found"
        document.getElementById("info").innerText= `${error}`;    }
}




















//function that check if input is empty
function checkEmpty(text)
{
    if (!text.replace(/\s/g, '').length) {
        return true;
    }
    return false;
}
//function that creates element
function createElement(tagName ,children = [], classes = [], attributes = {}) {
    const el = document.createElement(tagName);
    // Children
    for(const child of children) {
      el.append(child);
    }
    // Classes
    for(const cls of classes) {
      el.classList.add(cls);
    }
    // Attributes
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    return el;
  }


let pokemon;
const displayPok=async()=>{
    // pokemon=await getPokemonByName(document.getElementById("inputPoke").value)
     pokemon=await getPokemonByNameFetch(document.getElementById("inputPoke").value)
    if(pokemon===undefined)
        throw("hi")
    let p =document.getElementById("info");
    p.innerText=`Name : ${pokemon.data.name}\nHeight : ${pokemon.data.height}\nWeight :${pokemon.data.weight}`;
    lookFront();
    showTypes();
    hideTypeAlike();
}

const displayPokByType=async(event)=>{
    pokemon=await getPokemonByName(event.target.id);
    let p =document.getElementById("info");
    p.innerText=`Name : ${pokemon.data.name}\nHeight : ${pokemon.data.height}\nWeight :${pokemon.data.weight}`;
    lookFront();
    showTypes();
    hideTypeAlike();
    document.getElementById("inputPoke").value=pokemon.data.id;
}


//showing the types of the pokemon
const showTypes=()=>{
    let typesFather=document.getElementById("types");
    removeAllChildren(typesFather);
    let types=pokemon.data.types;
    addTypes(types,typesFather);
    typesFather.classList.remove("hide");
}
//add types to the types element
const addTypes=(types,typesFather)=>{
    let typeEle;
    types.forEach(type => {
        typeEle=createElement('div');
        typesFather.append(typeEle);
        typeEle.innerText=`${type.slot}:${type.type.name}`;
        typeEle.id=type.type.name;
        typeEle.addEventListener("click",typeAlike);
    });
}
//hide the tpye Alike list
const hideTypeAlike=()=>{
    let typeAlikeEle=document.getElementById("typeAlike");
    typeAlikeEle.classList.add("hide");
}
//Add all the the pokemons that have the same type
const typeAlike=async (event)=>{
    let typeAlikeEle=document.getElementById("typeAlike");
    removeAllChildren(typeAlikeEle)
    let respone =await getPokemonByType(event.target.id);
    let allPokemons=respone.data.pokemon,pokemonEle;
    allPokemons.forEach(pokemon => {
        pokemonEle=createElement('li');
        typeAlikeEle.append(pokemonEle);
        pokemonEle.innerText=pokemon.pokemon.name;
        pokemonEle.id=pokemon.pokemon.name;
        pokemonEle.addEventListener("click",displayPokByType)
    }); 
    typeAlikeEle.classList.remove("hide")
}
//remove element all childs
const removeAllChildren=(fatherEle)=>{
    while(fatherEle.firstChild){
        fatherEle.removeChild(fatherEle.lastChild);
    }
}
//change img to see back of pokemon
const lookBack=async()=>{
    try{
        back=pokemon.data.sprites.back_default;
        let img =document.getElementById("pokImg");
        img.setAttribute("src",back)
    }
    catch(error){
        console.error(error)
    }
}


//change img to see front of pokemon
const lookFront=async()=>{
    try{
        front=pokemon.data.sprites.front_default;
        let img =document.getElementById("pokImg");
        img.setAttribute("src",front);
        img.classList.remove("hide");

    }
    catch(error){
        console.error(error)
    }
}
document.getElementById("searchBtn").addEventListener("click",displayPok);
document.getElementById("pokImg")   .addEventListener("mouseover",lookBack);
document.getElementById("pokImg").addEventListener("mouseout",lookFront);
// document.getElementById("searchBtn").addEventListener("click",getPokemonByNameFetch);


