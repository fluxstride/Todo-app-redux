const truncate = (text, length) => {
  //creating a variable for the truncated text
  let truncatedText = "";

  //checking if the length of the text is same as the specified length
  if (text.length > length) {
    let textArr = [...text];
    textArr.length = length;

    //looping through with the length of text specified
    for (let index = 0; index < textArr.length; index++) {
      truncatedText += textArr[index];
    }
    truncatedText += "...";
    return truncatedText;
  }

  //return the text if its length is less than or equals to the specified 
  return text;
};

export default truncate;
