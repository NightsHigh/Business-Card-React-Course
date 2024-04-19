import React from "react"
import ReactDOM from "react-dom"
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"

function App(){
    return(
        <div className="MainContent">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))