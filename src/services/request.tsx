const backendUrl = 'http://localhost:8080'; 

export async function readData(table:string){
    const response=await fetch(backendUrl+table,{
        method:'GET',
       
    });
    const data=await response.json();
    return data;
  }
export async function postLogin(url: string, item: any) {
  try {
    const response = await fetch(backendUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      // Si la solicitud es exitosa, extraer el token del cuerpo de la respuesta
      const responseData = await response.json();
      const token = responseData.token; // Ajusta la propiedad de la respuesta que contiene el token

      localStorage.setItem('token', token);

      return true;
    } else {
      return false
    }
  } catch (error) {
    // Manejar errores de red u otras excepciones
    console.error('Fetch Error:', error);
    throw error; // Propagar el error para ser manejado en el frontend si es necesario
  }
}
export async function postVerify(url: string, item: any) {
  try {
    const response = await fetch(backendUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      return true;
    } else {
      return false
    }
  } catch (error) {
    // Manejar errores de red u otras excepciones
    console.error('Fetch Error:', error);
    throw error; // Propagar el error para ser manejado en el frontend si es necesario
  }
}
export async function createDish(table:string,dish:any){
  try{
    const response=await fetch(backendUrl+'/CRUD/'+table,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(dish),
    });
    const createDish=await response.json();
    if (response.ok) {
      console.log(createDish);
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

//aun no usadas******************************************************


export async function updateDish(table:string,dish:FormData){
  try{
    const response=await fetch(backendUrl+table,{
        method:'PUT',
        body:dish,
       
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

export async function imgRequest(resource: string): Promise<Blob> {
    try {
      const response = await fetch(backendUrl + '/images/' + resource);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.blob();
    } catch (error) {
      console.error('Error fetching the image:', error);
      throw error;
    }
  }

export async function createSection(section:FormData,id:string) {
    try{
      const response=await fetch(backendUrl+'/sections/'+id,{
        method:'POST',
        body:section
      })
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
export async function post(url:string,item:any) {
  try{
    const response=await fetch(backendUrl+url,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
    });
    const createDish=await response.json();
    if (response.ok) {
      return 'The section has been created successfully.'
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

export async function put(url:string,item:any) {
  try{
    const response=await fetch(backendUrl+url,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
    });
    const createDish=await response.json();
    if (response.ok) {
      return 'The section has been created successfully.'
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

export async function deleteSection(url:string) {
  try{
    const response=await fetch(backendUrl+url,{
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
    });
    const createDish=await response.json();
    if (response.ok) {
      return 'The section has been created successfully.'
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

export async function deleteSubsection(url:string,item:any) {
  try{
    const response=await fetch(backendUrl+url,{
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
    });
    const createDish=await response.json();
    if (response.ok) {
      return 'The section has been created successfully.'
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