import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    card1: 1,
    card2: 1,
    card3: 1,
    card4: 1,
    card5: 1,
    card6: 1,
    card7: 1,
    card8: 1,
    card9: 1,
    card10: 1,
}

export const cardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        assignCard1: (state, action) => {
            state.card1 = action.payload
        },
        assignCard2: (state, action) => {
            state.card2 = action.payload
        },
        assignCard3: (state, action) => {
            state.card3 = action.payload
        },
        assignCard4: (state, action) => {
            state.card4 = action.payload
        },
        assignCard5: (state, action) => {
            state.card5 = action.payload
        },
        assignCard6: (state, action) => {
            state.card6 = action.payload
        },
        assignCard7: (state, action) => {
            state.card7 = action.payload
        },
        assignCard8: (state, action) => {
            state.card8 = action.payload
        },
        assignCard9: (state, action) => {
            state.card9 = action.payload
        },
        assignCard10: (state, action) => {
            state.card10 = action.payload
        },
    },
})

export const { assignCard1, assignCard2, assignCard3, assignCard4, assignCard5, assignCard6, assignCard7, assignCard8, assignCard9, assignCard10 } = cardSlice.actions

export default cardSlice.reducer