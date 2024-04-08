import Image from "next/image";

export default function AirPSummary() {
  return (
    <div className="flex flex-col border-input border-2 min-w-40 max-h-40 rounded-lg p-4 mb-4">
      <div className="flex flex-row flex-start">
        <p className="font-medium text-base pb-3">Air Pollution: Low</p>
      </div>

      <p className="font-medium text-[10px] text-grey pb-4"> SCALE: UNITED KINGDOM (DAQI) </p>

      <p className="pb-4">
        Air quality index is 2, which is smaller to yesterday at about this time
      </p>

      <div className="mb-4">
           <Image
        src="/test.png"
        alt="Air Quality Index"
        // className="dark:invert"
        className="mb-10 text-center items-center pb-4 mb-10"
        width={314}
        height={30}
        priority
      />
      </div>

   
    </div>
  );
}
