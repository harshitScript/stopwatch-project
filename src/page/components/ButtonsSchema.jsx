import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCSVValue, setWatchState } from "../../store/stopWatchSlice";

const ButtonsSchema = ({ watchConfig, setWatchConfig }) => {
  const { watchState } = useSelector((state) => state.stopWatch);

  const dispatch = useDispatch();

  const onResetClick = () => {
    setWatchConfig({ min: 0, sec: 0 });
  };

  const onWatchStateToggle = () => {
    dispatch(setWatchState(!watchState));
  };

  const onCSVEntryClick = () => {
    const payload = {
      id: Math.random().toFixed(2),
      ss: watchConfig,
    };

    dispatch(addCSVValue(payload));
  };

  return (
    <StyledSection>
      <button onClick={onWatchStateToggle}>
        {watchState ? "Pause" : "Start"}
      </button>
      <button onClick={onCSVEntryClick}>Split</button>
      <button onClick={onResetClick}>Reset</button>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 40%;
  gap: 1rem;
  display: flex;
  justify-content: center;
`;

export default ButtonsSchema;
