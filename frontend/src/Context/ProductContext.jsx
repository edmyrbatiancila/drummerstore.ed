import { createContext } from "react";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {


    const contextValue = {
        
    }
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;