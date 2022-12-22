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

    const remove = (itemId: string, actionId: string | undefined): string => {
        if (itemId === actionId) {
            for (let i in state) {
                if (itemId === state[i].id) {
                    console.log('Chegou aqui')
                    return i
                }
            }
        }

        return 'Cancel'
    }

    switch (action.type) {
        case 'ADD':
            if (action.payload?.name) {
                const newState = [...state]
                newState.push({
                    name: action.payload?.name,
                    id: uuidv4()
                });
                return newState
            }

            break;

        case 'DEL':
            let newState = [...state];
            for (let n in newState) {
                let indexOf: string | number = remove(newState[n].id, action.payload?.id)
                if (indexOf != "Cancel") {
                    indexOf = parseInt(indexOf)
                    newState.splice(indexOf, 1)
                    return newState
                }
            }

            break;

        case 'REORDER':
            let newReturn = [...state]
            newReturn = newReturn.sort((a, b) => (a.name.toLocaleLowerCase > b.name.toLocaleLowerCase) ? 1 : -1)

            return newReturn
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