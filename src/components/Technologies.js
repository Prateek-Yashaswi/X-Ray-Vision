import React from 'react';
import './Technologies.css';
import { Icon, InlineIcon } from '@iconify/react';
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
                    <h5>X-Ray Vision is an interactive Web Application
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
                    In the future, X-Ray Vision aism to be a widely used tool
                    by the medical community.
                </h5>
                </div>

            </div>

            <div className="techno">
                <div className="t1">
                    <Icon icon={reactIcon} className="logo-img" />
                    <h2 className="tech-header2">React</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>

                <div class="t1">
                    <Icon icon={firebaseIcon} className="logo-img" />
                    <h2 className="tech-header2">Firebase</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>

                <div class="t1">
                    <Icon icon={pytorchIcon} className="logo-img" />
                    <h2 className="tech-header2">PyTorch</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>
            </div>

            <div className="techno">
                <div className="t2">
                    <Icon icon={nodejsIcon} className="logo-img"/>
                    <h2 className="tech-header2">React</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>

                <div class="t2">
                    <Icon icon={herokuIcon} className="logo-img"/>
                    <h2 className="tech-header2">Firebase</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>

                <div class="t2">
                    <img src="https://miro.medium.com/max/4000/0*VbMjGBHMC6GnDKUp.png" className='logo-img'/>
                    <h2 className="tech-header2">PyTorch</h2>
                    <p className="tech-header3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut nibh non leo faucibus gravida.
                    Nulla volutpat lobortis erat commodo mollis.
                    Donec ornare posuere eleifend. Sed vel blandit nunc.
                    Sed lobortis lacinia massa nec rutrum.
                    Curabitur diam tellus, eleifend sed tellus non, pharetra faucibus nunc.
                    Nam nisl urna, pulvinar eu semper vitae, semper efficitur velit. Suspendisse potenti.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tech;