import Image from "next/image";
import centralMassGif from "@/public/centralmass.gif";

export default function ExperienceTheMajesty() {
  return (
    <Image
      src={centralMassGif}
      className="centeredMedia w-full"
      alt="Central Mass Gif"
      unoptimized
    />
  );
}
