import React from 'react'
import { getImageUrl } from '../../utils';

export const About = () => {
  return (<section>
    <h2>About</h2>
    <div>
        <img src={getImageUrl("about/aboutImage.png")} alt="foto of me" 
        />
        <ul>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div>
                    <h3>Frontend Développeur</h3>
                    <p>J'ai acquis une expérience en création responsive et en site optimisé</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div>
                    <h3>Backend Développeur</h3>
                    <p>J'ai acquis une expérience en creation de systeme backend et d'API REST</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
                <div>
                    <h3>UI design</h3>
                    <p>J'ai crée plusieur landing pages et </p>
                </div>
            </li>
        </ul>
    </div>
    </section>
  );
};
