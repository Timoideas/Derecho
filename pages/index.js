import style from "styles/pages/index.module.css";
import Head from "heads/main.head";
import { Body, Section, SVG } from "components/timoideas/Timoideas.components";
import { useState } from "react";
import Analytics from "components/timoideas/Analytics.component";
import Crud from "components/Crud.component";

export default function Index() {
  const [serverSockets, setserverSockets] = useState();

  return (
    <>
      <Head />
      <Body>
        <Section>
          <Analytics />
          <Crud />
        </Section>
      </Body>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: JSON.parse(JSON.stringify("data")),
    },
  };
}
