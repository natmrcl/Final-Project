import React from "react";
import "./ImageSearch.css"

const ImageSearch = ({handleGetRequest}) => {
    
    return (

        <div className="imageSearch">
            <form onSubmit={handleGetRequest} className="imageSeacrh__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="search for images..." />
                <button>Search</button>
            </form>
        </div>
    )
}

export default ImageSearch

