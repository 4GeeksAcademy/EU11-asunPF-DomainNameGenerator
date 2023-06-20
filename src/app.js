/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-domain").innerHTML = generateDomain();
};

const generateDomain = () => {
  const excuseObject = {
    pronoun: ["save", "our"],
    adj: ["great", "school"],
    noun: ["jogger", "yoga"],
    end: [".com"]
  };

  let finalPhrase = "";

  Object.values(excuseObject).forEach(arr => {
    const randomizingTheExcuseObjectValues = Math.floor(
      Math.random() * arr.length
    );
    finalPhrase += arr[randomizingTheExcuseObjectValues] + "";
  });

  return finalPhrase;
};
