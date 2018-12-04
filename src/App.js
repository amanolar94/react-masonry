import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import hits from "lib/PostData";
import useDimensions from "lib/useDimensions";

const styles = {
  container: {
    backgroundColor: "#fefefe",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  maincontent: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "row"
  }
};

function App() {
  const [dataUnordered, setDataUnordered] = useState({ hits: [] });
  const [dataOrdered, setDataOrdered] = useState({ orderedData: [[], [], []] });
  const [initialRender, setInitialRender] = useState(true);
  const { innerWidth } = useDimensions();

  useEffect(() => {
    //This it the place where we fetch the results.
    //The second argument must be empty so the Effect happens only
    // when the component mounts
    setDataUnordered(hits);
    rearrangeItems(hits);
  }, []);

  useEffect(
    () => {
      !initialRender && throttledRearrangeItems(dataUnordered);
    },
    [innerWidth]
  );

  const throttledRearrangeItems = debounce(({ hits }) => {
    let columns;
    if (innerWidth <= 600) {
      columns = 1;
    } else if (innerWidth <= 768) {
      columns = 2;
    } else {
      columns = 3;
    }
    let orderedData = [[], [], []];
    hits.forEach((element, index) => {
      orderedData[index % columns].push(element);
    });
    setDataOrdered({ orderedData });
  }, 1000);

  const rearrangeItems = ({ hits }) => {
    let columns;
    if (innerWidth <= 600) {
      columns = 1;
    } else if (innerWidth <= 768) {
      columns = 2;
    } else {
      columns = 3;
    }
    let orderedData = [[], [], []];
    hits.forEach((element, index) => {
      orderedData[index % columns].push(element);
    });
    setDataOrdered({ orderedData });
    setInitialRender(false);
  };
  return (
    <div style={styles.container}>
      <main style={styles.maincontent}>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </main>
    </div>
  );
}

export default App;
