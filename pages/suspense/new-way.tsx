import React, { lazy, Suspense, useState, useTransition } from "react";
import Header from "../../components/Header";
const CountriesList = lazy(() => import("../../components/CountriesList"));

export default function SuspenseNewWay() {
  const [tab, setTab] = useState(0);
  const [, startTransition] = useTransition();
  console.log("I SHOULD HAPPEN FIRST");

  return (
    <>
      <Header />
      <main style={{ padding: "10px;" }}>
        <h1>Suspense</h1>
        <p>Nå støttet for SSR. Er blitt tett integrert med transitions.</p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <h2 onClick={() => setTab(0)}>Start</h2>
          <h2 onClick={() => setTab(1)}>Countries</h2>
        </div>
        {tab === 0 && <div>You are at the start</div>}
        <Suspense fallback={<div>Loading...</div>}>
          {tab === 1 && <CountriesList />}
        </Suspense>
      </main>
    </>
  );
}
