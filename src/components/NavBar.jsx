import React from "react";

const NavBar = () => {
    return (


      <div className="border flex w-1/6 h-screen flex-col bg-white drop-shadow-xl"> 

            <h1 className="flex border h-fit w-full font-medium text-base p-2 justify-start items-center">
            <img className="m-1" width="30" height="30" src="https://img.icons8.com/cute-clipart/64/a.png" alt="a"/>Amberpass
            </h1>

            <div className="flex-wrap flex flex-col m-1">
                <p className="text-xs mt-10 font-thin w-fit m-1">MAIN</p>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/laptop-metrics--v2.png" alt="laptop-metrics--v2"/> Dashboard
                </button>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/compass--v1.png" alt="compass--v1"/>Discover
                </button>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="user-group-man-man"/>Users
                </button>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/squared-menu.png" alt="squared-menu"/>Applications
                </button>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/file--v1.png" alt="file--v1"/>pages
                </button>
            </div>


            <div className="flex-wrap flex flex-col m-1">
                <p className="text-xs mt-10 font-thin w-fit m-1">SECONDARY</p>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/customer-support--v1.png" alt="customer-support--v1"/>Support Center
                </button>

                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/inbox.png" alt="inbox"/>Inbox
                </button>
               
                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/opened-folder.png" alt="opened-folder"/>File Manager
                </button>
                
                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/list--v1.png" alt="list--v1"/>Data List
                </button>

            </div>
            <hr className="w-3/4 place-self-center m-4"/>
            <div className="flex-wrap flex flex-col m-1">
                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1"/>Settings
                </button>
                
                <button className="bg-white h-8 flex m-2 rounded text-xs p-2 hover:text-white hover:bg-secondary active:opacity-75 items-center">
                <img className="mr-1" width="20" height="20" src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1"/>Logout
                </button>
            </div>
        </div>

        
    );
}

export default NavBar;