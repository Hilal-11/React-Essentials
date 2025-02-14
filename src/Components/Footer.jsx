import  { useContext } from 'react'
import UserContext from '../utils/UserContext';
const Footer = () => {

    const {user} = useContext(UserContext);

    return  (
        <div className='w-full h-[700px] bg-slate-900 shadow-inner'>
            <p className='text-center text-3xl'>Footer</p>

            <div>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>
        </div>
    )
}

export default Footer;