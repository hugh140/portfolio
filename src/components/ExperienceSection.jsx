import { useRef } from "react";
import useIsVisible from "../hooks/useIsVisible";
import PropTypes from "prop-types";

function ExperienceSection({ activity, company, date, children }) {
  const ref = useRef();
  const isAnimated = useRef(false);
  const isVisible = useIsVisible(ref);

  function isAnimating() {
    if (isAnimated.current) return "opacity-1";

    if (isVisible) {
      isAnimated.current = true;
      return "animate-fade-in-right duration-50 opacity-1";
    } else return "opacity-0";
  }

  return (
    <div className={isAnimating()} ref={ref} data-taos-offset="300">
      <h3 className="text-2xl mt-5 text-sky-600">
        {activity} - <span className="text-blue-300">{company}</span>
      </h3>
      <div className="text-zinc-400 mb-2">{date}</div>
      {children}
    </div>
  );
}
export default ExperienceSection;

ExperienceSection.propTypes = {
  activity: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.array,
};
