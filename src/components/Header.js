import React from 'react';
import './Header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Header() {

    function downloadPpt(){
        console.log("UnderDevelopment");
    }
    return (
        <div id="customNav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Rakathon 2021 : Team EIS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Theme And Solution</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Main Content</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Developers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Technology Used</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='content'>
                <span className="content-text1">Problem Statement : Healthcare</span>
                <hr></hr>
                <p>
                    <span className='problem-statement'>Below is  example problem statement, you can choose to solve any problem related to the theme</span>
                    <hr></hr>
                    <br></br>
                    <ul>
                        <li>One of the most critical problems in healthcare is predicting the likelihood of hospital readmission in case of chronic diseases such as diabetes to be able to allocate necessary resources such as beds, rooms, specialists, and medical staff, for an acceptable quality of service. How do we address this thru Technology</li>
                        <br></br>
                        <li>Medical treatment is centered on a specific disease normally categorized by its pathological changes and clinical symptom. Medication is effective for a subset of patients and cause varied adverse effects among other set of patients. Can Personalized Drug discovery solve this problem? </li>
                    </ul>
                </p>
            </div>

            <div className='content'>
                <span className="content-text">Our Solution</span>
                <hr></hr>
                <br></br>
                <span className='problem-statement'>
                    To develop an interactive Web Application for medical experts and patients to localize and classify abnormalities in Chest Radiographs using advanced Deep Learning techniques.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <button className='btn btn-dark' onClick={downloadPpt}>Click To Get More Details</button>
            </div>

            <div className='content'>
                <span className="content-text">Features</span>
                <hr></hr>
                <ol>
                    <li>
                        Localization : Preprocessing and Augmentation of Chest Radiograms and using Computer Vision Techniques to Localize Thoracic Abnormalities
                    </li>
                    <li>
                        Classification : Using Transfer Learning and Convolutional Neural Networks (CNNs) to classify the detected Abnormality into one of 14 Thoracic Disorders.
                    </li>
                    <li>
                        Expert Recommendations : Patients can utilize this Web App Feature to view and make appointments with oncology and radiology specialists, based on location and speciality.
                    </li>
                    <li>
                        Different Login Portals : The Web App shall have different Login Portals for Doctors and Patients. Doctors can use the model for analysis, while Patients can get recommendations and use the Discussion Forum.
                    </li>
                    <li>
                        Discussion Forum : The Web App shall include an open-for-all Discussion Forum that Doctors can utilize to consult other Specialists and Patients can use to get suggestions from Doctors.
                    </li>
                    <li>
                        Follow-up Alalysis : After classifying the disorder, the Web App uses Web Scraping and APIs to provide additional information on that specific abnormality.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Header;