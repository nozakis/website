import Image from "next/image";
import Countdown from "./Countdown";
import headerPhoto from "@/public/headerphoto.png";
import rsvpGif from "@/public/rsvp.gif";
import Link from "next/dist/client/link";
import ExperienceTheMajesty from "./ExperienceTheMajesty";

const galleryPhotos = [
  "engaged.jpg",
  "bunnydog.jpg",
  "cabin.jpg",
  "marvinparty.jpg",
  "mountain.jpg",
  "marathon.jpg",
  "bay.jpg",
  "cooking.jpg",
  "eclipse.jpg",
  "hands.jpg",
  "maine.jpg",
  "muir.jpg",
  "posted.jpg",
  "prom.jpg",
  "us.jpg",
  "tandem.jpg",
];

export default function JuliaMiller() {
  return (
    <>
      <Image
        src={headerPhoto}
        alt="Header Photo"
        className="centeredMedia w-[75%] max-w-[1200px] mt-4"
        loading="eager"
      />
      <div className="pageColumn">
        <a
          href="https://www.zola.com/wedding/juliaandsamuel2025/rsvp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={rsvpGif}
            alt="RSVP"
            className="centeredMedia w-[65%]"
            unoptimized
          />
        </a>
        <h1>WHO? Samuel and Julia!</h1>
        <h1>WHAT? Wedding!</h1>
        <h1>WHEN? Saturday, August 30, 2025!</h1>
        <Countdown />
        <h1>WHERE? Harrington Farm, Princeton, MA!</h1>
        <p className="text-2xl">(~30 minutes outside Worcester, MA)</p>

        <br />
        <br />

        <h1>Three (3) things will happen this weekend!</h1>
        <h2>1. Welcome Drinks</h2>
        <p className="text-xl">
          <em>
            Friday, August 29, 2025
            <br />
            8:00pm - 10:00pm
          </em>
        </p>

        <p className="text-xl">
          <a
            href="https://maps.app.goo.gl/kCiYgcguWXrb9CBJ8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wachusett Brew Yard
            <br />
            152 Green St, Worcester, MA
          </a>
        </p>
        <p className="text-xl">
          We will host an evening welcome party at Wachusett Brew Yard.
        </p>
        <p className="text-xl">
          Be sure to get a bracelet as you enter to ensure that your drinks go
          on our tab! Both alcoholic and non-alcoholic beverages will be
          available.
        </p>
        <p className="text-xl">
          A small assortment of appetizers will be available and the food
          vendors in the public market will be open until 9:00.
        </p>
        <p className="text-xl">
          There is a small parking lot behind the brewery on Harding St and
          street parking on Harding and Green Sts. Uber and Lyft are also easily
          accessible.
        </p>

        <h2>2. The Wedding</h2>
        <p className="text-xl">
          <em>
            Saturday, August 30, 2025
            <br />
            4:30pm - 10:30pm
          </em>
        </p>
        <p className="text-xl">
          <a
            href="https://maps.app.goo.gl/kyWy4Dspj6fN7NKK8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harrington Farm
            <br />
            178 Westminster Rd, Princeton, MA
          </a>
        </p>
        <p className="text-xl">
          We will get married! We have no strict dress code, but, if you&apos;d
          like a guideline regardless, go for cocktail or garden party attire.
        </p>
        <p className="text-xl font-bold">
          <em>
            Shuttles will depart at 3:30 from the{" "}
            <a
              href="https://maps.app.goo.gl/zu3x8xQVfEGnCUjx7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hampton Inn and Suites
            </a>{" "}
            and the{" "}
            <a
              href="https://maps.app.goo.gl/tqXbDN6nBkMRtHMB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hilton Garden Inn
            </a>
            . Please be in the hotel lobby no later than 3:15! (more details can
            be found in the <Link href="../juliamiller/faqs">FAQs</Link>).
          </em>
        </p>
        <p className="text-xl">
          Please arrive at Harrington Farm no earlier than 4:15. Cocktail hour
          and reception to follow at the same venue.
        </p>
        <p className="text-xl">
          Shuttles will depart the reception at 9:00 and 10:45 and will make
          stops at both hotels.
        </p>
        <p className="text-xl">
          Afterparty to follow at{" "}
          <a
            href="https://maps.app.goo.gl/p9cicLWgN22sa9MN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Mercantile
          </a>
          !
        </p>

        <h2>3. Farewell Bagels in the Park</h2>
        <p className="text-xl">
          <em>
            Sunday, August 31, 2025
            <br />
            10:30am - 12:30pm
          </em>
        </p>
        <p className="text-xl">
          <a
            href="https://maps.app.goo.gl/7SBkbCSz1BBE1Y58A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Green Hill Park Pavilion
            <br />
            1259 Officer Manny Familia Wy, Worcester, MA
          </a>
        </p>
        <p className="text-xl">
          We will host a deeply informal farewell gathering at Green Hill Park.
        </p>
        <p className="text-xl">
          Join us for bagels, coffe, yogurt, and other snacks! Feel free to drop
          in and out as you please.
        </p>
        <p className="text-xl">
          There is also a free farm zoo within walking distance from the park
          pavilion.
        </p>

        <br />
        <br />

        <h1>Required Reading!</h1>
        <h2>
          <a
            href="https://www.zola.com/wedding/juliaandsamuel2025/registry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Registry
          </a>
        </h2>
        <h2>
          <Link href="../juliamiller/travel">Travel & Lodging Details</Link>
        </h2>
        <h2>
          <Link href="../juliamiller/faqs">Frequently Asked Questions</Link>
        </h2>
        <ExperienceTheMajesty />
      </div>
      <div id="gallery" className="gallery">
        {galleryPhotos.map((photo) => {
          const src = `/gallery/${photo}`;

          return (
            <a href={src} key={photo} target="_blank" rel="noopener noreferrer">
              <Image
                src={src}
                alt=""
                width={800}
                height={600}
                className="galleryimg"
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
