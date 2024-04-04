import { useEffect, useState, useRef } from "react";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  const executed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  if (!executed.current && isIntersecting) {
    executed.current = true;
    return true;
  } else return false;
}
export default useIsVisible;
