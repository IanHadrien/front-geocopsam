import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
// import { useQueryClient } from 'react-query';
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import routesData from './routesData';
import './style.css';
import DropDownLink from './DropdownLink';

export default function SideBarDropdown({ name, routes }) {
    const location = useLocation();
    // const queryClient = useQueryClient();
    const [isActive, setIsactive] = useState(false);

    // const { data } = queryClient.getQueryData("NewToken");

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        handleIsActive()
    }, [])

    const dropDownObj = routesData[name];

    const handleIsActive = () => {
        routes.forEach(item => {

            if (location.pathname.trim() === item.trim()) setIsactive(true)
        })
    }

    // const hasPermission = data?.permission.some(permission => dropDownObj?.permissions.includes(permission));

    // if (!hasPermission) return true;
    return (
        <div>
            <li className="min-w-max relative overflow-hidden group/dropdown">
                <input
                    id={`checkbox-${name}`}
                    type="checkbox" className="peer absolute cursor-pointer z-10 top-0 inset-x-0 w-full h-12 opacity-0"
                    checked={isActive}
                    onChange={() => setIsactive(!isActive)}
                />
                {isActive && <hr className='border-zinc-300' />}
                <div
                    htmlFor={`checkbox-${name}`}
                    className="relative flex items-center  space-x-5 bg-gradient-to-r px-4 py-3 w-full text-zinc-400 peer-hover:bg-azul-800"
                >
                    <span className='text-white'>{dropDownObj?.icon && <dropDownObj.icon size={18} />}</span>
                    <span className='flex space-x-4 items-center'>
                        <span className="text-white">{dropDownObj?.name}</span>
                        <span className={`flex-shrink-0 transition-transform text-white duration-500 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                            <IoIosArrowDown size={15} />
                        </span>
                    </span>

                </div>
                <div
                    id='drop-container'
                    className="overflow-hidden max-h-0 peer-checked:max-h-64 transition-all duration-500 ease-in-out"
                >
                    {routes.map(item => (
                        <DropDownLink key={`${item}`} routeName={item} />
                    ))}
                </div>
                {isActive && <hr className='border-zinc-300 mt-1' />}
            </li>
        </div>
    );
}

SideBarDropdown.defaultProps = {
    name: 'peer',
    routes: [],
};

SideBarDropdown.propTypes = {
    name: PropTypes.string,
    routes: PropTypes.array,
};
