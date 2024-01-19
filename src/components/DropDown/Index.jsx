import { Transition } from '@headlessui/react';
import { Fragment, createContext, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DropDownContext = createContext();

// eslint-disable-next-line react/prop-types
function Dropdown({ children }) {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
}

// eslint-disable-next-line react/prop-types
function Trigger({ children }) {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
        </>
    );
}

// eslint-disable-next-line react/prop-types
function Content({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div
                className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                onClick={() => setOpen(false)}
            >
                <div className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}>{children}</div>
            </div>
        </Transition>
    );
}

// eslint-disable-next-line react/prop-types
function DropdownLink({ className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                `block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${className}`
            }
        >
            {children}
        </Link>
    );
}

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
