import React from "react";
import SearchSvgJs from "../svgIcons/SearchSvgJs";
import XSvgJs from "../svgIcons/XSvgJs";

const SearchInput = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="Principal">
      <div>
        <div>Titulo</div>
        {show ? (
          <aside className="aside">
            <input type="text" />
            <button onClick={() => setShow(false)}>
              <XSvgJs />
            </button>
          </aside>
        ) : (
          <button onClick={() => setShow(true)}>
            <SearchSvgJs />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
