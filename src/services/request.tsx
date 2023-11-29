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

export async function deleteDish(table: string): Promise<string> {
    try {
      const response = await fetch(backendUrl + table, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        const data = await response.text();
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', data);
        return data; // Devolver la respuesta para usarla en el frontend
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      throw error; // Propagar el error para ser manejado en el frontend si es necesario
    }
  }
  