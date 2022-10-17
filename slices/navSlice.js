import { createSlice } from '@reduxjs/toolkit'

const initialState = { origin: null, destination: null, travelTimeInformation: null }

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin(state, action) {
      state.origin = action.payload
    },
    setDestination(state, action) {
      state.destination = action.payload
    }, 
    setTravelTimeInformation(state, action) {
      state.setTravelTimeInformation = action.payload
    }
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions


// Selectors
export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation

// component -> action -> reducer -> slice1 in store -> slice1a in store

export default navSlice.reducer
