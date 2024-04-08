import Image from "next/image";

export default function LeftLogo() {
  return (
    <>
      <Image
        src="/LogoIcon.svg"
        alt="Eco Path Logo"
        // className="dark:invert"
        className="mb-10 text-left"
        width={41}
        height={41}
        priority
      />
    </>
  );
}
