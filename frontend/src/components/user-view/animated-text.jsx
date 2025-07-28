import React, { useEffect, useState } from "react";

const AnimatedText = ({ texts, className = "" }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [currentText, setCurrentText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);

      useEffect(() => {
            const timeout = setTimeout(() => {
                  const fullText = texts[currentIndex];

                  if (!isDeleting) {
                        setCurrentText(fullText.substring(0, currentText.length + 1));

                        if (currentText === fullText) {
                              setTimeout(() => setIsDeleting(true), 2000);
                        }
                  } else {
                        setCurrentText(fullText.substring(0, currentText.length - 1));

                        if (currentText === "") {
                              setIsDeleting(false);
                              setCurrentIndex((prev) => (prev + 1) % texts.length);
                        }
                  }
            }, isDeleting ? 100 : 150);

            return () => clearTimeout(timeout);
      }, [currentText, currentIndex, isDeleting, texts]);

      return (
            <span className={`${className} typing-animation`}>
                  {currentText}
            </span>
      );
};

export default AnimatedText;
