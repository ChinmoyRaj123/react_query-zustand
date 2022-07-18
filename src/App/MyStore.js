// import React from 'react';
import create from 'zustand';
import produce from 'immer';
import { devtools, persist } from 'zustand/middleware'

const myStore = (set) => ({
    myData: [],
    setMyData: (myData) => set((state) => ({ myData: { ...state, myData } })),
})

const useMyStore = create(
    devtools(
        persist(myStore, {
            name: "myData",
        })
    )
)

export default useMyStore;
