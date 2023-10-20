import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
    image: string,
};

const initialState: ModalState = {
    image: '',
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<string> ) => {
            state.image = action.payload;
        }
    }
});

export const { setImage } = modalSlice.actions;

export default modalSlice.reducer;
