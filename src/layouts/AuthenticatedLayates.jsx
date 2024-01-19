import { useState } from "react";
import SideBar from "../components/SideBar/Sedebar"
import { Outlet } from "react-router-dom";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Dropdown from "../components/DropDown/Index";
import { HiUser } from "react-icons/hi";

export default function AuthenticatedLayout() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleClose = () => {
    setShowSideBar(false);
  }

  console.log('Authenticated')
  return (
    <div className="flex w-full bg-branco-50" style={{ marginBottom: "-8px" }}>
          <SideBar />

          {/* SideBar-Mobile */}
          {showSideBar &&
              <div className="relative flex z-20 md:hidden mobilebar">
                  <button type='button' onClick={handleClose} className="fixed inset-0 w-full right-0 z-20 bg-gray-400 bg-opacity-75 opacity-100" />

                  <div className="fixed inset-0 z-20 flex w-1/3">
                      <SideBar showSideBar={showSideBar} />
                      <div className="w-14 flex-shrink-0" />
                  </div>
              </div>
          }

          <div className="flex flex-col w-full h-[100vh]">

              {/* TopBar */}
              <div id='topbar' className='pl-10 flex w-full items-center justify-between top-0 h-[45px] flex-shrink-0 md:bg-white bg-azul-700 shadow'>
                  <div className='flex items-center'>
                      <button
                          onClick={() => setShowSideBar(true)}
                          data-drawer-target="default-sidebar"
                          data-drawer-toggle="default-sidebar"
                          aria-controls="default-sidebar" type="button"
                          className="inline-flex items-center p-2 text-white md:text-gray-500 rounded-lg md:hidden h-12 hover:bg-gray-100 focus:outline-none 
                          focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                      >
                          <span className="sr-only">Open sidebar</span>
                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                          </svg>
                      </button>

                      {/* <HeaderTitle /> */}
                  </div>

                  <div className="sm:flex sm:items-center sm:ml-6">
                      <button
                          className='me-3 text-white md:text-gray-500 md:hover:text-gray-700 hidden sm:block'
                          // onClick={() => handleToggleFullScreen()}
                      >
                          <FaExpandArrowsAlt title="Alterar modo" />
                      </button>
                      <div className="mr-3 relative z-50">
                          <Dropdown>
                              <Dropdown.Trigger>
                                  <span className="inline-flex rounded-md">
                                      <button
                                          type="button"
                                          className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-azul-200 focus:ring-offset-2inline-flex px-3 py-1 border border-gray-200 leading-4 font-medium text-white md:text-gray-500 hover:text-gray-700 transition ease-in-out duration-150"
                                      >
                                          <div className='flex-shrink-0'>
                                              <span>
                                                  <span className='mb-3'><HiUser size={20} /></span>
                                              </span>
                                          </div>

                                          <svg
                                              className="ml-2 -mr-0.5 h-4 w-4"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                          >
                                              <path
                                                  fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                              />
                                          </svg>
                                      </button>
                                  </span>
                              </Dropdown.Trigger>

                              <Dropdown.Content>
                                  <Dropdown.Link to="/profile">Meu perfil</Dropdown.Link>
                                  <Dropdown.Link 
                                  // onClick={() => mutateLogout()}
                                  >
                                      Sair
                                  </Dropdown.Link>
                              </Dropdown.Content>
                          </Dropdown>
                      </div>
                  </div>
              </div>


              <main className='bg-branco-50 md:pl-12 flex-grow-1 overflow-y-auto'>
                  <Outlet />
              </main>
          </div>
          {/* <ProfileModal userData={userdata.data} handleCloseModal={handleCloseModal} modalIsOpen={modalIsOpen} /> */}
      </div>
  )
}
