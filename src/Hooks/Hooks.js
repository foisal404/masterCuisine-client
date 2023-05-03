const handlerRecipies=async(id)=>{
    const res= await fetch(`http://localhost:5000/chefs/${id}`)
    const details= await res.json();
    const {recipes}=details;

    const rec=await fetch('http://localhost:5000/recipies')
    const recipies= await rec.json();
    const recipie=[];
    for(let i of recipes){
        const pro=recipies.find(res=>res._id===i)
        recipie.push(pro)
    }
    return {details,recipie}


}
export default handlerRecipies;