import React from "react";

function SearchBar({ searchKeyword, handleSearch }) {
    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Cari catatan..."
                value={searchKeyword}
                onChange={handleSearch}
            />
        </div>

    );
}

export default SearchBar;