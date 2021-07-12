import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Toilet Man",
        power: "Cleans Toilets",
        is_a_hero: "False",
        comics_appeared_in: "14",
        description: "Bald-headed like the Magic Eraser guy",
        back_story: "Like batman, but parents were killed by toilets."
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePower: (state, action) => { state.power = action.payload},
        chooseIsAHero: (state, action) => {state.is_a_hero = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePower, chooseIsAHero, } = rootSlice.actions;