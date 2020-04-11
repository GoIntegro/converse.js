import { html } from "lit-html";

export default  (o) => !o.imageUrl ? html`<span class="letter ${o.firstInitial}">${o.initials}</span>`: html`<img src="${o.imageUrl}" alt="" height="50" title="${o.fullname}" width="50" />`