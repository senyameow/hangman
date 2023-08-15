import React, { createContext, useCallback, useState } from "react";
import words from '../wordList.json'
import { PropsWithoutRef } from "react";



export const Context = createContext<any>({})


type ThemeContextProviderProps = {
    children: React.ReactNode,
}

type endType = {
    win: boolean;
    loose: boolean;
}

const ContextProvider = ({children}: ThemeContextProviderProps) => {

    const [wordToGuess, setWordToGuess] = useState<string>(() => { // нам надо хранить слово, которое будем угадывать - стейт, при этом сразу запихнем функцию
        //которая сможет рандомно сувать слово из списка
        return words[Math.floor(Math.random() * words.length)]
    })

    // const [GL, setGL] = useState<string[]>([])

    const [end, setEnd] = useState<endType>({
        win: false,
        loose: false,
    })

    //следующий стейт, который нам нужен - это стейт, который хранит буквы, которые мы угадываем

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])


    const incorrectLetters = guessedLetters.filter(l => !wordToGuess.split('').includes(l))

    const addGuessedLetter = useCallback((key : string) => {

        checkEnd()

        if (guessedLetters.includes(key) || end.loose || end.win) return // если выиграли или проиграли ретёрним тоже (не хотим, чтобы буквы добавлялись)

        console.log(end)

        setGuessedLetters(currentLetters => [...currentLetters, key]) // можно сказать делаем снэпшот предыдущего состояния guessedLetters и добавляем к нему букву, которую сейчас нажали

    }, [guessedLetters]) // useCallback тут никак не помогает


    const checkEnd = () => {
        if (incorrectLetters.length === 5) {
            setEnd(
                {
                    win: false,
                    loose: true
                }
            )
        } else if (incorrectLetters.length !== wordToGuess.length && wordToGuess.split('').every(l => guessedLetters.includes(l))) {
            setEnd(
                {
                    win: true,
                    loose: false
                }
            )
        }

        console.log('checked!')
        return
    }


    // const addGuessedLetter2 = (key : string) => {

    //     if (guessedLetters.includes(key) || end.loose || end.win) return  

    //     console.log('function rerender')

    //     setGuessedLetters(currentLetters => [...currentLetters, key])
    // }



    // const isEnd = () => {
        
    // }
    
    const value = {
        wordToGuess,
        end,
        setEnd,
        setGuessedLetters,
        guessedLetters,
        incorrectLetters,
        addGuessedLetter,     

    }

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export default ContextProvider;