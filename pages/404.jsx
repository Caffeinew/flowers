import Logo from "../components/logo";

export default function Error() {
  return (
    <div className="h-screen grid place-items-center">
      <Logo />
      <div className="text-gray-700 flex items-center">
        <span className="p-4 text-3xl sm:text-5xl border-r border-gray-300">404</span>
        <span className="px-4 text-xl sm:text-3xl">Страница не найдена</span>
      </div>
    </div>
  );
}
