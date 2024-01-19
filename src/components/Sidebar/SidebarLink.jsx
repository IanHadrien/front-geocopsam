import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import routesData from './routesData';
// import usePermissions from '../../hooks/usePermissions';

// const userCan = (permission) => usePermissions(permission);

export default function SidebarLink({ routeName }) {
    const location = useLocation();
    const handleCurrent = route => location.pathname === route
    const routeObj = routesData[routeName];
    
    // if (!userCan(routeObj?.permission))  return true;
    return (
        <li className="min-w-max">
            <Link className={`relative flex items-center space-x-5 bg-gradient-to-r px-4 py-3 group text-white
                ${handleCurrent(routeObj?.route) ? ' bg-azul-100 font-medium' : 'text-gray-600 hover:bg-azul-800'}`}
                to={routeObj?.desatived ? null : routeObj?.route}
                onClick={(e) => routeObj?.desatived && e.preventDefault()}
            >
                <span>{routeObj?.icon && <routeObj.icon size={18} />}</span>
                <span className={`${routeObj?.desatived && 'text-azul-100 line-through'}`}>
                    {routeObj?.name}
                </span>
            </Link>
        </li>
    );
}

SidebarLink.defaultProps = {
    routeName: '',
};

SidebarLink.propTypes = {
    routeName: PropTypes.string,
};

