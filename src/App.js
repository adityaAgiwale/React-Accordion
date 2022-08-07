import Accordion from "./accordion";
import "./styles.css";
import Data from "./data";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(Data);
  return (
    <div className="App">
      <section className="section">
        <h2 className="heading">Questions and Answers</h2>
        {data.map((value) => {
          return <Accordion key={value.id} {...value} />;
        })}
      </section>
    </div>
  );
}
