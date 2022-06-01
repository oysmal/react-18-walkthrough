import { useDeferredValue, useId, useMemo, useState } from "react";
import Header from "../../components/Header";
import { getWayTooMuchData } from "../Data";

const allData = getWayTooMuchData();

export default function TypeaheadSelect() {
  const inputId = useId();
  const [searchValue, setSearchValue] = useState("");
  const deferredQuery = useDeferredValue(searchValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const results = useMemo(
    () => <Results query={deferredQuery} />,
    [deferredQuery]
  );

  return (
    <>
      <Header />
      <main>
        <label htmlFor={inputId}>Typeahead Search&nbsp;</label>
        <input
          type="text"
          id={inputId}
          onChange={onChange}
          value={searchValue}
        />
        {results}
      </main>
    </>
  );
}

function Results(props: { query: string }) {
  return (
    <ul>
      {allData
        .filter((x) => x.toLowerCase().includes(props.query))
        .map((x) => (
          <li key={x}>
            <input type="checkbox" value={x} />
            {x}
          </li>
        ))}
    </ul>
  );
}
