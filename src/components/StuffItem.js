import {  useParams  } from "react-router-dom";
import data from "../items.json";

/* Component for individual item page */
function StuffItem() {
    /* grab data from items.json and parse out the right one using stuffId from the url path */
    let { stuffId } = useParams();
    let item = data.find(x => x.id === stuffId);

    return (
      <div className="App">
       {item.title} ({stuffId})
      </div>
    );
  }

  export default StuffItem;