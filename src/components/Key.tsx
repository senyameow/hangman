import React from "react"
import { useContext } from "react"
import { Context } from "../context/ContextProvider"


type KeyType = {
    l: string;
    trueLetters: string[]
    falseLetters: string[]
}

export const Key = ({l, trueLetters, falseLetters} : KeyType) => {

    const {guessedLetters, incorrectLetters, addGuessedLetter, end} = useContext(Context)

    return (
        <button onClick={() => {
            addGuessedLetter(l)
            console.log(guessedLetters)
            console.log(incorrectLetters)
        }} className={`w-[55px] h-[55px] flex justify-center items-center text-[2rem] font-bold border-2 border-black hover:bg-gray-100 ${trueLetters.includes(l) && 'bg-lime-500 text-white cursor-default hover:bg-lime-500'} ${falseLetters.includes(l) && 'opacity-[.3] disabled cursor-default hover:bg-white'} ${(end.win || end.loose) && 'hover:bg-white' }`}
        disabled = {end.win || end.loose}>
            {l}
        </button>
    )
}