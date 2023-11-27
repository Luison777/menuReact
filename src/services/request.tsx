const backendUrl = 'http://localhost:3000'; 

export async function dishesRequest(table:string){
    const response=await fetch(backendUrl+table,{
        method:'GET',
       
    });
    const dishes=await response.json();
    return dishes;
}


export async function createDish(table:string,dish:string){
    const response=await fetch(backendUrl+table,{
        method:'POST',
        body:dish,
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const createDish=await response.json();
    //console.log('meta creada',metaCreada);
    return createDish;
}

export async function updateDish(table:string,dish:string){
    const response=await fetch(backendUrl+table,{
        method:'PUT',
        body:dish,
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const createDish=await response.json();
    //console.log('meta creada',metaCreada);
    return createDish;
}
/*
export async function actualizarMeta(meta,id){
    const response=await fetch(`/api/metas/${id}`,{
        method:'PUT',
        body:JSON.stringify(meta),
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const metaActualizada=await response.json();
    //console.log('meta actualizada',metaActualizada);
    return metaActualizada;
}
export async function borrarMeta(id){
   await fetch(`/api/metas/${id}`,{
        method:'DELETE'
    });
    
    console.log('meta borrada',id);
  
}*/