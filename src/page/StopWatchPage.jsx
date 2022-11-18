import { useState } from "react";
import styled from "styled-components";
import ButtonsSchema from "./components/ButtonsSchema";
import CSVTable from "./components/CSVTable";
import Watch from "./components/Watch";

const StopWatchPage = () => {
  const [watchConfig, setWatchConfig] = useState({ min: 0, sec: 0 });

  return (
    <StyledMain>
      <Watch watchConfig={watchConfig} setWatchConfig={setWatchConfig} />
      <ButtonsSchema
        watchConfig={watchConfig}
        setWatchConfig={setWatchConfig}
      />
      <CSVTable />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StopWatchPage;
