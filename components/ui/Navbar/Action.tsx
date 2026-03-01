import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Action = () => {
  return (
    <div className="flex flex-row-reverse gap-4 p-4 space-x-6  font-semibold tracking-widest max-h-full col-span-5 ">
      <Link href={"/"} className="col-span-2  ">
        Sign in
      </Link>

      <Link href={"/"} className="col-span-2 ">
        Sign Up
      </Link>
    </div>
  );
};

export default Action;
