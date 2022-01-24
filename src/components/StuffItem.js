import {  useParams  } from "react-router-dom";
import data from "../items.json";

function StuffItem() {
    let { stuffId } = useParams();
    let item = data.find(x => x.id === stuffId);

    return (
      <div className="App">
       {item.title} ({stuffId})
      </div>
    );
  }

  export default StuffItem;