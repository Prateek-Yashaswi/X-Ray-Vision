import React from 'react';
import './Technologies.css';
import { Icon} from '@iconify/react';
import pytorchIcon from '@iconify-icons/logos/pytorch';
import reactIcon from '@iconify-icons/logos/react';
import firebaseIcon from '@iconify-icons/logos/firebase';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import herokuIcon from '@iconify-icons/logos/heroku-icon';

const Tech = () => {
    return (
        <div className="tech-body">
            <div className="tech-header">
                <div className="tech-header1">
                    <h1 ><b>TECHNOLOGIES USED</b></h1>
                </div>
                <div className="tech-header-text">
                    <h5>
                        <b>
                        X-Ray Vision is an interactive Web Application
                        for medical experts and patients to localize and
                        classify abnormalities in Chest Radiographs using
                        advanced Deep Learning techniques.
                        Our model shall serve as an automated platform to
                        localize and classify 14 types of thoracic abnormalities
                        and can be used by doctors as a valuable second opinion
                        for their diagnosis.
                        Our Web Application shall provide doctors with subsequent
                        data regarding the analysis, from various research
                        articles, case studies and so forth, by using
                        Web Scraping Techniques and APIs.
                        X-Ray Vision also provides a discussion forum for doctors
                        and patients alike to exchange information on thoracic
                        abnormalities.
                        In the future, X-Ray Vision aims to be a widely used tool
                        by the medical community.
                        </b>
                    </h5>
                </div>

            </div>

            <div className="techno">
                <div className="t0">
                    <Icon icon={reactIcon} className="logo-img" />
                    <h2 className="tech-header2">React</h2>
                    <p className="tech-header3">React is an open-source, 
                    front end, JavaScript library for building user interfaces 
                    or UI components. It is maintained by Facebook. It lets you 
                    compose complex UIs from small and isolated pieces of code 
                    called “components”. React is at the heart of the X-Ray Vision 
                    Application, as the front-end of our application relies solely 
                    on this framework, along with additional CSS libraries like Bootstrap.
                    </p>
                </div>

                <div class="t1">
                    <Icon icon={firebaseIcon} className="logo-img" />
                    <h2 className="tech-header2">Firebase</h2>
                    <p className="tech-header3">Firebase is a Backend-as-a-Service - BaaS - 
                    that started as a YC11 startup and grew into a next-generation 
                    app-development platform on Google Cloud. It serves as a Real-Time 
                    Database for creating mobile and web applications. It has built-in 
                    features like analytics, authentication, databases, configuration, 
                    file storage, and push messaging. The services are hosted in the cloud 
                    and are easy to scale with very effort.
                    </p>
                </div>

                <div class="t1">
                    <Icon icon={pytorchIcon} className="logo-img" />
                    <h2 className="tech-header2">PyTorch</h2>
                    <p className="tech-header3">PyTorch is an open source machine learning 
                    library based on the Torch library, used for applications such as computer 
                    vision and natural language processing, primarily developed by Facebook's AI 
                    Research lab. It is known for providing two of the most high-level features; 
                    namely, tensor computations with strong GPU acceleration support and building 
                    deep neural networks on a tape-based autograd systems.
                    </p>
                </div>
            </div>

            <div className="techno">
                <div className="t2">
                    <Icon icon={nodejsIcon} className="logo-img"/>
                    <h2 className="tech-header2">Node</h2>
                    <p className="tech-header3">Node.js is an open-source, cross-platform, 
                    back-end JavaScript runtime environment that runs on the V8 engine and 
                    executes JavaScript code outside a web browser. Node.js lets developers 
                    use JavaScript to write command line tools and for server-side scripting 
                    to produce dynamic web page content before the page is sent to the user's 
                    web browser. It used to write server-side applications with access to the 
                    operating system.
                    </p>
                </div>

                <div class="t2">
                    <Icon icon={herokuIcon} className="logo-img"/>
                    <h2 className="tech-header2">Heroku</h2>
                    <p className="tech-header3">Heroku is a container-based cloud Platform as 
                    a Service (PaaS) that enables developers to build, run, and operate applications 
                    entirely in the cloud. It is a cloud platform as a service supporting several programming 
                    languages. It has integrated data services and a powerful ecosystem for deploying and 
                    running modern applications. Polymorphism and Scalability are reasons why Heroku is 
                    a preferred platform.
                    </p>
                </div>

                <div class="t3">
                    <img src="https://miro.medium.com/max/4000/0*VbMjGBHMC6GnDKUp.png" className='logo-img' alt=""/>
                    <h2 className="tech-header2">Detectron</h2>
                    <p className="tech-header3">Detectron2 is Facebook AI Research's next generation software 
                    system that implements state-of-the-art object detection algorithms. It is a ground-up 
                    rewrite of the previous version, Detectron, and it originates from maskrcnn-benchmark. 
                    It is powered by the PyTorch deep learning framework. Models can be exported to TorchScript 
                    format or Caffe2 format for deployment. Our Model utilises this library to localize abnormalities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tech;