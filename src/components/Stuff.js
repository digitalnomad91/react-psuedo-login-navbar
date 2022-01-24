import React from 'react';
import data from "../items.json";
import { useNavigate, LinkContainer, Link, BrowserRouter} from 'react-router-dom';


function Stuff() {
    return <div>
        THIS IS THE STUFFPAGE
        {
         data && data.length>0 && data.map((item)=>
            <Link className="nav-link" to={'/stuff/'+item.id}>{item.title}</Link>
         )
       }
    </div>;
}

export default Stuff;