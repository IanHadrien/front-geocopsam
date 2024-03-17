/* eslint-disable react/prop-types */
import { HiOutlinePlus } from "react-icons/hi";
import Tooltip from "../Tooltip/TooltipReact";
import { Link } from "react-router-dom";

export default function RegisterButton({ showButton, title, route }) {
    return (
        showButton && (
            <div className="fixed bottom-10 right-8 z-10">
                <Link
                    to={route}
                    id='registerButton'
                    className="bg-ds-verde hover:opacity-80 focus:bg-ds-verde active:bg-azul-500 focus:outline-none transition ease-in-out duration-150 text-white rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <HiOutlinePlus size={20} />
                </Link>
                <Tooltip anchorSelect="#registerButton" text={title} />
            </div>
        )
    );
}