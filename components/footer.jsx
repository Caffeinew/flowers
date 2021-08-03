import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";
export default function footer() {
  return (
    <footer className="w-full bg-black text-gray-200 py-4 pr-8 text-right">
      <a href="https://prizmarine.agency" className="inline-flex items-center text-lg">
       <span>With</span>
       <HeartIcon className="w-6 h-6 mx-1" /> 
       <span className="mr-2">from</span> 
        <Image width={24} height={24} src="/prizmarine.svg" alt="prizmarine agency" />
      </a>
    </footer>
  );
}
