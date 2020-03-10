import React, { useCallback, useMemo } from "react";
import { useFetch } from "../_common/useFetch";

export default function KanyeQuotes() {
  const { data, loading } = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json");

  const computeLongestWord = useCallback(() => {
    if (!data) return [];

    let longestWord = "";

    JSON.parse(data).forEach(sentence => {
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) longestWord = word;
      });
    });

    return longestWord;
  }, [data]);

  const longestWord = useMemo(() => computeLongestWord(), [computeLongestWord]);

  return (
    <div>
      <h2 className="title">Kanye Quotes Api (useFetch & useMemo hook)</h2>
      <div className="quote-container">
        <code>{loading ? `loading longest word...` : `Longest word: ${longestWord}`}</code>
      </div>
    </div>
  );
}
