import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
    image: string,
    height: number,
    width: number,
    top: number,
    left: number,
};

const initialState: ModalState = {
    image: '',
    height: 0,
    width: 0,
    top: 0,
    left: 0,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<ModalState> ) => {
            state.image = action.payload.image;
            state.height = action.payload.height;
            state.width = action.payload.width;
            state.top = action.payload.top;
            state.left = action.payload.left;
        },
    }
});

export const { setImage } = modalSlice.actions;

export default modalSlice.reducer;
