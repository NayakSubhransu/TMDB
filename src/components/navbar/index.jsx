import { NavLink } from 'react-router-dom'

import './style.css'

const links = [
    {
        title: "Home",
        path: "/",
        icon: "home.png",
    },
    {
        title: "WatchList",
        path: "/watch-list",
        icon: "bookmark.png",
    },
];

const Navbar = () => {
    return (
        <div className="flex item-center bg-[#021e34] " >
            <img className="h-[50px] mt-3 mx-5" src="/cine.png" alt="TheMovieDB" />
            {links.map(link => (
                <div key={link.path} className='flex font-bold text-3xl mt-3 mx-3 items-center gap-2'>
                   
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                
                        }
                    >
                         <div className="flex items-center gap-2">
          <img className="h-6" src={link.icon} alt="" />
          <span>{link.title}</span>
      </div>
                    </NavLink>
                </div>
            ))}

        </div>
    )
}

export default Navbar;