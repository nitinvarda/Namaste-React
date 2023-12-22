import React from 'react';
import ReactDOM from 'react-dom/client'


// React Element
const title =(
    <h1>Namaste React using JSX </h1>
);

// React Component
// component composition
const HeadingComponent = () =>{
    return (
        <div className='container'>
            {title}
            <h1>Namaste React Functional Component</h1>
        </div>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);