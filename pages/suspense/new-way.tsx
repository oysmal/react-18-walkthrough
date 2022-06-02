import React, { lazy, Suspense, useState, useTransition } from "react";
import Header from "../../components/Header";
const CountriesList = lazy(() => import("../../components/CountriesList"));

export default function SuspenseNewWay() {
  const [tab, setTab] = useState(0);

  const [, startTransition] = useTransition();

  return (
    <>
      <Header />
      <h1>Suspense</h1>
      <p>Nå støttet for SSR. Er blitt tett integrert med transitions.</p>
      <Tabs
        tab={tab}
        onChangeTab={(tab) => startTransition(() => setTab(tab))}
      />

      <main style={{ padding: "10px;" }}>
        {tab === 0 && <div>You are at the start</div>}
        <Suspense fallback={<div>Loading...</div>}>
          {tab === 1 && <CountriesList />}
        </Suspense>
      </main>
    </>
  );
}

function Tabs(props: { tab: number; onChangeTab: (tab: number) => void }) {
  const { tab, onChangeTab } = props;
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      <h2
        style={{ color: tab === 0 ? "hotpink" : "currentcolor" }}
        onClick={() => onChangeTab(0)}
      >
        Start
      </h2>
      <h2
        style={{ color: tab === 1 ? "hotpink" : "currentcolor" }}
        onClick={() => onChangeTab(1)}
      >
        Countries
      </h2>
    </div>
  );
}
