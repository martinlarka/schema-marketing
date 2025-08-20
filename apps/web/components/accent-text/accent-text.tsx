"use client";

import { motion } from "motion/react";

export default function AccentText({
  text,
  addNewline,
  color = "var(--color-blue-600)",
  opacity = 1,
}: {
  text: string | null | undefined;
  addNewline?: boolean;
  color?: string;
  opacity?: number;
}) {
  return (
    <>
      {text?.split(/\[(.*?)]/gm).map((chunk, i) =>
        text?.includes(`\[${chunk}\]`) ? (
          `${chunk}${addNewline ? "\n" : ""}`.split("").map((t, j) => (
            <motion.span
              key={j}
              style={{
                opacity,
              }}
              animate={{
                // Needs to be static for motion to be able to animate
                color,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  delay: 0.5 + j * 0.01,
                },
              }}
            >
              {t}
            </motion.span>
          ))
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </>
  );
}
