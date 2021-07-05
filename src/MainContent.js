import { useState } from "react";
import LatestPost from "./LatestPost";
import Page from "./Page";

export default function MainContent(props) {
  const [fullPageOnly, setFullPageOnly] = useState(false);

  function handleFullPageOnly() {
    setFullPageOnly((previous) => {
      return !previous;
    });
  }

  return (
    <>
      <Page
        apiUrl={props.apiUrl}
        fullPageOnly={fullPageOnly}
        handleFullPage={handleFullPageOnly}
      />
      {!fullPageOnly && <LatestPost apiUrl={props.apiUrl} />}
    </>
  );
}
