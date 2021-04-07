import React from 'react';
import './Header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';


function Header() {

    function downloadPpt(){
        window.open("https://drive.google.com/file/d/1jVU7U54vCE6iXqIkACKMIIsuAt12y5co/view?usp=sharing");
    }


    return (
        <div id="content-body">
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
                        Follow-up Analysis : After classifying the disorder, the Web App uses Web Scraping and APIs to provide additional information on that specific abnormality.
                    </li>
                </ol>
            </div>
            <hr></hr>
        </div>
    );
}

export default Header;