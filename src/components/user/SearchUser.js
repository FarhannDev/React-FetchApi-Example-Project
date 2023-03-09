import React, { useRef } from "react";

export default function SearchUser({ title, searhValue, setSearchValue }) {
  const inputRef = useRef();
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={title}
        aria-label={title}
        ref={inputRef}
        value={searhValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
