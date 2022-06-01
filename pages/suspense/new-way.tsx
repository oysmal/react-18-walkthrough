import { lazy, Suspense } from "react";
const CountriesList = lazy(() => import("../../components/CountriesList"));

export default function SuspenseNewWay() {
  return (
    <div>
      <h1>Countries</h1>
      <Suspense fallback="Loading data...">
        <CountriesList />
      </Suspense>
    </div>
  );
}
