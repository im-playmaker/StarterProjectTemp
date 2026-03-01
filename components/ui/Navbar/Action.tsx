import Link from "next/link";
import { Button } from "../button";

const Action = () => {
  return (
    <div className="flex flex-row-reverse gap-4 p-4 space-x-6 col-span-5 ">
      <Button asChild className="rounded-full  hover:bg-gray-100 font-semibold">
        <Link href="/sign-in">Sign in</Link>
      </Button>

      <Button asChild className="rounded-full hover:bg-gray-100 font-semibold">
        <Link href="/sign-in">Sign up</Link>
      </Button>
    </div>
  );
};

export default Action;
