import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import routesData from './routesData';
// import usePermissions from '../../hooks/usePermissions';

// const userCan = (permission) => usePermissions(permission);

export default function DropDownLink({ routeName }) {
    const location = useLocation();
    const isActived = routeName.trim() === location.pathname.trim();

    const routeObj = routesData[routeName];

    // if (!userCan(routeObj?.permission)) return true;
    return (
        <Link className="navbar flex items-center text-zinc-400 w-full group/link hover:bg-azul-800"
            to={routeObj?.desatived ? null : routeObj?.route}
            onClick={(e) => routeObj?.desatived && e.preventDefault()}
        >
            {/* <Link className="navbar flex items-center text-white hover:text-white w-full group/link"
            to={routeObj.route}
        > */}
            <div className={`flex items-center w-full py-3 px-4 gap-1 space-x-5
                            ${isActived && "bg-azul-100 text-white font-medium"} `}
            >
                <span className="flex-shrink-0">
                    {routeObj?.icon && <routeObj.icon size={18} />}
                </span>
                <span className={`${routeObj?.desatived && 'text-azul-100 line-through'}`}>
                    {routeObj?.name}
                </span>
            </div>
        </Link>
    );
}

DropDownLink.defaultProps = {
    routeName: '',
};

DropDownLink.propTypes = {
    routeName: PropTypes.string,
};
