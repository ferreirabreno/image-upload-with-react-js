import React from "react"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"

interface LayoutProps { 
    lightMode: boolean
}

class Layout extends React.Component<LayoutProps> {

    render(): React.ReactNode {
        const { lightMode } = this.props
        return (
            <div>
                <Sidebar lightMode={lightMode} />
                <MainContent lightMode={lightMode}/>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default Layout