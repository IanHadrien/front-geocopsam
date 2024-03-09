import { Link } from "react-router-dom";
import SideBarDropdown from "./SidebarDropdown";
import SidebarLink from "./SidebarLink";
import './style.css';
// import Logo1 from '/images/logos/LogoMaxiTreeFleet-01.png';
// import Logo2 from '/images/logos/LogoMaxiTreeFleet-05.png';

// eslint-disable-next-line react/prop-types
export default function SideBar({ showSideBar }) {
    const adminRoutes = [
        '/maps',
        '/dashboard',
        '/users',
        '/platations',
        '/cultivations',
        '/areas-map',
    ]
    return (
        <div className={`min-h-screen bg-ds-verde ${!showSideBar && 'hidden'} md:block fixed top-0 z-50
        `}>
            <div id="navbar" className="sidebar min-h-screen w-52 md:w-[3.35rem] overflow-y-hidden hover:overflow-y-scroll hover:md:w-48 hover:shadow-lg">
                <div className="flex h-screen flex-col justify-between pb-6">
                    <div>
                        <div className="w-max px-2.5 flex items-center gap-1 pt-1">

                            {/* <img src={Logo1} className="h-9" alt="" /> */}
                            {/* <img src={Logo2} className="w-28 fill-white mt-1" alt="" /> */}
                            <p className="h-9 text-ds-verdec">GeoCopSam</p>
                        </div>
                        <ul className="mt-6 tracking-wide text-gray-600 text-xs">
                            {adminRoutes.map(item => (
                                typeof (item) === 'string'
                                    ? <SidebarLink key={`${item}`} routeName={item} />
                                    : <SideBarDropdown 
                                        key={`${item.name}`} 
                                        name={item.name} 
                                        routes={item.routes}
                                    />
                            ))}
                        </ul>
                    </div>
                    <div className="w-max -mb-3">
                        <Link className="group flex items-center space-x-5 rounded-md px-4 py-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs">
                                Configurações
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
