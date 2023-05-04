const handlerRecipies=async(id)=>{
    const res= await fetch(`https://chef-recipe-hunter-server-foisal404.vercel.app/chefs/${id}`)
    const details= await res.json();
    const {recipes}=details;

    const rec=await fetch('https://chef-recipe-hunter-server-foisal404.vercel.app/recipies')
    const recipies= await rec.json();
    const recipie=[];
    for(let i of recipes){
        const pro=recipies.find(res=>res._id===i)
        recipie.push(pro)
    }
    return {details,recipie}


}
export default handlerRecipies;