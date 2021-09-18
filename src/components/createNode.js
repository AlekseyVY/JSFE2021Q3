
const CreateNode = ({tag, className, id, content, link, img}, parent) => {
  const element = document.createElement(tag)
  if(className) element.setAttribute('class', className);
  if(id) element.setAttribute('id', className);
  if(link) element.href = link;
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