const strings: string[] = [
  'This is **bold** text.',
  'This is __underlined__ text.',
  'This is ~~strikethrough~~ text.',
  'This is *italic* text.',
  'This is a hyperlink: https://www.google.com/',
  'This is an email: leeroy.jenkins@gmail.com',
];

/**
 * Converts markdown strings to formatted html using regular expressions.
 * @param string - String in markdown format
 * @returns String converted to formatted html
 */

const markdown = function (string: string): string {
  let newText = string.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); //replace markdown bold with HTML strong tags
  newText = newText.replace(/\_\_(.*?)\_\_/g, '<u>$1</u>'); //replace markdown underline with HTML underline tags
  newText = newText.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>'); //replace markdown strikethrough with HTML strikethrough tags
  newText = newText.replace(/\*(.*?)\*/g, '<i>$1</i>'); //replace markdown italic with HTML italic tags
  newText = newText.replace(
    /https?:\/\/[\w\-._~:\/?#\[\]@!$&'()*+,;=%]+/g, //convert URL to clickable hyperlink
    '<a href="$&">$&</a>'
  );
  newText = newText.replace(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, //convert email address into clickable mailto link
    '<a href="mailto:$1">$1</a>'
  );
  return newText;
};

const contentElement = document.getElementById('content');
// Log the formatted html strings to the console
strings.forEach((string) => {
  console.log(markdown(string));
  const formattedString = markdown(string);
  const element = document.createElement('h3');
  element.innerHTML = formattedString;
  contentElement.appendChild(element);
});

/*
BONUS:
Render the formatted html strings to index.html
*/
