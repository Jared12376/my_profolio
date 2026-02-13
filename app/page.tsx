import Image from "next/image";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Button from "./components/Button";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#134074", minHeight: "100vh", color: "white" }}> {/* Apply the blue background */}
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="mt-8 relative flex justify-center"> {/* Added relative positioning */}
        <Image
          src="/skyscrapers-with-night-lights.jpg"
          alt="Jared image"
          width={900}
          height={500} // Adjusted height for better proportions
          className="rounded-[75px]" // Added border radius of 75px
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl text-center rounded-md">Welcome, my name is Jared Meza</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center"> {/* Centered the button */}
        <Button text={"Click Me!"} />
      </div>
    </div>
  );
}