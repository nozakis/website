import Image from "next/image";
import Link from "next/link";
import house from "@/public/house.png";

export default function GoBack() {
  return (
    <Link href="../juliamiller">
      <h2>
        <Image
          src={house}
          className="centeredMedia w-[10%] max-w-[100px]"
          alt="Go back"
          loading="eager"
        />
        Go back!
      </h2>
    </Link>
  );
}
