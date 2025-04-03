import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColoringPage = () => {
  const [color, setColor] = useState("#000000");
  const [selectedElement, setSelectedElement] = useState(null);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    if (selectedElement) {
      selectedElement.style.fill = newColor.hex;
    }
  };

  const handleSVGClick = (event) => {
    if (event.target.tagName === "path" || event.target.tagName === "circle") {
      setSelectedElement(event.target);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Color the Kitten!</h1>
      <SketchPicker color={color} onChange={handleColorChange} />
      <svg
        onClick={handleSVGClick}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        className="w-96 h-96 border mt-4"
      >
        <path
          d="M100,100 L200,200 L300,100 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="250" cy="250" r="50" fill="white" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ColoringPage;
