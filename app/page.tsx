import Image from "next/image";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Button from "./components/Button";
import Footer from "./components/Footer"; // Import the Footer component

export default function Home() {
  return (
    <div style={{ backgroundColor: "#134074", minHeight: "100vh", color: "white", fontFamily: "Cormorant, serif" }}>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="mt-8 relative flex justify-center">
        <Image
          src="/skyscrapers-with-night-lights.jpg"
          alt="Jared image"
          width={1200}
          height={500}
          className="rounded-[75px]"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-start justify-start p-30">
          <div>
            <p className="text-6xl text-left"><strong>Welcome</strong></p> 
            <p className="text-lg text-left">Who am I</p>
            <p className="text-lg text-left">Hi I am Jared Meza</p>
          </div>
        </div>
      </div>

      {/* Stacked Boxes with New Color */}
      <div className="flex flex-col items-start mt-8 space-y-4 ml-10">
        <div className="h-72 w-[1000px] rounded-[75px] flex flex-col items-center justify-center" style={{ backgroundColor: "#215684" }}>
          <p className="text-center text-xl"><strong>ABOUT ME</strong></p>
          <p className="text-center">Text placeholder is temporary content used in design and development to fill space, guide users (e.g., "Enter your email"), or show layout before final content is ready, disappearing when a user types or replaced with real text.</p>
        </div>
        <div className="h-72 w-[1000px] rounded-[75px] flex flex-col items-center justify-center" style={{ backgroundColor: "#215684" }}>
          <p className="text-center text-xl"><strong>WHAT I DO</strong></p>
          <p className="text-center">The placeholder attribute defines the text displayed in a form control when the control has no value. The placeholder text should provide a brief hint to the user as to the expected type of data that should be entered into the control.</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <Button text={"Click Me!"} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}