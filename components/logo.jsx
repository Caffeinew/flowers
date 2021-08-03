import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="absolute w-full text-center sm:w-auto sm:text-left sm:left-8 top-4 text-4xl z-10 font-light">WeLoveFlowers</a>
    </Link>
  );
}
