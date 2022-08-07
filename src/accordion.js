import { useState } from "react";
import userData from "./data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./styles.css";

export default function Accordion({ id, text, desc }) {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="Accordion">
      <div className="questions">
        <p>{text}</p>
        <button onClick={() => setIsClick(!isClick)}>
          {isClick ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isClick && <p className="answers">{desc}</p>}
    </div>
  );
}
