import Image from "next/image";
import Link from "next/link";
import house from "@/public/house.png";
import travelandlodging from "@/public/travelandlodging.png";
import plane from "@/public/plane.png";
import centralmass from "@/public/centralmass.gif";

export default function Travel() {
  return (
    <div>
      <div className="center">
      <Link href="../juliamiller">
        <h2>
          <Image src={house} className="w-1/10" alt="Go back"/><br/>
          Go back!
        </h2>
      </Link>
      <Image src={travelandlodging} className="center max-w-full" alt="Travel and Lodging"/>
      <br/>
      <h2>We have blocks at two (2) hotels for August 29-31!</h2>
      <br/>
      <p className="text-xl">
        Hampton Inn & Suites Worcester<br/>
        65 Prescott St<br/>
        Worcester, MA 01605<br/>
        <a href="https://www.hilton.com/en/attend-my-event/orhwohx-mnw-22041586-ae34-443b-b96c-24af12782e50/" target="_blank" rel="noopener noreferrer">
          Click here to book!
        </a>
      </p>
      <br/>
      <p className="text-xl">
        Hilton Garden Inn Worcester<br/>
        35 Major Taylor Blvd<br/>
        Worcester, MA 01608<br/>
        Be sure to use group code <i>MNZWB</i><br/>
        <a href="https://www.hilton.com/en/hotels/bedwogi-hilton-garden-inn-worcester/" target="_blank" rel="noopener noreferrer">
          Click here to book!
        </a>
      </p>

      <br/>
      <br/>

      <h2>If you would like to book elsewhere:</h2>
      <p className="text-xl">
        The venue is ~1 hour outside Boston, so we recommend finding accommodations in the Worcester area. There are Airbnbs in the area, and below are a few other good hotel options.
      </p>
      <br/>
      <p className="text-xl">
        Courtyard Worcester<br/>
        72 Grove St<br/>
        Worcester, MA 01605<br/>
      </p>
      <br/>
      <p className="text-xl">
        AC Hotel Worcester<br/>
        125 Front St<br/>
        Worcester, MA 01608
      </p>

      <br/>
      <br/>

      <Image src={plane} className="center max-w-3/10" alt="Plane"/>
      <h2>Flying into PVD?</h2>
      <p className="text-xl">We recommend driving to Worcester (~1 hour).</p>
      <br/>
      <h2>Flying into BOS?</h2>
      <p className="text-xl">
        We recommend driving to Worcester (~1 hour).<br/>
        However, if you&apos;re car-averse or public transit-inclined, the MBTA Commuter Rail is a wonderful option (~2 hours).
      </p>

      <Image src={centralmass} className="center max-w-full" alt="Central Mass Gif"/>
    </div>
    </div>
  );
}
