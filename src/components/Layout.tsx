import React from "react"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"

interface LayoutProps { 
    lightMode?: boolean
}

class Layout extends React.Component<LayoutProps> {
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
            </div>
        )
    }
}

export default Layout
