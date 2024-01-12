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
    order: number[];
    subsections: Record<string, string[]>;
    dishes: Record<string, Dish[]>;
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
    dataSection?:Section;
   
}

interface ValueReducer{
    state: State; 
    callbackReducer: Dispatch<Action>;
}

export const MemoryContext = createContext<ValueReducer| null>(null);
  
const initialState:State={
    order:[],
    subsections:{},
    dishes:{}
}
const reducer=(state:State,action:Action):State =>{
    switch(action.type){
        case 'createSection':{
            let id=action.dataSection?.id as number;
            const orderList=[...state.order];
            if (action.dataSection?.id !== undefined) {
                orderList.push(action.dataSection.id);
                
            }
            
            const newState={
                order:[...orderList],
                subsections:{...state.subsections,[id]:[action.dataSection?.subsections]},
                dishes:{...state.dishes}
            };
            //console.log(newState);
            return newState;
        };
        case 'readSections':{
            const sectionsData = action.data1?.map(obj => obj.id).sort(function(a,b){return a-b}) ?? [];
            const subsectionsData=action.data1?.reduce((obj,data)=>({...obj,[data.id]:data.subsections.split(',')}),{}) ?? [];
            const newState={
                order:[...sectionsData],
                subsections:{...subsectionsData},
                dishes:{...state.dishes}
            };
            //console.log(newState);
            return newState;
        };
        case 'readDishes':{       
            
            const newState={
                order:[...state.order],
                subsections:{...state.subsections},
                dishes:{...state.dishes,...action.data2}
            };
            //console.log(newState)
            return newState;
        };
        case 'createSubsection':{
            let id=action.dataSection?.id as number;
            let subsections=action.dataSection?.subsections.split(',') as string[];
            const newState={
                order:[...state.order],
                subsections:{ ...state.subsections,[id]:[...subsections]},
                dishes:{...state.dishes}
            };
            //console.log(newState);
            return newState;
        };
        case 'delete':{
            const newState={
                order:[...state.order],
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