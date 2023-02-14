import React, { ChangeEvent } from 'react'
import { evaluateLightMode } from '../utils/RenderingUtils'

interface ImageDropzoneProps {
  lightMode: boolean;
  onImagesUpload: (images: FileList | null) => void;
}

class ImageDropzone extends React.Component<ImageDropzoneProps> {
  inputRef = React.createRef<HTMLInputElement>()
  state = {
    dragging: false,
  }

  handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    this.setState({ dragging: true })
  }

  handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({ dragging: false })
  }

  handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({ dragging: false })
    const files = event.dataTransfer.files
    if (files) {
      this.props.onImagesUpload(files)
    }
  }

  handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      this.props.onImagesUpload(files)
    }
  }

  render() {
    const { lightMode } = this.props
    return (
      <div
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={(event) => event.preventDefault()}
        onDrop={this.handleDrop}
        onClick={() => this.inputRef.current!!.click()}
        className={`image-dropzone ${evaluateLightMode(lightMode)}`}
      >
        <input
          type="file"
          ref={this.inputRef}
          onChange={this.handleFileChange}
        />
          <p>{this.state.dragging ? 'Drop here' : 'Drag and drop your images or click to select'}</p>
      </div>
    )
  }
}

export default ImageDropzone
