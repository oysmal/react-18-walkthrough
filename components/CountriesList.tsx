import { useEffect, useState } from "react";

// export async function getServerSideProps(context: any) {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await res.json();
//   return {
//     props: {
//       countries,
//     },
//   };
// }

export default function CountriesList() {
  const [countries, setCountries] = useState<{ name: { common: string } }[]>(
    []
  );

  useEffect(() => {
    const fn = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setCountries(countries);
    };
    fn();
  }, []);

  return (
    <ul>
      {countries.map((item) => (
        <li key={item.name.common}>{item.name.common}</li>
      ))}
    </ul>
  );
}
