/* const backendUrl = 'http://localhost:8080';  */
const backendUrl = 'https://server.luisangelfrausto.com'; 
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

      return createDish;
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
export async function createSection(name:string,item:any) {
  try{
    const response=await fetch(backendUrl+'/Sections/'+name,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
    });
    const createDish=await response.json();
    if (response.ok) {
      return createDish
    }
    }
    catch(error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      return error; // Propagar el error para ser manejado en el frontend si es necesario
    }

}
export async function createSubSection(item:any,table:string, id:string) {
  try{
    const response=await fetch(backendUrl+'/Sections/'+table+'/'+id,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
    const subsection=await response.json();
    if (response.ok) {
      return subsection
    } 
  }
  catch(error) {
    // Manejar errores de red u otras excepciones
    console.error('Fetch Error:', error);
    return error; // Propagar el error para ser manejado en el frontend si es necesario
  }
}
export async function updateDish(table:string,item:any,id:string){
  try{
    const response=await fetch(backendUrl+'/CRUD/'+table+'/'+id,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
       
    });
    const createDish=await response.json();

    if (response.ok) {
      return createDish
    } 
    }
    catch(error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      return error; // Propagar el error para ser manejado en el frontend si es necesario
    }
}
export async function updateSectionFunc(oldName:string,newName:string,id:string,item:any) {
  try{
    const response=await fetch(backendUrl+'/CRUD/'+oldName+'/'+newName+'/'+id,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(item),
    });
    const createDish=await response.json();
    if (response.ok) {
      return createDish
    } 
    }
    catch(error) {
      // Manejar errores de red u otras excepciones
      console.error('Fetch Error:', error);
      return error; // Propagar el error para ser manejado en el frontend si es necesario
    }

}
export async function deleteDish(table: string,id:string){
  try {
    const response = await fetch(backendUrl +'/CRUD/'+ table+'/'+id, {
      method: 'DELETE'
    });

    if (response.ok) {
      return 'The dish has been deleted successfully.'
    } 
  } catch (error) {
    // Manejar errores de red u otras excepciones
    console.error('Fetch Error:', error);
    return error; // Propagar el error para ser manejado en el frontend si es necesario
  }
}
export async function deleteSubsection(tableDelete:string,id:string,item:any) {
  try{
    const response=await fetch(backendUrl+'/Sections/'+tableDelete+'/'+id,{
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
export async function deleteSection(table:string,id:string) {
  try{
    const response=await fetch(backendUrl+'/Sections/section/'+table+'/'+id,{ 
        method:'DELETE',
  
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

//aun no usadas******************************************************


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






