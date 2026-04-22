import { useRef } from "react";
import { motion } from "framer-motion";

export default function LiftShowcase({ compact = false }) {
  const audioRef = useRef(null);

  const handleMouseEnter = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.35;
      audio.loop = true;
      await audio.play();
    } catch (err) {
      console.error("Audio play blocked:", err);
    }
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  };

  const wrapperHeight = compact ? "h-[360px]" : "h-[620px]";
  const outerHeight = compact ? "h-[330px]" : "h-[600px]";
  const outerWidth = compact ? "w-[170px]" : "w-[250px]";
  const cabinWrap = compact ? "h-[120px] w-[92px]" : "h-[180px] w-[138px]";
  const cabinY = compact ? [185, 25, 185] : [360, 30, 360];

  return (
    <div
      className={`group relative mx-auto flex w-full max-w-[240px] items-center justify-center ${wrapperHeight}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <audio ref={audioRef} src="/audio/lift-hum.mp3" preload="auto" />

      <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-5 bottom-8 h-20 w-20 rounded-full bg-amber-300/10 blur-3xl" />

      <div className={`relative ${outerHeight} ${outerWidth} rounded-[38px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.30)]`}>
        <div className="absolute inset-y-6 left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-300/35 via-white/25 to-lime-300/25" />

        <div className="absolute left-4 top-4 flex flex-col gap-3">
          {[5, 4, 3, 2, 1].map((floor) => (
            <div
              key={floor}
              className={`flex ${compact ? "h-9 w-9 text-xs" : "h-12 w-12 text-sm"} items-center justify-center rounded-full border border-white/10 bg-white/[0.05] font-semibold text-white/65 transition duration-300 group-hover:border-cyan-300/25 group-hover:text-white/90`}
            >
              {floor}
            </div>
          ))}
        </div>

        <motion.div
          animate={{ y: cabinY }}
          transition={{
            duration: compact ? 5.5 : 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2"
        >
          <div className={`relative ${cabinWrap}`}>
            <div className={`absolute left-1/2 ${compact ? "top-[-56px] h-[56px]" : "top-[-88px] h-[88px]"} w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-200/90 to-white/20`} />

            <div className="absolute inset-0 rounded-[28px] border border-cyan-200/10 bg-transparent shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition duration-300 group-hover:shadow-[0_16px_45px_rgba(34,211,238,0.18)]">
              <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(10,28,52,0.92),rgba(5,15,28,0.92))]" />
              <div className="absolute inset-[8px] rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />

              <div className="absolute inset-x-3 top-3 h-3 rounded-full bg-gradient-to-r from-cyan-300/70 via-white/80 to-lime-300/50 blur-[2px]" />

              <div className={`absolute left-1/2 ${compact ? "top-[14px]" : "top-[18px]"} -translate-x-1/2 rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-[9px] font-semibold tracking-[0.32em] text-cyan-300`}>
                LIFT
              </div>

              <div className={`absolute ${compact ? "inset-y-[28px]" : "inset-y-[34px]"} left-1/2 w-[2px] -translate-x-1/2 bg-white/10`} />

              <motion.div
                animate={{ x: [0, -2, 0, 2, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className={`absolute left-[12px] ${compact ? "top-[28px] h-[72px] w-[30px]" : "top-[34px] h-[112px] w-[48px]"} rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]`}
              />
              <motion.div
                animate={{ x: [0, 2, 0, -2, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className={`absolute right-[12px] ${compact ? "top-[28px] h-[72px] w-[30px]" : "top-[34px] h-[112px] w-[48px]"} rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]`}
              />
            </div>
          </div>
        </motion.div>

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute inset-x-5 h-[2px] bg-white/8"
            style={{ top: compact ? `${62 + i * 62}px` : `${95 + i * 102}px` }}
          />
        ))}
      </div>
    </div>
  );
}