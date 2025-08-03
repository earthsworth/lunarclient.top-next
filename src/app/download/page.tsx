import { TypographyH1 } from "@/components/typography/TypographyH1";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LinkButton } from "@/components/ui/LinkButton";
import {
  ChevronsUpDown,
  FileWarningIcon,
  MessageCircleWarningIcon,
  Terminal,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Celestial",
  description: "Download the leading tools for tweaking your browser.",
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
    "download celestial"
  ],
  openGraph: {
    type: "website",
    title: "Download Celestial - The Browser Research Project",
    description: "Download the leading tools for tweaking your browser.",
    images: "/og-images/download.png",
  },
};

export default function Download() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 py-8 md:py-16 lg:py-20 xl:gap-4 ml-10">
        <TypographyH1>Download Celestial</TypographyH1>
        <p>
          Celestial can be installed in a lot of ways, you can choose the
          favorite way here
        </p>

        <Alert variant="default" className="w-150">
          <FileWarningIcon />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Tweaking your browser may violate the ToS, so please think twice
            before using it.
          </AlertDescription>
        </Alert>

        <Button variant="outline" className="w-fit">
          <a href="https://discord.lunarclient.top">Join our Discord server</a>
        </Button>

        <section>
          <TypographyH2>Start Quickly (Auto Configuration)</TypographyH2>

          <p>Use this if you're new to Celestial</p>

          <LinkButton href="https://github.com/earthsworth/celestial-bootstrap-next">
            Celestial Bootstrap Next (Recommend if you want to try nightly
            features)
          </LinkButton>
          <LinkButton href="https://github.com/earthsworth/celestial-bootstrap">
            Celestial Bootstrap (Recommend if you want to start quickly)
          </LinkButton>
        </section>

        <section>
          <TypographyH2>Download Manually</TypographyH2>

          <LinkButton href="https://github.com/earthsworth/celestial-launcher">
            The Celestial Launcher
          </LinkButton>

          <LinkButton href="https://github.com/earthsworth/BrowserDebugger">
            The Browser Debugger
          </LinkButton>

          <section className="mt-3 w-150">
            <Collapsible>
              <CollapsibleTrigger>
                <div className="flex flex-row gap-1 text-md border rounded-xl p-2 hover:border-gray-300">
                  Tutorial for Configuring Celestial
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle Tutorial</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="step-1">
                    <AccordionTrigger>Step1 - Prepare files</AccordionTrigger>
                    <AccordionContent>
                      Download files from following links
                      <LinkButton href="https://github.com/earthsworth/celestial-launcher">
                        https://github.com/earthsworth/celestial-launcher
                      </LinkButton>
                      <LinkButton href="https://github.com/earthsworth/BrowserDebugger">
                        https://github.com/earthsworth/BrowserDebugger
                      </LinkButton>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-2">
                    <AccordionTrigger>
                      Step2 - Prepare environment
                    </AccordionTrigger>
                    <AccordionContent>
                      <Alert variant="default">
                        <Terminal />
                        <AlertTitle>On Linux or Macos?</AlertTitle>
                        <AlertDescription>
                          We recommend you to install java via your package
                          manager.
                        </AlertDescription>
                      </Alert>
                      <Alert variant="destructive" className="my-2">
                        <MessageCircleWarningIcon />
                        <AlertTitle>Important Notes</AlertTitle>
                        <AlertDescription>
                          Only Java 21 is supported, lower or higher versions
                          are not supported
                        </AlertDescription>
                      </Alert>
                      Download Java 21 from this link
                      <LinkButton href="https://www.azul.com/downloads/?version=java-21-lts&package=jdk#zulu">
                        https://www.azul.com/downloads
                      </LinkButton>
                      Than install it, we know you can do that
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-3">
                    <AccordionTrigger>
                      Step3 - Configure browser debugger (Optional)
                    </AccordionTrigger>
                    <AccordionContent>
                      <Alert variant="default">
                        <Terminal />
                        <AlertTitle>What is ~ directory</AlertTitle>
                        <AlertDescription>
                          ~ is your home dir, it's %USER_PROFILE% on Microsoft
                          Windows
                        </AlertDescription>
                      </Alert>
                      <Alert variant="default" className="my-3">
                        <Terminal />
                        <AlertTitle>
                          Help me! I cannot find the directory
                        </AlertTitle>
                        <AlertDescription>
                          Create them if you cannot find them
                        </AlertDescription>
                      </Alert>
                      Put BrowserDebugger.jar into{" "}
                      <label className="underline text-sky-400">
                        ~/.cubewhy/lunarcn/javaaganets
                      </label>
                      <img
                        alt="the javaagent folder"
                        src={"/dolphin-javaagent-folder.png"}
                        className="rounded-3xl"
                      ></img>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="step-4">
                    <AccordionTrigger>
                      Step4 - Launch Celestial
                    </AccordionTrigger>
                    <AccordionContent>
                      <Alert variant="default">
                        <Terminal />
                        <AlertTitle>How to open the terminal</AlertTitle>
                        <AlertDescription>
                          <p>
                            On Microsoft Windows there is a program called{" "}
                            <label className="underline">Command Prompt</label>
                          </p>
                          <p>
                            On Linux it called{" "}
                            <label className="underline">
                              Konsole, Gnome Terminal or Kitty
                            </label>{" "}
                            (It depends on your dist)
                          </p>{" "}
                          <p>
                            On MacOS it called{" "}
                            <label className="underline">Terminal</label>
                          </p>
                        </AlertDescription>
                      </Alert>
                      <Alert variant="default" className="my-3">
                        <Terminal />
                        <AlertTitle>Help me! Unknown command "java"</AlertTitle>
                        <AlertDescription>
                          I think you forgot to add java to PATH, just search
                          "How to add Java to PATH" on Google (or other search
                          engines), it will provide you a workaround.
                        </AlertDescription>
                      </Alert>
                      <Alert variant="default" className="my-3">
                        <Terminal />
                        <AlertTitle>
                          Help me! Unknown file celestial.jar
                        </AlertTitle>
                        <AlertDescription>
                          <p>
                            You need to replace "celestial.jar" with it's
                            absolute path, like
                            C:/Downloads/celestial-v3.0.0.jar or
                            ~/Downloads/celestial.jar
                          </p>
                          <p>
                            If you don't know how to, type "java -jar " (don't
                            forget the end space) and drag your celestial jar
                            into the terminal
                          </p>
                        </AlertDescription>
                      </Alert>
                      <p>
                        Open your terminal and type{" "}
                        <label className="text-yellow-500 underline">
                          java -jar celestial.jar
                        </label>
                        . Than press ENTER on your keyboard
                      </p>
                      <p>Have fun debugging~</p>
                      <img
                        src={"/konsole-launch-celestial.png"}
                        alt="Example command about launching Celestial in Konsole"
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CollapsibleContent>
            </Collapsible>
          </section>
        </section>

        <section>
          <TypographyH2>For Developers</TypographyH2>
          <p>
            We also develop tools for tweaking browsers, See our GitHub for more
            details
          </p>
          <p className="text-red-400">Star us on GitHub!</p>
          <LinkButton href="https://github.com/earthsworth" className="mb-2">
            github.com/earthsworth
          </LinkButton>
          <Button variant="outline">
            <a href="https://discord.lunarclient.top">
              Join our developer community (Discord)
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}
