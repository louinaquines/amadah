"use client";

type BlurTextLine = { text: string; italic?: boolean };

export default function BlurText({ lines }: { lines: BlurTextLine[] }) {
  return (
    <h1 className="blur-text">
      {lines.map((line, lineIndex) => (
        <span
          className={line.italic ? "blur-text-line italic" : "blur-text-line"}
          key={line.text}
        >
          {line.text.split(" ").map((word, wordIndex) => (
            <span
              className="blur-text-word"
              style={
                {
                  "--word-delay": `${(lineIndex * 4 + wordIndex) * 80}ms`,
                } as React.CSSProperties
              }
              key={`${line.text}-${word}`}
            >
              {word}
              {wordIndex < line.text.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
