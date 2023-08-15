import React from "react"
import { useContext } from "react"
import { Context } from "../context/ContextProvider"


type LetterType = {
    letter: string;
    color ?:string

}

export const Letter = ({letter, color = 'black'} : LetterType) => {

    const {guessedLetters, end} = useContext(Context)

    return (
        <div className="flex flex-col w-[60px] h-[50px] items-center justify-end">
            <span className={`${(guessedLetters.includes(letter) || end.loose || end.win) ? 'block' : 'hidden'} text-${color} ${(end.loose && !guessedLetters.includes(letter)) && 'text-red-500'}`}>{letter}</span>
            <div className="w-full">
                <div className="h-[7px] w-full bg-black" />
            </div>
        </div>
    )
}