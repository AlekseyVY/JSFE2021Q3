
const CreateNode = ({tag, className, id, content, link, img, blank, alt}, parent) => {
  const element = document.createElement(tag)
  if(className) element.setAttribute('class', className);
  if(id) element.setAttribute('id', id);
  if(alt) element.setAttribute('alt', alt);
  if(link) element.href = link;
  if(blank) element.target = "_blank";
  if(img) element.src = img;
  if(Array.isArray(content) && content.length > 1) {
    content.map((ele) => {
      CreateNode(ele, element)
    })
  } else {
    if(typeof content[0] === 'object') {
      CreateNode(content[0], element)
    } else {
      element.innerText = content;
    }
  }
  parent.appendChild(element)
}

export default CreateNode;