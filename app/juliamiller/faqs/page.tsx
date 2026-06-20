import Link from "next/link";
import Image from "next/image";
import faqs from "@/public/faqs.png";
import ExperienceTheMajesty from "../ExperienceTheMajesty";
import GoBack from "../GoBack";

export default function Faqs() {
  return (
    <div>
      <div className="pageColumn">
        <GoBack />
        <Image
          src={faqs}
          alt="FAQs"
          className="centeredMedia w-[80%] max-w-[1200px]"
          loading="eager"
        />

        <h2>What&apos;s the dress code?</h2>
        <p className="text-xl">
          Nothing strict, but if you want a guideline aim for garden party or
          cocktail attire. Have fun with it!
        </p>
        <p className="text-xl">
          The ceremony and cocktail hour will be outdoors, weather permitting,
          and the reception will be indoors (with AC). Be prepared for humid
          weather and for walking on grass.
        </p>

        <br />

        <h2>What&apos;s the shuttle itinerary?</h2>
        <p className="text-xl">
          Our shuttle will pick passengers up at the Hampton Inn and Suites and
          the Hilton Garden Inn at around 3:30pm and will arrive at Harrington
          Farm at 4:15pm.
        </p>
        <p className="text-xl">
          We will have 2 return shuttle trips, one at 9:00pm, and a second at
          the end of the event at 10:30pm.
        </p>

        <br />

        <h2>How should I get there? Where should I stay?</h2>
        <p className="text-xl">
          Please consult the{" "}
          <Link href="../juliamiller/travel">
            travel and lodging materials.
          </Link>
        </p>

        <br />

        <h2>Can I park at the venue?</h2>
        <p className="text-xl">Yes, there is a parking lot on-site.</p>

        <br />

        <h2>When are RSVPs due?</h2>
        <p className="text-xl">
          Please RSVP{" "}
          <a
            href="https://www.zola.com/wedding/juliaandsamuel2025/rsvp"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          by August 1!
        </p>

        <br />

        <h2>Can I bring a plus one?</h2>
        <p className="text-xl">
          Generally, any invited guests will be listed on the invitation. If you
          think we have forgotten anyone, or if you have any questions, feel
          free to reach out.
        </p>

        <ExperienceTheMajesty />
      </div>
    </div>
  );
}
