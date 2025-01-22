import React, { useEffect, useState } from 'react'
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MobileGames from './Components/Pages/MobileGames'
import PcGames from './Components/Pages/PcGames'
import ConsoleGames from './Components/Pages/ConsoleGames'
import Simulations from './Components/Pages/Simulations'
import { Routes , Route } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp'
import GameMenu from './Components/Pages/GameMenu'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Atom } from 'react-loading-indicators'
export const App = () => {

  const [isLoading , setIsLoading] = useState(false)
  const [isLoged , setIsLoged] = useState(false)
  function receiveSignUpSignal(signal) {
      setIsLoged(signal)

      setTimeout(() => {
        setIsLoading(true)
      },Math.floor(Math.random() * 1000))
  }


  const [c_game , set_c_game] = useState(null);
    function newRecevedGame(clickedGame) {
      set_c_game(clickedGame)
    }

  return (
    (!isLoged) ? (
      <SignUp signUpSignal={receiveSignUpSignal}/>
    ) :
    (
      !isLoading ? (
        <div className='w-full h-svh bg-slate-950 text-white flex justify-center items-center '>
          <Atom color="#ffffff" size="large" text="" textColor="#NaNNaNNaN" />
        </div>
      ) : (
        <div className='bg-slate-950 h-auto text-white'>
        <div className="">
            <Header />
        </div>
      <Routes>
        <Route path='/' element={
            <div className="">
                <Body onGameClick={newRecevedGame}/>
            </div>   
        }></Route>
        <Route path='MobileGames' element={<MobileGames />}></Route>
        <Route path='PcGames' element={<PcGames />}></Route>
        <Route path='ConsoleGames' element={<ConsoleGames />}></Route>
        <Route path='Simulations' element={<Simulations />}></Route>
        <Route path='GameMenu/:id' element={<GameMenu paramsGame={c_game}/>}></Route>

      </Routes>
      <Footer />
    </div>
      )

    )
  )
}
