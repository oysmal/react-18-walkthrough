import { useState } from "react";
import Header from "../../components/Header";
import { getWayTooMuchData } from "../Data";

const allData = getWayTooMuchData();

export default function List() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<string[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setData(allData.sort(() => (Math.random() > 0.5 ? 1 : -1)));
  };

  return (
    <>
      <Header />
      <main>
        <label>Search&nbsp;</label>
        <input type="text" onChange={onChange} value={searchValue} />
        {data.length > 0 && (
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
