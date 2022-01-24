import React from 'react';
import data from "../items.json";
import { Link } from 'react-router-dom';


function Stuff() {
    return <div>
        THIS IS THE STUFFPAGE
        {
         data && data.length>0 && data.map((item)=>
            <Link key={item.id} className="nav-link" to={'/stuff/'+item.id}>{item.title}</Link>
         )
       }
    </div>;
}

export default Stuff;