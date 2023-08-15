import React from "react"
import { useContext } from "react"
import { Context } from "../context/ContextProvider"
import { Letter } from "./Letter"


export const Word = () => {

    const {wordToGuess, guessedLetters, end} = useContext(Context)

    return (
        <div className="flex gap-[1rem] text-[4rem] font-bold uppercase mt-[3rem] ">
            {wordToGuess.split('').map((letter :string, ind : number) => (
                <Letter key={ind} letter={letter} />
            ))}
            {/* {end.loose && wordToGuess.split('').map((letter : string , ind : number) => (
                <Letter key={ind} letter={letter} color='red-500' />
            ))} */}
        </div>
    )
}