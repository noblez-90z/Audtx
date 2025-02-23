import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BallDropAnimation() {
  const ballControls = useAnimation();
  const bgControls = useAnimation();
  const [showBall, setShowBall] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function animateSequence() {
      // Drop ball to bottom
      await ballControls.start({
        y: "100%",
        transition: { duration: 1.5, ease: "easeInOut" },
      });

      // Hide ball after reaching bottom
      setShowBall(false);

      // Expand green background upwards
      await bgControls.start({
        height: "100%",
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }

    animateSequence();
  }, [ballControls, bgControls]);
  useEffect(() => {
    // Simulate data fetching with a delay
    setTimeout(() => {
      navigate("/Welcome");
    }, 4000); // 4 seconds delay
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex justify-center items-center">
      {/* Expanding green background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-500 to-black"
        initial={{ height: "0%" }}
        animate={bgControls}
      />

      {/* Ball (Hidden after reaching bottom) */}
      {showBall && (
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-gradient-to-t from-green-500 to-black"
          initial={{ y: "-100%" }}
          animate={ballControls}
          // style={{
          //   background: "linear-gradient(to top, black 50%, green 50%)",
          // }}
        />
      )}
    </div>
  );
}
