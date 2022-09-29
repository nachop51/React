import React, { useState, useEffect } from "react";
import axios from "axios";

// code: useEffect(() => {})
// * runs after every single render
// code: useEffect(() => {}, [])
// * runs only once, when the component is first rendered
// code: useEffect(() => {}, [variable])
// * runs only once, when the component is first rendered
// * and runs again when the variable is changed

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  // ^ The return function is called before the next time useEffect is called
  // ^ It is used to clean up the previous useEffect call

  useEffect(() => {
    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });
      setResults(response.data.query.search);
    };
    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  // * Instead of using only one useEffect to fetch the data
  // * from the wikipedia api, we need to use two disctincts
  // * useEffects, using the example below shows a warning
  // * when we use this dependencies:
  // code: [term]
  // ! warning: React Hook useEffect has a missing dependency:
  // ! 'results.length'. Either include it or remove the dependency array.
  // * that is because we are depending on two things to
  // * re-render the component, based on this if statement
  // code: if (term && !results.length) {
  // code:   search();
  // code: }
  // * so the correct way to declare the dependencies would've
  // code: [term, results.length]
  // * but that carries a lot of hidden bugs at the moment of
  // * using the program, for example, if we search for 'book'
  // * useEffect will run two times, this mean two different
  // * requests to the api, which ends up being inefficient.
  // * That is because 'term' changed, but also 'results.length'
  // * so at the end of the day that means two differents
  // * calls to useEffect.

  // & In order to solve this issue, as mencioned before
  // & we need to use two different useEffects, and two
  // & pieces of state, doing it this way allow us to have
  // & the control of when the term is changed, allowing
  // & to set the debouncedTerm, so we add the other
  // & useEffect to control the debouncedTerm, and then
  // & we can use the debouncedTerm to make the request
  // & to the api, and that way we can avoid the double
  // & request to the api.

  // useEffect(() => {
  //   const search = async () => {
  //     const response = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         format: "json",
  //         list: "search",
  //         origin: "*",
  //         srsearch: term,
  //       },
  //     });
  //     setResults(response.data.query.search);
  //   };

  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timer = setTimeout(() => {
  //       if (term) {
  //         search();
  //       } else {
  //         setResults([]);
  //       }
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [term, results.length]);
  // ^ The return function is called before the next time useEffect is called
  // ^ It is used to clean up the previous useEffect call

  const renderedResulsts = results.map((res) => {
    return (
      <div key={res.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          className="input"
        />
      </div>
      <div className="ui celled list">{renderedResulsts}</div>
    </div>
  );
};

export default Search;
