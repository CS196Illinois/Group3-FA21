import React, { Component } from "react";
// import profilePicture example from "@*address*"
// import "./profilePicture.css";

class profilePicture extends Component {
    constructor(props) {
        super(props);

        this.profilePictureRef = React.createRef(); 
    }

    state = {
        // when no file/profile picture is selected
        selectedFile: null
    };
    // file/profile picture selection
    profilePicSelection = event => {
        this.setState({ selectedFile: event.target.file[0] });
    };

    uploadUserPic() {
        const currentUserData = this.profilePicture.current;
        const currentImageData = currentUserData.getData();
        const currentImageFile = currentImageData.file;
        const currentImageURL = currentUserData.getImageAsDataUrl();

        currentUserData = new UserData(); 
        currentUserData.append( 
            "myfile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        // print data for testing
        console.log(this.state.selectedFile);

        // backend stuff here


        // file upload to page 
        // for testing purposes
        currentUserFileData = () => {
            if (this.state.selectedFile) {
                return (
                    <div class = "fileInfoTitle">
                        <h3>File Data: </h3>

                        <div class = "fileInfoName">
                            <p>
                                File Name: {this.state.selectedFile.name}
                            </p>
                        </div>

                        <div class = "fileInfoType">
                            <p>
                                File Type: {this.state.selectedFile.type}
                            </p>
                        </div>                        
                    </div>
                )
            }
        }
    }
    render() {
            
        return (
            <div class = "fileUpload">
                <div class = "fileUploadButton">
                    <input type = "Select Your Profile Picture" onSelect = {this.onFileSelect} />
                    <button onClick = {this.onFileUpload}>
                        Upload Your Photo
                    </button>
                </div>
                {this.currentUserUploadedProfilePciture}
            </div>    
        );
    }
}

export default App;