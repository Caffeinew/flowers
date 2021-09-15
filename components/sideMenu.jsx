import { XIcon, CheckIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import { linear } from "../lib/transitions";

export default function SideMenu({
  selected,
  setIsOpen,
  categories,
  handleVariant,
}) {
  return (
    <>
      <motion.div
        className="fixed bg-black bg-opacity-20 z-40 inset-0 sm:backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={linear}
        onClick={(event) =>
          event.target === event.currentTarget && setIsOpen(false)
        }
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={linear}
        className="fixed z-50 right-0 top-0 bottom-0 bg-white w-full sm:w-2/3 md:w-1/2 xl:w-1/3 2xl:w-1/4 border-l p-4 md:p-8 shadow-xl overflow-y-scroll"
      >
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-xl text-gray-900">Категории</h1>
          <motion.span
            onClick={() => setIsOpen(false)}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 p-2 cursor-pointer text-gray-500"
          >
            <XIcon />
          </motion.span>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="border-t">
            <h2 className="p-2 block text-2xl text-gray-900">
              {category.name}
            </h2>
            {category.variants.map((variant, index) => (
              <h3
                className={
                  "pl-4 h-12 flex items-center justify-between cursor-pointer text-gray-500 rounded-xl " +
                  (index % 2 === 0 ? "bg-white" : " bg-gray-50")
                }
                key={variant.id}
                onClick={() => handleVariant(variant.name)}
              >
                {variant.name}
                <AnimatePresence>
                  {selected.includes(variant.name) && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckIcon className="w-10 h-10 p-2 text-gray-500" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </h3>
            ))}
          </div>
        ))}
      </motion.div>
    </>
  );
}
