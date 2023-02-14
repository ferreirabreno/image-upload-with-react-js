import React from "react";
import SidebarItem from "./SidebarItem";
import { FaHome,  FaLightbulb, FaMoon, FaSignOutAlt } from 'react-icons/fa'
import { evaluateLightMode } from "../utils/RenderingUtils";

interface SidebarProps { 
    lightMode: boolean
    toogleStyleMode: () => void
}

class Sidebar extends React.Component<SidebarProps> {

    toogleStyleModeIcon = (lightMode: boolean): JSX.Element => {
        return lightMode ? <FaMoon className="sidebar-item-icon"/> : <FaLightbulb className="sidebar-item-icon"/>
    }
    
    render(): React.ReactNode {
        const { lightMode, toogleStyleMode } = this.props
        return (
            <div className={`sidebar ${evaluateLightMode(lightMode)}`}>
                <SidebarItem name="light-mode" icon={this.toogleStyleModeIcon(lightMode)} action={toogleStyleMode} />
                <SidebarItem name="home" icon={<FaHome className="sidebar-item-icon"/>} action={() => {}} />
                <SidebarItem name="logout" icon={<FaSignOutAlt className="sidebar-item-icon"/>} action={() => {}} />
            </div>
        )
    }
}

export default Sidebar