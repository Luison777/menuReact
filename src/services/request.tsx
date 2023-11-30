const backendUrl = 'http://localhost:3000'; 

export async function dishesRequest(table:string){
    const response=await fetch(backendUrl+table,{
        method:'GET',
       
    });
    const dishes=await response.json();
    return dishes;
}


export async function createDish(table:string,dish:string){
  try{
    const response=await fetch(backendUrl+table,{
        method:'POST',
        body:dish,
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const createDish=await response.json();
    if (response.ok) {
      return 'The dish has been created successfully.'
    } else {
      return 'Something wrong has occurred. Please try again.'
    }
    }
    catch(error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      throw error; // Propagar el error para ser manejado en el frontend si es necesario
    }
}

export async function updateDish(table:string,dish:string){
  try{
    const response=await fetch(backendUrl+table,{
        method:'PUT',
        body:dish,
        headers:{
            'content-type':'application/json; charset=utf-8'
        }
    });
    const createDish=await response.json();

    if (response.ok) {
      return 'The dish has been updated successfully.'
    } else {
      return 'Something wrong has occurred. Please try again.'
    }
    }
    catch(error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      throw error; // Propagar el error para ser manejado en el frontend si es necesario
    }
}

export async function deleteDish(table: string): Promise<string> {
    try {
      const response = await fetch(backendUrl + table, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        return 'The dish has been deleted successfully.'
      } else {
        return 'Something wrong has occurred. Please try again.'
      }
    } catch (error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      throw error; // Propagar el error para ser manejado en el frontend si es necesario
    }
  }
  