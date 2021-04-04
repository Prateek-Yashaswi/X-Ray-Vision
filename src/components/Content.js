import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
import axios from 'axios';

class Content extends Component {

    state = {

        // Initially, no file is selected
        selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div className='file-details'>
                    <hr></hr>
                    <h2>File Details:</h2>

                    <p>File Name: {this.state.selectedFile.name}</p>


                    <p>File Type: {this.state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                    <button onClick={this.onFileUpload} className='upload-button btn btn-dark'>
                        Upload!
				</button>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h6>Choose The File First</h6>
                </div>
            );
        }
    };

    render() {

        return (
            <div className="desc">
                <h1>
                    X-Ray Vision
			</h1>
                <br></br>
                <h3>
                    File Upload
			</h3>
                <br></br>
                <div>
                    <input type="file" onChange={this.onFileChange} className='btn input-button' />
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default Content;