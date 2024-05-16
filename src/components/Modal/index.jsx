import ReactModal from 'react-modal';
import customModuleStyles from './customStyle';

// eslint-disable-next-line react/prop-types
export default function Modal({ children, isOpen, handleClose, title, icon, width=520 }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={customModuleStyles}
        >
            <div className={`sm:w-${width} w-full`}>
            {/* <div className='sm:w-520 w-full'> */}
                <div className='bg-white px-4 py-2 border-b'>
                    <div className='flex items-center'>
                        <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-200'>
                            <span className='text-azul-300'>{icon}</span>
                        </div>
                        <h2 className='pl-2 text-base font-semibold leading-6 text-gray-900'>
                            {title}
                        </h2>
                    </div>
                </div>
                {children}
            </div>
        </ReactModal>
    )
}
