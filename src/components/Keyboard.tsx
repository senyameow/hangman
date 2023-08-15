import React from "react"
import { Key } from "./Key"
import { useContext } from "react"
import { Context } from "../context/ContextProvider"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

 export type KeysType = {
    trueLetters: string[];
    falseLetters: string[]
  }

export const Keyboard = ({trueLetters, falseLetters} : KeysType ) => {

    // const {wordToGuess, }

    return (
        <div className="flex flex-wrap w-full gap-3 px-2 mx-auto pb-2">
            {KEYS.map((key, ind) => (
                <Key trueLetters={trueLetters} falseLetters={falseLetters} key={ind} l={key} />
            ))}
        </div>
    )
}

