import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Image, Input } from "semantic-ui-react";
import "../assets/css/searchScrean.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchScrean = () => {
  let query = useQuery();
  const [val, setVal] = useState(query.get("q"));
  const q= query.get("q")
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAV0c8GJE3ooKHOs4xC_Fg_Qf2oa5Q_Pfs&cx=017576662512468239146:omuauf_lfve&q=${q}`
      )
      .then((res) => {
        console.log(res.data);
      });
  }, [q]);

  const redirect = (e) => {
    if (e.key === "Enter") {
      history.push(`/search?q=${val}`);
    }
  };
  return (
    <div>
      <div className="searchcontainer">
        <div className="searchlogo">
          <Image
            size="medium"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
            wrapped
          />
        </div>
        <div className="searchinput">
          <Input
            circular="true"
            round="true"
            style={{ width: "100%", borderRadius: "20px" }}
            size="large"
            icon="search"
            value={val}
            onKeyPress={redirect}
            placeholder="Search..."
            iconPosition="left"
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <div className="active" href="">
              All
            </div>
          </li>
          <li>
            <div href="">Image</div>
          </li>
          <li>
            <div href="">Video</div>
          </li>
          <li>
            <div href="">Books</div>
          </li>
          <li>
            <div href="">Others</div>
          </li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default SearchScrean;
