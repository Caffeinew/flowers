import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState, useEffect, memo } from "react";
import {SideMenu} from "./sideMenu";
import { motion, AnimatePresence } from "framer-motion";
import { linear } from "../lib/transitions";

function Component({
  categories,
  selected,
  setSelected,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen) {
      document.documentElement.style.overflowY = "hidden";
      return
    }
    document.documentElement.style.overflowY = "auto";
  }, [isOpen])

  function handleVariant(variant) {
    if (selected.includes(variant)) {
      selected.splice(selected.indexOf(variant), 1);
    } else {
      selected.push(variant);
    }
    setSelected([...selected]);
  }

  return (
    <>
      <div className="w-full">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Категории
        </label>
        <button
          className="mt-1 w-full flex items-center justify-between py-2 px-3 rounded-md shadow-sm border border-gray-300 text-gray-500 sm:text-sm hover:bg-gray-50"
          name="category"
          onClick={() => setIsOpen(!isOpen)}
        >
          Выбрать
          <motion.span
            className="w-4 h-4"
            animate={{ rotate: isOpen ? "180deg" : 0 }}
            transition={linear}
          >
            <ChevronRightIcon />
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <SideMenu
            selected={selected}
            setIsOpen={setIsOpen}
            categories={categories}
            handleVariant={handleVariant}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export const Category = memo(Component)