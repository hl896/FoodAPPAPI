import React,{TableRowColumn} from 'react';
import "./App.css";
const Recipe = ({title, calories, image}) => {
    
    return(
        <div className="recipeItem">
            <h1>{title}</h1>
            <p><strong>calories(KJ):</strong>{calories}</p>
            <img src={image}  alt=""/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Recipe;