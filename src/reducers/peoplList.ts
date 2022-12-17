import { useReducer, useState, ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid'

type actionType = {
    type: string
    payload?: {
        name?: string;
        id?: string;
    }
}

type Person = {
    id: string;
    name: string
}

const initialValue: Person[] = [];

const reduce = (state: Person[], action: actionType) => {

    switch (action.type) {
        case 'ADD':
            if (action.payload?.name) {
                const newState = [...state]
                newState.push({ 
                    name: action.payload?.name, 
                    id: '1561' 
                });
                return newState
            }            
            break;

        case 'DEL':
            console.log(state)
            break;

        case 'REORDER':
            console.log(state)
            break;
    }

    return state
}

export const stateInput = () => {
    return useState<string>('')


}

export const useList = () => {
    return useReducer(reduce, initialValue)
}