import { useEffect } from "react";
import { useSelector } from "react-redux";

const useWatch = ({ watchConfig, setWatchConfig }) => {
  const { watchState } = useSelector((state) => state.stopWatch);

  useEffect(() => {
    setInterval(() => {
      if (watchState) {
        setWatchConfig((current) => {
          const min = current?.sec + 1 === 60 ? current.min + 1 : current.min;
          const sec = current?.sec + 1 === 60 ? 0 : current?.sec + 1;

          return {
            min,
            sec,
          };
        });
      } else {
        setWatchConfig((current) => current);
      }
    }, 1000);
  }, [watchState]);

  return {
    minute: watchConfig.min,
    second: watchConfig.sec,
    state: watchState,
  };
};
export default useWatch;
