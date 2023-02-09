import React from "react";
import SidebarItem from "./SidebarItem";
import { FaHome,  FaLightbulb, FaSignOutAlt } from 'react-icons/fa'

interface SidebarProps { }

class Sidebar extends React.Component<SidebarProps> {
    
    render(): React.ReactNode {
        return (
            <div className="sidebar">
                <SidebarItem name="home" icon={<FaHome/>} action={() => {}} />
                <SidebarItem name="light-mode" icon={<FaLightbulb/>} action={() => {}} />
                <SidebarItem name="logout" icon={<FaSignOutAlt/>} action={() => {}} />
            </div>
        )
    }
}

export default Sidebar