import { useSelector } from "react-redux";
import styled from "styled-components";
import { ExportToCsv } from "export-to-csv";

const CSVTable = () => {
  const { csvTable } = useSelector((state) => state.stopWatch);

  const csvTableData = csvTable?.length
    ? csvTable?.map((entry) => ({
        id: entry.id,
        minute: entry?.ss?.min,
        second: entry?.ss?.sec,
      }))
    : [];

  const onGenerateCsvClick = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "My Awesome CSV",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(csvTableData);
  };

  return (
    <StyledSection>
      {csvTable?.length ? (
        csvTable.map((entry) => (
          <TableEntry {...entry} key={`${entry?.ss?.min}-${entry?.ss?.sec}`} />
        ))
      ) : (
        <p>Try adding some entries</p>
      )}
      {csvTable.length ? (
        <button onClick={onGenerateCsvClick}>Export CSV</button>
      ) : (
        <></>
      )}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0 4px grey;
  border-radius: 0.5rem;
`;

export default CSVTable;

const TableEntry = ({ id, ss }) => {
  return (
    <StyledItem>
      <span>#{id}</span>

      <span>
        {ss?.min}:{ss?.sec}
      </span>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  gap: 2rem;
`;
