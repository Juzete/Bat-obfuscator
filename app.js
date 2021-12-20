const textarea = document.querySelector("#input");
const textareaobf = document.querySelector("#output");

function print() {
  const alphabet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const set = Math.random().toString(36).substring(9); // string with 4 random chars
  const letters = Array.from(alphabet)
    .sort(() => Math.random() - 0.5)
    .join(""); // shuffle the alphabet
  const setlettre = `Set  ${set}=${letters}`;
  const code = textarea.value;
  let codeobfu = "";
  const lettertab = {};
  Array.from(letters).forEach(
    (val, index) =>
      (lettertab[letters[index]] = "%" + set + ":~" + index + ",1%")
  ); // give each character a common value
  Array.from(code).forEach((val, index) =>
    lettertab[code[index]]
      ? (codeobfu += lettertab[code[index]])
      : (codeobfu += code[index])
  ); // checking for coincidence with elements of the generated object
  textareaobf.value = `@echo off\n${setlettre}\ncls \n${codeobfu}`;
}

