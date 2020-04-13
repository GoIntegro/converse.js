import { html } from "lit-html";

export default  (o) => {
    if (!o.imageUrl && !o.image){
        return  html`<span class="letter ${o.firstInitial}">${o.initials}</span>`;
    } else if (o.image){
        return  html`<img src="data:${o.image_type};base64,${o.image}" alt="" height="50" title="${o.fullname}" width="50" />`;
    } else if (o.imageUrl) {
        return html`<img src="${o.imageUrl}" alt="" height="50" title="${o.fullname}" width="50" />`;
    }
}
