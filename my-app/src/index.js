import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import "./style.css"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


// ReactDOM.render(<App />, document.getElementById("root"))

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)