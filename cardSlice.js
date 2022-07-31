import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    card1: null,
    card2: null,
    card3: null,
}

export const cardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        assignCard1: (state, action) => {
            state.card1 += action.payload
        },
        assignCard2: (state, action) => {
            state.card2 += action.payload
        },
        assignCard3: (state, action) => {
            state.card3 += action.payload
        },
    },
})

export const { assignCard1, assignCard2, assignCard3 } = cardSlice.actions

export default cardSlice.reducer