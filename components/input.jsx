import { SearchIcon } from "@heroicons/react/outline";
import { memo } from "react";

function Component({ item, state, setState }) {
  return (
    <div className="w-full">
      <label
        htmlFor={item.type}
        className="block text-sm font-medium text-gray-700"
      >
        {item.name}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {item.type === "price" ? (
            <span className="text-gray-500 sm:text-sm">До</span>
          ) : (
            <SearchIcon className="text-gray-500 w-4 h-4" />
          )}
        </div>
        <input
          type="text"
          name={item.type}
          className="focus:ring-blue-400 focus:border-blue-400 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder={item.placeholder}
          value={state}
          onChange={(event) => setState(event.target.value.toLocaleLowerCase())}
        />
        {item.type === "price" && (
          <div className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500 sm:text-sm">
            &#8381;
          </div>
        )}
      </div>
    </div>
  );
}

export const Input = memo(Component)