import React from "react";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
    name: string;
    icon: JSX.Element;
    action: () => void;
}

class SidebarItem extends React.Component<SidebarItemProps> {
    render(): React.ReactNode {
        const { name, icon, action } = this.props
        return (
            <div onClick={action} className="sidebar-item">
                {icon}
            </div>    
        )
    }
}

export default SidebarItem