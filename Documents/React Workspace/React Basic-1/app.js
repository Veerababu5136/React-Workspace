
let heading1=React.createElement(

    'h1',
    {
        id:'heading-1'

    },

    "this heading using react"
)


let ele=document.getElementById("root");


let root=ReactDOM.createRoot(ele);

root.render(heading1);
