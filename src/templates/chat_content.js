import "../components/chat_content.js";
import { html } from "lit-html";


export default (o) => html`<converse-chat-content
    ._converse=${o._converse}
    .nonce=${o.nonce}
    .model=${o.model}></converse-chat-content>`;
