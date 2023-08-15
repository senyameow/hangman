import React from "react"
import { useContext } from "react"
import { Context } from "../context/ContextProvider"

const HEAD = (
    <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute ml-[190px] mb-[275px]" />
)
const BODY = (
    <div className="w-[10px] h-[100px] absolute ml-[190px] mb-[125px] bg-black" />
)
const RHAND = (
    <div className="w-[8px] h-[100px] absolute ml-[265px] mb-[185px] bg-black rotate-45" />
)
const LHAND = (
    <div className="w-[8px] h-[100px] absolute ml-[115px] mb-[185px] bg-black -rotate-45 " />
)
const LLEG = (
    <div className="w-[8px] h-[100px] absolute ml-[145px] -mb-[50px] bg-black rotate-25 " />
)
const RLEG = (
    <div className="w-[8px] h-[100px] absolute ml-[235px] -mb-[50px] bg-black -rotate-25 " />
)

const BODY_PARTS = [HEAD, BODY, RHAND, LHAND, LLEG, RLEG]


export const Drawing = () => {

    const {incorrectLetters} = useContext(Context)


    // console.log(incorrectLetters)

    return (
        <div className="relative flex justify-center items-center h-[500px] place-end w-full">
            {
                BODY_PARTS.slice(0, incorrectLetters.length) // верни мне список из сначала 0 элементов, потом 1 2 3 и т.д 
            }
            {/* {HEAD}
            {BODY}
            {LHAND}
            {RHAND}
            {LLEG}
            {RLEG} */}
            <div className="h-[10px] w-[250px] bg-black absolute mt-[400px]" />
            <div className="h-[400px] w-[10px] bg-black absolute" />
            <div className="h-[10px] w-[100px] bg-black absolute mb-[410px] ml-[90px]" />
            <div className="h-[50px] w-[10px] bg-black absolute ml-[190px] mb-[370px]" />
        </div>  // эта штука не будет меняться, мы ее сразу и написали, но нам надо будет показывать элементы динамически, когда нажимаем на клавиши
        // поэтому лучше сделать отдельные переменные под все части тела
    )
}