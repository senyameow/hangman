import './index.css'
import React from 'react'

import { useContext, useEffect } from 'react'
import { Context } from './context/ContextProvider'
import { Finish } from './components/Finish'
import { Drawing } from './components/Drawing'
import { Word } from './components/Word'
import { Keyboard } from './components/Keyboard'




function App() {

  const {end, guessedLetters, addGuessedLetter, wordToGuess, incorrectLetters} = useContext(Context)

  useEffect(() => {

    console.log('RERENDER USEEFFECT')

    const pressHandler = (e: KeyboardEvent) => {
      
      e.preventDefault()

      console.log('rerender handler')
      console.log(end)

      const key = e.key
      if (!key?.match(/^[a-z]$/)) return // match returns an array containing all of the matches, including capturing groups, or null if no match is found.

      addGuessedLetter(key)

      console.log(key, guessedLetters)

    }

    document.addEventListener('keypress', pressHandler)

    return () => {
      document.removeEventListener('keypress', pressHandler)
    }

  }, [guessedLetters]) // вот так мы добавляем слушатель на клаву (не забываем про очистку ретёрном)

  // штука про юзэффект!! если мы оставляем депенденсы пустыми, то происходит следующее:
  // 1. компонент загрузился
  // 2. тригерится юзэффект
  // 3. создает функцию хэндлер
  // 4. на документ вешает слушатель с этой функцией
  
  // 5. мы нажимаем на кнопку => тригерится хэндлер, проверяет чтобы кнопка была буквой (если нет, то дальше не идет), и вызывает функцию addGuessedLetter
  // 6. но у guessedLetters начальное значение [] и оно попросту не обновляется (каждый раз пустое значение списка)
  

  //чтобы это фиксануть, надо добавить в зависимости guessedLetters, тогда он будет функция будет добавлять в список букву и юзэффект будет тригериться => будет обновляться список


  return (
    <>
      <div className='max-w-[900px] mx-auto items-center h-screen flex flex-col gap-[2rem]'>
          {end.win && <Finish text={'GOOD JOB!'} />}
          {end.loose && <Finish text={'Nice try!'} />}
          <Drawing />
          <Word />
          <Keyboard trueLetters={guessedLetters.filter((letter : string) => wordToGuess.split('').includes(letter))} falseLetters={incorrectLetters} />
      </div>
    </>
  )
}

export default App
