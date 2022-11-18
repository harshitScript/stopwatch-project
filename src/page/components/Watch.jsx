import styled from "styled-components";
import useWatch from "../hooks/useWatch";

const Watch = ({ watchConfig, setWatchConfig }) => {
  const { minute, second } = useWatch({ watchConfig, setWatchConfig });

  return (
    <StyledSection>
      <span>{`${minute}`.length === 1 ? `0${minute}` : minute}</span>
      <span>:</span>
      <span>{`${second}`.length === 1 ? `0${second}` : second}</span>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 1rem;

  & span {
    font-size: 5rem;
  }
`;

export default Watch;
