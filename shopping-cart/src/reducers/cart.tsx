import { type IProducts } from '../common/interfaces'

export const initialState: IProducts[] = JSON.parse(window.localStorage.getItem('cart') ?? '[]')

const updateLocalStorage = (state: IProducts[]): void => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: IProducts[], action: { type: string, payload: IProducts }): IProducts[] => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TO_CART': {
      const productInCartIndex = state.findIndex(item => item.id === payload.id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)

        newState[productInCartIndex].quantity = 1 + (newState[productInCartIndex].quantity ?? 0)
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }
    case 'REMOVE_FROM_CART':{
      const filtered = state.filter((item) => item.id !== payload.id)

      updateLocalStorage(filtered)
      return filtered
    }
    case 'CLEAR_CART':
      updateLocalStorage(initialState)
      return initialState
    default:
      console.log('Unknown action type', type)
  }
}
