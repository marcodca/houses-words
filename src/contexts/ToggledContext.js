import React, {useState, createContext} from 'react';

export const ToggledContext = createContext();

const ToggledContextProvider = ({children}) => {

    const [bannerToggled, setBannerToggled] = useState({ isToggled : false, banner : null});

    const setToggled = (house) => {
        setBannerToggled({isToggled : true, banner: house})
    }

    const setNotToggled = () => {
        setBannerToggled({...bannerToggled, isToggled : false})
    }

    return (
        <ToggledContext.Provider value={{setToggled, setNotToggled, bannerToggled}}>
            {children}
        </ToggledContext.Provider>
    )
}

export default ToggledContextProvider;