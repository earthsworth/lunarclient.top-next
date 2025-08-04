import { Hero } from "@/components/Hero";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celestial - The Browser Research Project",
  description:
    "The leading tools for tweaking your browser. Brought you by Earthsworth with love ♥️",
  keywords: [
    "minecraft",
    "lunarclient",
    "cosmetics",
    "all cosmetics",
    "unlock cosmetics",
    "celestial",
    "celestial launcher",
    "lunar all cosmetics",
    "lunar",
    "moonsworth",
    "earthsworth",
  ],
  openGraph: {
    type: "website",
    title: "Celestial - The Browser Research Project",
    description:
      "The leading tools for tweaking your browser. Brought you by Earthsworth with love ♥️",
    images: "/og-images/index.png",
  },
};

export default function Home() {


  return (
    <div className="flex flex-col">
      <Hero/>

      {/* <div
        className="flex flex-col items-center text-center justify-center h-[100vh] bg-cover bg-center bg-no-repeat shadow-2 overflow-hidden"
        style={{
          backgroundImage: "url('/galaxy.webp')",
        }}
      >
        <section className="flex flex-col text-white bg-[rgba(0,0,0,0.8)] h-[100vh] w-full items-center justify-center gap-4 backdrop-blur-xl">
          <TypographyH1>Welcome to Celestial</TypographyH1>
          <p>It's free and opensource!</p>
          <Button>
            <Link href="/download">Tweak My Browser Today!</Link>
          </Button>
        </section>
      </div> */}

      <div className="mx-10">
        <section className="flex flex-col gap-2">
          <TypographyH2>What is Celestial Project</TypographyH2>
          <blockquote className="text-amber-300">
            TLDR: Browser. Yes we modify the browser. We do tweaks on browsers
          </blockquote>
          <p>
            We've found that browser manufacturers don't care about user
            experience
          </p>

          <p>We're a small development team from North Korea </p>

          <p>
            We're focused on bringing a better gaming experience to browser
            users!
          </p>

          <p>Celestial is our latest research on browsers</p>
        </section>

        <section className="flex flex-col gap-2 w-150 mt-5">
          <TypographyH2>Features</TypographyH2>

          <Accordion type="single" collapsible>
            <AccordionItem value="feat-1">
              <AccordionTrigger>No electron</AccordionTrigger>
              <AccordionContent>
                <p>
                  Just fxxk away Electron.js, we don't use this sh1t to code
                  Celestial Launcher
                </p>
                <p>Celestial Launcher is lightweight enough at 14mb</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feat-2">
              <AccordionTrigger>FOSS</AccordionTrigger>
              <AccordionContent>
                <p>
                  Browser vendors don't have to embrace open source, Celestial
                  Project implements some proprietary parts in an open source
                  way (even better than they do)
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feat-3">
              <AccordionTrigger>Addons Support</AccordionTrigger>
              <AccordionContent>
                <p>
                  Browser vendors don't want you to add addons to your browser.
                  But we provide first-class plugin support for your browser.
                </p>
                <p>
                  Celestial provide first-level support for Javaagents and Weave
                  Mods.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feat-4">
              <AccordionTrigger>No Telemetry or Ads</AccordionTrigger>
              <AccordionContent>
                We value user's privacy, Celestial won't track you when you
                enjoy your browse experience
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
