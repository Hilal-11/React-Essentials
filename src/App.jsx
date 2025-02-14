import React, { lazy, Suspense , useEffect, useState } from 'react'
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'

// import MobileGames from './Components/Pages/MobileGames'
// import PcGames from './Components/Pages/PcGames'
// import ConsoleGames from './Components/Pages/ConsoleGames'
// import Simulations from './Components/Pages/Simulations'

import { Routes , Route } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp'
import GameMenu from './Components/Pages/GameMenu'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Atom } from 'react-loading-indicators'
import ShimmerUI from './Components/ShimmerUI'

// Lazy loading or demand paging

const MobileGames = lazy(() => import("./Components/Pages/MobileGames"));
const PcGames = lazy(() => import('./Components/Pages/PcGames'));
const ConsoleGames = lazy(() => import('./Components/Pages/ConsoleGames'))
const Simulations = lazy(() => import("./Components/Pages/Simulations"));
import UserContext from './utils/UserContext'
import Store from './utils/Store'

import { Provider } from 'react-redux'

export const App = () => {

  const [isLoading , setIsLoading] = useState(false)
  const [isLoged , setIsLoged] = useState(false)
  function receiveSignUpSignal(signal) {
      setIsLoged(signal)

      setTimeout(() => {
        setIsLoading(true)
      },Math.floor(Math.random() * 1000))
  }


  // const [userText , setUserText] = useState(UserContext)
   
  const [user , setUser] = useState({
    name : "Waseem Ahmad",
    email : "Waseem123@gmai.com"
  });




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
        <>
        <Provider store={Store}>
            <UserContext.Provider value={{user : user}}>
            <div className='bg-slate-950 h-auto text-white'>         
                <div className="">
                    <Header />
                </div>

                {/* <div>
                  <input type="text" placeholder='Enter username :- ' onChange={(event) => setUserText(event.target.value) } value={userText}/>
                  <input type="email" placeholder='Enter email :- ' onChange={(event) => setUserText(event.target.value) } value={userText}/>
                </div> */}

                <div>
                  <Routes>
                    <Route path='/GameMenu/:gameid' element={<GameMenu/>}></Route>
                  </Routes>
                </div>
              <Routes>
                <Route path='/' element={
                    <div className="">
                        <Body/>
                    </div>   
                }></Route>
                
                <Route path='MobileGames' element={<Suspense fallback={<ShimmerUI />}><MobileGames /></Suspense>}></Route>
                <Route path='PcGames' element={<Suspense fallback={<ShimmerUI />}><PcGames  /></Suspense>}></Route>
                <Route path='Console' element={<Suspense fallback={<ShimmerUI />}><ConsoleGames /></Suspense>}></Route>
                <Route path='Simulations' element={<Suspense fallback={<ShimmerUI />}><Simulations /></Suspense>}></Route>
              </Routes>
              <Footer />
          </div>
        </UserContext.Provider>
        </Provider>
    </>
      )
    )
  )
}
