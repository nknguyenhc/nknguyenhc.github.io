import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ImageModalState = {
    image: string,
    height: number,
    width: number,
    top: number,
    left: number,
};

const initialImageModalState: ImageModalState = {
    image: '',
    height: 0,
    width: 0,
    top: 0,
    left: 0,
};

type TextModalState = {
    text: string,
};

const initialTextModalState: TextModalState = {
    text: '',
};

const imageModalSlice = createSlice({
    name: 'imageModal',
    initialState: initialImageModalState,
    reducers: {
        setImage: (state, action: PayloadAction<ImageModalState> ) => {
            state.image = action.payload.image;
            state.height = action.payload.height;
            state.width = action.payload.width;
            state.top = action.payload.top;
            state.left = action.payload.left;
        },
    }
});

const textModalSlice = createSlice({
    name: 'textModal',
    initialState: initialTextModalState,
    reducers: {
        setText: (state, action: PayloadAction<TextModalState>) => {
            state.text = action.payload.text;
        },
    },
})

export const { setImage } = imageModalSlice.actions;

export const { setText } = textModalSlice.actions;

export const imageModalReducer =  imageModalSlice.reducer;

export const textModalReducer = textModalSlice.reducer;
