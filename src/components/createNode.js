
const CreateNode = ({tag, className, id, content, link, img, blank, alt, type, lazy, name, value, placeholder, selected, disabled ,hidden, onchange}, parent) => {
  const element = document.createElement(tag)
  if(className) element.setAttribute('class', className);
  if(id) element.setAttribute('id', id);
  if(alt) element.setAttribute('alt', alt);
  if(link) element.href = link;
  if(lazy) element.loading = 'lazy';
  if(blank) element.target = "_blank";
  if(img) element.src = img;
  if(selected) element.selected = true;
  if(disabled) element.disabled = true;
  if(hidden) element.hidden = true;
  if(onchange) element.onchange = onchange;
  if(placeholder) element.placeholder = placeholder;
  if(value) element.value = value;
  if(type) element.type = type;
  if(name) element.name = name;
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