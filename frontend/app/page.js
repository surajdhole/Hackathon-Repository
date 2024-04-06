"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center text-center">
      <Image
        src="/LogoIcon.svg"
        alt="Eco Path Logo"
        // className="dark:invert"
        className="my-4"
        width={100}
        height={24}
        priority
      />
      <h1 className="font-bold text-[32px] leading-10 my-4">
        {" "}
        Welcome to ECOPATH
      </h1>
      <p className="font-normal text-base my-4">
        Personalised solution for CO2 consumption and air pollution control,
        enhancing initial health and wellbeing
      </p>

      <div className="my-8 min-w-[350px]">
        <Link href="/signup">
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className="block w-full bg-primary rounded-lg py-[9px] pl-5 mt-5 text-md"
          >
            {" "}
            Continue{" "}
          </Button>
        </Link>
        <Link href="/login">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            className="block w-full border-grey text-white rounded-lg py-[9px] pl-5 mt-5 text-md"
          >
            {" "}
            Login{" "}
          </Button>
        </Link>
      </div>
    </main>
  );
}
