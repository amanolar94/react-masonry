import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import hits from "./lib/PostData";
import useDimensions from "./lib/useDimensions";

const styles = {
  container: {
    backgroundColor: "#fefefe",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "90%"
  },

  maincontent: {
    display: "flex"
  },
  column: {
    display: "block",
    // width: "100%"
    // flexDirection: "column"
    width: "100%"
  },
  blogPost: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    margin: "0 5% 5% 5%",
    boxShadow: "5px 10px 20px #969696"
  },
  image: {
    maxWidth: "100%"
    // maxHeigth: "100%"
  }
};

const PostItem = ({
  title,
  author,
  dateTime,
  image,
  abstract,
  readingTime
}) => (
  <div style={styles.blogPost}>
    <img src={image} alt={`${title}`} style={styles.image} />
    <p
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "3%",
        paddingRight: "3%"
      }}
    >
      <small>{`by ${author} ${dateTime}`}</small>
      <small>{readingTime}</small>
    </p>
    <div
      style={{
        fontSize: "1.6em",
        fontWeight: "bold",
        paddingLeft: "3%",
        paddingRight: "3%"
      }}
    >
      {title}
    </div>
    <p
      style={{
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingBottom: "3%"
      }}
    >
      {abstract}
    </p>
  </div>
);

function App() {
  const [dataUnordered, setDataUnordered] = useState({ hits: [] });
  const [dataOrdered, setDataOrdered] = useState([[], [], []]);
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
      setDataOrdered([hits, [], []]);
      return;
    } else if (innerWidth <= 1024) {
      columns = 2;
    } else {
      columns = 3;
    }
    let orderedData = [[], [], []];
    hits.forEach((element, index) => {
      orderedData[index % columns].push(element);
    });
    setDataOrdered(orderedData);
  }, 1000);

  const rearrangeItems = ({ hits }) => {
    let columns;
    if (innerWidth <= 600) {
      setDataOrdered([hits, [], []]);
      return;
    } else if (innerWidth <= 1024) {
      columns = 2;
    } else {
      columns = 3;
    }
    let orderedData = [[], [], []];
    hits.forEach((element, index) => {
      orderedData[index % columns].push(element);
    });
    setDataOrdered(orderedData);
    setInitialRender(false);
  };

  const [column1, column2, column3] = dataOrdered;
  return (
    <div style={styles.container}>
      <h1>A React-Masonry Layout</h1>
      <h2>
        You can find the code on{" "}
        <a href="https://github.com/amanolar94/react-masonry" target="blank">
          github
        </a>
      </h2>
      <h3 style={{ color: "#fc2a2a" }}>
        Resize the browser window to see the columns changing depending on
        device type
      </h3>
      <main style={styles.maincontent}>
        <div style={styles.column}>
          {column1.map((item, index) => (
            <PostItem key={index} {...item} />
          ))}
        </div>
        {column2.length > 0 && (
          <div style={styles.column}>
            {column2.map((item, index) => (
              <PostItem key={index} {...item} />
            ))}
            )}
          </div>
        )}
        {column3.length > 0 && (
          <div style={styles.column}>
            {column3.map((item, index) => (
              <PostItem key={index} {...item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
