import { roboto, bungee, satisfy } from "@/lib/fonts";
function Logo() {
  return (
    <a className={`min-w-40 min-h-8 border-2 rounded-md flex text-yellow-50 border-primary cursor-pointer ${satisfy.className}`}>
      <h1 className="p-1 mx-auto my-auto text-primary text-xs">FAVORITE MOVIES</h1>
    </a>
  );
}

export default Logo;
