import React from "react"
import Sidebar from "./Sidebar"

interface LayoutProps { }

class Layout extends React.Component<LayoutProps> {

    render(): React.ReactNode {
        return (
            <div>
                <Sidebar />
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default Layout