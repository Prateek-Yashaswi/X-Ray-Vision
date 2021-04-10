# XRAY Vision

<p align="center">
<img width="500" height="500" src="https://user-images.githubusercontent.com/52810449/114263704-caecdf00-9a04-11eb-8612-7284f2e749ae.png">
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description
To develop an interactive Web Application on React for medical experts and patients to localize and classify abnormalities in Chest Radiographs using advanced Deep Learning techniques like Facebook AI's Detectron2 using PyTorch.

## Implementation
Our web app will primarily be based on a deep learning model, which uses convolutional neural networks (with transfer learning) and advanced computer vision; Image preprocessing, and augmentation to preprocess chest radiographs and then localize abnormalities, and classify them into 14 different thoracic disorders. To facilitate this model we will make a web app around it, by using the MERN stack(MongoDB, Express, React, Node). The model will be developed using TensorFlow and python programming language. Our Web Application shall provide doctors with subsequent data regarding the analysis, from various research articles, case studies, and so forth, by using Web Scraping Techniques and APIs.


## Applications

1. Localization and Classification of Chest Radiograms. Misinterpretation of Chest Radiograms is a frequent cause for Medical Misdiagnosis, even by experts. Existing CAD systems have no specified technique for localizing the thoracic abnormality in the X-Ray, which leads to inaccuracy.

2. Follow-Up Information on Diagnosed Thoracic Abnormality. To provide medical experts with supplementary information on the diagnosed abnormality.

3. Connecting Platform for Doctors and Patients To create an open-for-all platform for everyone to discuss, review and exchange information on the subject of these diseases.

## Available Scripts(React)

In the project directory, you can run:

 `npm start`
 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# :green_book: Steps for usage

- Clone the repository: 

        git clone https://github.com/Prateek-Yashaswi/rakathon2021.git
- Enter The directory: 

        cd rakathon2021
- Set up the React environment with dependencies:

        npm install
        npm install firebase
        npm install axios
        npm install --save-dev @iconify/react @iconify-icons/file-icons
        npm install react-bootstrap bootstrap
        npm install react-router-dom
- Launch the React App:
        
        npm start
- Terminate the program from the terminal:

        Ctrl+C

That's it!
