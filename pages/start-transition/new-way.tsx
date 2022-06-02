import { useEffect, useId, useState, useTransition } from "react";
import Header from "../../components/Header";
import { getWayTooMuchData } from "../Data";

const allData = getWayTooMuchData();

export default function List() {
  const inputId = useId();
  const [searchValue, setSearchValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    startTransition(() => {
      setData(allData.sort(() => (Math.random() > 0.5 ? 1 : -1)));
    });
  };

  return (
    <>
      <Header />
      <main>
        <label htmlFor={inputId}>Search&nbsp;</label>
        <input
          type="text"
          id={inputId}
          onChange={onChange}
          value={searchValue}
        />
        {isPending && <p>Loading...</p>}
        {data.length > 0 && !isPending && (
          <ul>
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
