import React from "react";
import SidebarItem from "./SidebarItem";
import { FaHome,  FaLightbulb, FaSignOutAlt } from 'react-icons/fa'
import { evaluateLightMode } from "../utils/RenderingUtils";

interface SidebarProps { 
    lightMode: boolean
}

class Sidebar extends React.Component<SidebarProps> {
    
    render(): React.ReactNode {
        const { lightMode } = this.props
        return (
            <div className="sidebar">
                <SidebarItem name="home" icon={<FaHome className={`${evaluateLightMode(lightMode)}`}/>} action={() => {}} />
                <SidebarItem name="light-mode" icon={<FaLightbulb className={`${evaluateLightMode(lightMode)}`}/>} action={} />
                <SidebarItem name="logout" icon={<FaSignOutAlt className={`${evaluateLightMode(lightMode)}`}/>} action={() => {}} />
            </div>
        )
    }
}

export default Sidebar