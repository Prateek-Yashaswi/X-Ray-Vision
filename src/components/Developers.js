import React from 'react';
import './Developers.css';
import 'font-awesome/css/font-awesome.min.css';
import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/fa-brands/linkedin';
import instagramIcon from '@iconify-icons/bi/instagram';
import githubIcon from '@iconify-icons/logos/github-icon';

const Devs = () => {
    return (
        <div className="devs-body">
            <div className="av1-div">
                <div id="av-sivin"></div>
                <h2 className="dev-header"><b>Sivin Varughese</b></h2>
                <div className="sivin-text">
                <h5>
                    <b>
                    I'm an AI/ML enthusiast and computer vision developer. 
                    I've worked with several Machine Learning, Deep Learning 
                    and IoT projects and won various competitions. I also do 
                    graphic designing and front-end development for websites 
                    and mobile application prototypes. My hobbies include photography, 
                    video editing, playing piano, playing football. My projects 
                    include RNN stock predictor, automated fire extinguishing systems, 
                    deep learning approach for image classifiers, detectors, segmentors 
                    and FabDigiLocker.
                    </b>
                </h5>
                </div>
                <div className="footer">
                <div className="icons">
                    <a href="https://www.instagram.com/i_sivin"><Icon icon={instagramIcon} className="social-logo"/></a>
                    <a href="https://www.linkedin.com/in/sivin/"><Icon icon={linkedinIcon} className="social-logo"/></a>
                    <a href="https://www.github.com/sivinx11"><Icon icon={githubIcon} className="social-logo"/></a>
                </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="av2-div">
                <div id="av-sajan"></div>
                <h2 className="dev-header"><b>Sajan Kumar Kar</b></h2>
                <div className="sajan-text">
                <h5>
                    <b>
                    An independent and self-motivated student, currently 
                    working on concepts of Machine Learning, Deep Learning 
                    and Data Science. Also keeping in touch with Data Structures 
                    and Algorithms. A result-oriented person with abilities to endure 
                    boredom, persist, devise, seek assistance and achieve tasks. 
                    Recognized by peers and professors as a consistent, resolute performer 
                    who demonstrates teamwork and communication to ensure quality, 
                    timely project completion.
                    </b>
                </h5>
                </div>
                <div className="footer">
                <div className="icons">
                    <a href="https://www.instagram.com/no_ifs_ands_o_buts"><Icon icon={instagramIcon} className="social-logo"/></a>
                    <a href="https://www.linkedin.com/in/sajan-kumar-kar-04b28b199"><Icon icon={linkedinIcon} className="social-logo"/></a>
                    <a href="https://github.com/NatsuD99"><Icon icon={githubIcon} className="social-logo"/></a>
                </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="av3-div">
                <div id="av-prateek"></div>
                <h2 className="dev-header"><b>Prateek Yashaswi</b></h2>
                <div className="sivin-text">
                <h5>
                    <b>
                    I am a 3rd year Student pursuing B.Tech in Computer Science and 
                    Engineering from SRM Institute of Science and Technology. I am 
                    currently working to enhance my skills in the field of Web and 
                    Application Development. I like to work with full determination 
                    and aim to deliver my work on time. Along with that, I am very 
                    eager to acquire knowledge about new concepts in the field of Technology. Few Things I Use To Counter Boredom Are Playing Online Games With Friends And Listening To Music.
                    </b>
                </h5>
                </div>
                <div className="footer">
                <div className="icons">
                    <a href="https://www.instagram.com/prateek_yashaswi"><Icon icon={instagramIcon} className="social-logo"/></a>
                    <a href="https://www.linkedin.com/mwlite/in/prateek-yashaswi-b35b701a2"><Icon icon={linkedinIcon} className="social-logo"/></a>
                    <a href="https://github.com/Prateek-Yashaswi"><Icon icon={githubIcon} className="social-logo"/></a>
                </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="av4-div">
                <div id="av-rishav"></div>
                <h2 className="dev-header"><b>Rishav Chowdhury</b></h2>
                <div className="rishav-text">
                <h5>
                    <b>
                        I am a Frontend Web Developer and Graphic Designer who 
                        dabbles in Neural Networks on weekdays and writes content 
                        or poetry on weekends. I was a National Debate Champion back
                        in the good old days. I am also a Professional Emcee, having done 
                        events for MTV Coke Studio and Under25. I love the camera and curating
                        edits is a passion of mine. You will find me working on engaging 
                        Full-Stack Projects or roaming ecletic locations throughout the country 
                        searching for that perfect click.                    
                    </b>
                </h5>
                </div>
                <div className="footer">
                <div className="icons">
                    <a href="https://www.instagram.com/antisocial._.extrovert"><Icon icon={instagramIcon} className="social-logo"/></a>
                    <a href="https://www.linkedin.com/in/rishav-chowdhury-99490417b"><Icon icon={linkedinIcon} className="social-logo"/></a>
                    <a href="https://github.com/Rishav-Chowdhury"><Icon icon={githubIcon} className="social-logo"/></a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Devs;