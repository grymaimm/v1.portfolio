import {
  AnimatedGridPatternDemo,
  DotPatternDemo,
  FlickeringGridDemo,
  InteractiveGridPatternDemo,
} from "../elements/BackgroundAnimated";
import { Meteors } from "../ui/meteors";
import DockApp from "./dock/DockApp";

export default function BaseLayout({
  children,
  useGridPattern = false,
  useInteractiveGridPattern = false,
  useDotPattern = false,
  useFlickeringGrid = false,
}) {
  return (
    <>
      {useGridPattern && (
        <div className="fixed -top-1/2 inset-0 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
          <AnimatedGridPatternDemo />
        </div>
      )}
      {useInteractiveGridPattern && (
        <div className="fixed -top-1/2 inset-0 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
          <InteractiveGridPatternDemo />
        </div>
      )}
      {useDotPattern && (
        <div className="fixed -top-1/2 inset-0 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
          <DotPatternDemo />
        </div>
      )}
      {useFlickeringGrid && (
        <div className="fixed -top-1/2 inset-0 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
          <FlickeringGridDemo />
        </div>
      )}
      <div className="fixed -top-1/4 inset-0 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
        <AnimatedGridPatternDemo />
      </div>
      <div className="fixed -top-1/4 inset-0 left-1/2 -translate-x-1/2 flex mx-auto z-0 pointer-events-none h-screen w-screen items-center justify-center overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
        <Meteors number={30} />
      </div>
      <div className="px-6 pt-16 pb-32">
        <main className="flex flex-col mx-auto max-w-3xl">
          {children}
          <DockApp />
        </main>
      </div>
    </>
  );
}
