import React from "react"
import { evaluateLightMode } from "../utils/RenderingUtils"
import ImageUploader from "./ImageDropzone"

interface MainContentProps {
    lightMode: boolean
 }

class MainContent extends React.Component<MainContentProps> {

    onImagesUpload = async (images: FileList | null) => {
        if (!images) return;

        try {
            // const responses = await Promise.all()
        } catch (error) {
            console.error('Error uploading images:', error)
        }
    }

    render(): React.ReactNode {
        const { lightMode } = this.props
        return (
            <div className={`main-content ${evaluateLightMode(lightMode)}`}>
                <ImageUploader lightMode={lightMode} onImagesUpload={() => {}}/>
            </div>
        )
    }
}

export default MainContent