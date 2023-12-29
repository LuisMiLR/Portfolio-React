import React from "react";

export const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Disponible contactez moi!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Icon Email" />
          <a href=""></a>
        </li>
      </ul>
    </footer>
  );
};
