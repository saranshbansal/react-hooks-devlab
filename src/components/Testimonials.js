import React, { useEffect, useState } from "react";
import { useFetch } from "../_common/useFetch";

export default function Testimonials() {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div>
      <h2 className="title">Numbers Api (useFetch & useEffect hook)</h2>

      <button className="btn success" onClick={() => setCount(c => getRandomArbitrary(1, 100))}>
        Change
      </button>
      <div className="quote-container">
        <code>{loading ? `loading testimonial #${count}...` : data}</code>
      </div>
    </div>
  );
}
