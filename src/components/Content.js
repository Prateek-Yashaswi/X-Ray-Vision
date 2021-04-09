import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
import axios from 'axios';

class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            Base64: "Resultant Image Will Be Displayed Here",
        };
    }

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
            "image",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("https://testedone.herokuapp.com/maskImage", formData,{
            onUploadProgress: ProgressEvent => {
                console.log("Upload Progress: " + Math.random((ProgressEvent.loaded/ProgressEvent.total)*100) + "%");
            }
        }).then(res=>{
            var ImageData=res["data"]["status"];
            ImageData = ImageData.substring(2,ImageData.length-1)
            this.setState(
                {Base64:"data:image/jpeg;base64,"+ImageData});
            });
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
                        Upload !
				</button>
                <div>
                    <img alt="Click Upload To Get The Resultant Image" id="responseImg" src={this.state.Base64}></img>
                </div>
                </div>
            );
        }

        else {
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
                <h1 className="how-to-work">How To Work With Our System</h1>
                <br></br>
                <ul>
                    <li>
                        Select An Image From Your Computer.
                    </li>
                    <li>
                        Uplaod It To The Server.
                    </li>
                    <li>
                        Our Server Will Consider The Uploaded Image As An Input To Our Model.
                    </li>
                    <li>
                        Our Model Will Process The Image And Generate The Appropriate Output.
                    </li>
                    <li>
                        The Results Are Converted To A PDF File Which Will Be Returned By The Server And Will Be Downloaded Into The Client's System.
                    </li>
                </ul>
                <hr></hr>
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