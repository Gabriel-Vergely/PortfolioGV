import React, { useState, useEffect } from "react";

const phrases = [
  "I love coding",
  "Enjoyer of CTF",
  "AI & Big Data Enthusiast",
  "Full-stack Developer",
  "Cybersecurity Fanatic",
];

export default function AnimatedText() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && text.length < currentPhrase.length) {
      timer = setTimeout(() => setText(currentPhrase.substring(0, text.length + 1)), 150);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(currentPhrase.substring(0, text.length - 1)), 75);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="border-r-2 border-blue-900 pr-1 whitespace-nowrap">{text}</span>
  );
}
