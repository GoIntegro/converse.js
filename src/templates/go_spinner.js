import { html } from "lit-html";

export default () => html`<div class="overlayloading active">
<!-- Loading: Start -->
<div class="loading small active">
  <!-- Inside: Start -->
  <div class="insides">
    <!-- Left: Start -->
    <div class="left">
      <!-- Circle: Start -->
      <div class="circle">Cargando...</div>
      <!-- Circle: End -->
    </div>
    <!-- Left: End -->
    <!-- Center: Start -->
    <div class="center">
      <!-- Circle: Start -->
      <div class="circle">Cargando...</div>
      <!-- Circle: End -->
    </div>
    <!-- Center: End -->
    <!-- Right: Start -->
    <div class="right">
      <!-- Circle: Start -->
      <div class="circle">Cargando...</div>
      <!-- Circle: End -->
    </div>
    <!-- Right: End -->
  </div>
  <!-- Inside: End -->
</div>
<!-- Loading: End -->
</div>`;
