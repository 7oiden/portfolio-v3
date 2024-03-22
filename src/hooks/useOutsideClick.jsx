import { useEffect } from "react";

export default function useOutsideClick(ref, callback) {
  function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}