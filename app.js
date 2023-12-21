
const heading = [
    React.createElement("h1",{id:"heading"},"manual h1 creation react CDN"),
    React.createElement("h2",{id:"heading"},"manual h2 creation react CDN"),
];
const child = React.createElement("div",{id:"child"},heading);
const parent = React.createElement("div",{id:"parent"},child);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);