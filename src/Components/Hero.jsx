import { useContext  } from 'react';
import UserContext from '../utils/UserContext';
import  HeroVideo  from '../assets/HeroVideo.mp4'
import { useSelector } from 'react-redux'
const Hero = () => {

    const {user} = useContext(UserContext);


    const cartItem = useSelector((store) => store.cart.items);
    return (
        <div className="w-full h-auto rounded-xl bg-slate-950 flex flex-wrap justify-evenly lg:flex-nowrap  lg:p-5 gap-10 ">
            <div className="w-full ">
                <div className="lg:px-5 lg:py-5">
                    <h1 className=" font-bold text-lg">Unreal Engine Games</h1>
                    <h1 className="py-2 text-5xl lg:text-7xl font-bold ">Everything you need to build new worlds</h1>
                    <p className="font-medium brightness-90 text-xl my-5 lg:my-14 lg:px-5 bg-gradient-to-r to-orange-400 from-rose-600   text-transparent bg-clip-text">Create compelling characters. Tell untold stories. Or let your audience explore a whole new world for themselves. Unreal Engine gives you unprecedented creative control over the entire production process, with 3D assets you can reuse across every phase of production—and beyond.</p>
                </div>
                <div className="flex justify-left px-2 lg:px-10 gap-5 lg:gap-10 flex-wrap ">
                    <button className="w-full lg:w-auto font-bold bg-blue-500 py-5 lg:py-3 px-6 rounded-md hover:bg-blue-400">Get Unreal</button>
                    <button className="w-full lg:w-auto font-bold bg-slate-900 py-5 lg:py-3 px-6 rounded-md hover:bg-slate-800">Explore Unreal-Engine Games</button>
                    <button className='mx-auto text-center bg-slate-700 py-2 px-8 rounded-xl font-bold relative'>Add Game <span className='px-2 rounded-full bg-blue-300 absolute -top-1 -right-2 text-center text-red-600 font-extrabolds text-xl'>{cartItem.length}</span></button>
                </div>
            </div>
            <div className="w-full py-4 lg:py-10 ">
                <video autoPlay loop muted className="w-full h-full object-cover rounded-xl" src={HeroVideo}></video>
                {/* <img className="rounded-xl" src="https://media.fab.com/image_previews/gallery_images/531eae09-8e5d-4081-b223-9f3035166d52/3d0f7a4b-ec77-4097-b3ba-87d99d74a7ab.jpg"/> */}
                {/* <img className="rounded-xl" src={ heroImage } /> */}
            </div>

            <div>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>

        </div>
    )
}
export default Hero;