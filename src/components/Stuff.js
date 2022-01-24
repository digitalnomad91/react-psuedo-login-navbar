import React from 'react';
import data from "../items.json";
import { Link } from 'react-router-dom';

/* Stuff page content */
function Stuff() {
    return <div>
        THIS IS THE STUFFPAGE
        {
        /* Grab data from items.json file & then display all items using map (and generate a link for each one) */
         data && data.length>0 && data.map((item)=>
            <Link key={item.id} className="nav-link" to={'/stuff/'+item.id}>{item.title}</Link>
         )
       }
    </div>;
}

export default Stuff;