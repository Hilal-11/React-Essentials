import { TbPasswordMobilePhone } from "react-icons/tb";
import { SiPcgamingwiki } from "react-icons/si";
import { GiConsoleController } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";

export const navigationLists = [
  {
    id : 1,
    label : "Mobile Games",
    to : "MobileGames",
    icon : <TbPasswordMobilePhone />

},
{
    id : 2,
    label : "PC Games",
    to : "PCGames",
    icon : <SiPcgamingwiki/>

},
{
    id : 3,
    label : "Console Games",
    to : "Console",
    icon : <GiConsoleController />

},
{
    id : 4,
    label : "Simulations",
    to : "Simulations",
    icon : <MdOutlineAnimation />
},
]






