import React, { useEffect, useState, useMemo } from "react";
import reactDom from "react-dom";

const Timer = () => {
  const [whiteCellTimer, setwhiteCellTimer] = useState(360);

  useEffect(() => {
    setInterval(() => setwhiteCellTimer((prev) => prev - 1), 1000);
  }, [whiteCellTimer]);
  return <div>{whiteCellTimer}</div>;
};
export default React.memo(Timer);
