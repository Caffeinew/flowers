import { memo } from "react";

function Component({ children, styles }) {
  return (
    <div
      className={
        "w-full p-4 grid gap-2 justify-items-center xs:p-4 xs:gap-4 sm:grid-cols-2 sm:p-8 sm:gap-8 xl:gap-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:max-w-screen-2xl " +
        styles
      }
    >
      {children}
    </div>
  );
}

export const Grid = memo(Component)