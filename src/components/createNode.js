
const CreateNode = (props, parent) => {
  const element = document.createElement(props.tag)
  if(props.className) element.setAttribute('class', props.className);
  if(props.id) element.setAttribute('id', props.id);
  if(props.data_glide_el) element.setAttribute('data-glide-el', props.data_glide_el);
  if(props.data_glide_dir) element.setAttribute('data-glide-dir', props.data_glide_dir)
  if(props.alt) element.setAttribute('alt', props.alt);
  if(props.link) element.href = props.link;
  if(props.lazy) element.loading = 'lazy';
  if(props.blank) element.target = "_blank";
  if(props.img) element.src = props.img;
  if(props.type) element.type = props.type;
  if(props.selected) element.selected = true;
  if(props.disabled) element.disabled = true;
  if(props.hidden) element.hidden = true;
  if(props.onchange) element.onchange = props.onchange;
  if(props.placeholder) element.placeholder = props.placeholder;
  if(props.value) element.value = props.value;
  if(props.type) element.type = props.type;
  if(props.name) element.name = props.name;
  if(Array.isArray(props.content) && props.content.length > 1) {
    props.content.map((ele) => {
      CreateNode(ele, element)
    })
  } else {
    if(typeof props.content[0] === 'object') {
      CreateNode(props.content[0], element)
    } else {
      element.innerText = props.content;
    }
  }
  parent.appendChild(element)
}

export default CreateNode;