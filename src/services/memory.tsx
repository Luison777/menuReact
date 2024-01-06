"use client"

import { Dispatch,  useReducer } from "react"
import { createContext } from "react"
interface Dish{
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;
}

interface State {
    sections: string[];
    subsections: Record<string, string[]>;
    dishes: Record<string, Record<string, any>>;
  }
  
interface Section {
    id: number;
    name: string;
    subsections:string;
  
  }

interface Action{
    type:string;
    data1?:Section[]; 
    data2?:Record<string,Dish[]>;
}

interface ValueReducer{
    state: State; 
    callbackReducer: Dispatch<Action>;
}

export const MemoryContext = createContext<ValueReducer| null>(null);
  
const initialState:State={
    sections:[],
    subsections:{},
    dishes:{}
}
const reducer=(state:State,action:Action):State =>{
    switch(action.type){
        case 'create':{
            const newState={
                sections:[...state.sections],
                subsections:{...state.subsections},
                dishes:{...state.dishes}
            };
            return newState;
        };
        case 'readSections':{
            const sectionsData = action.data1?.map(obj => obj.name.replace(/[^a-zA-Z_/]/g, '').toLowerCase()) ?? [];
            const subsectionsData=action.data1?.reduce((obj,data)=>({...obj,[data.name.replace(/[^a-zA-Z_/]/g, '').toLowerCase()]:data.subsections.split(',')}),{}) ?? [];
            const newState={
                sections:[...sectionsData],
                subsections:{...subsectionsData},
                dishes:{...state.dishes}
            };
            console.log(newState);
            return newState;
        };
        case 'readDishes':{        
            const newState={
                sections:[...state.sections],
                subsections:{...state.subsections},
                dishes:{...state.dishes,...action.data2}
            };
            //console.log(newState)
            return newState;
        };
        case 'update':{
            const newState={
                sections:[...state.sections],
                subsections:{...state.subsections},
                dishes:{...state.dishes}
            };
            return newState;
        };
        case 'delete':{
            const newState={
                sections:[...state.sections],
                subsections:{...state.subsections},
                dishes:{...state.dishes}
            };
            return newState;
        };
        default:{console.log('ninguna accion reducer se ha ejecutado');
        return state}
    }
}
function MemoryComponent({children,}: {children: React.ReactNode }){
    const[state,callbackReducer]=useReducer(reducer,initialState);
    return <MemoryContext.Provider value={{ state, callbackReducer }} >{children}</MemoryContext.Provider>
    

}

export default MemoryComponent;