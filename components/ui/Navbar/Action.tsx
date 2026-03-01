import Link from "next/link";
import { Button } from "../button";

const Action = () => {
  return (
    <div className="flex justify-center  p-3">
      <Button
        asChild
        className="rounded-full   font-semibold hover:bg-gray-200  transition delay-150 ease-in-out hover:-translate-y-1"
      >
        <Link href="/sign-in">Sign in</Link>
      </Button>

      <Button
        asChild
        className="rounded-full transition delay-150 ease-in-out hover:-translate-y-1  hover:bg-gray-800 hover:text-white font-semibold bg-black text-white"
      >
        <Link href="/sign-in">Sign up</Link>
      </Button>
    </div>
  );
};

export default Action;
