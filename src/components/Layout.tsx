import React from "react"
import { evaluateLightMode } from "../utils/RenderingUtils"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"


class Layout extends React.Component {
    state = {
        lightMode: false
    }

    toggleStyleMode = () => {
        this.setState({
            lightMode: !this.state.lightMode
        })
    }
    
    render(): React.ReactNode {
        return (
            <div className="layout">
                <Sidebar lightMode={this.state.lightMode} toogleStyleMode={this.toggleStyleMode} />
                <MainContent lightMode={this.state.lightMode}/>
                <footer className={`footer ${evaluateLightMode(this.state.lightMode)}`}>
                    <p>Developed by Breno Ferreira</p>
                </footer>
            </div>
        )
    }
}

export default Layout
