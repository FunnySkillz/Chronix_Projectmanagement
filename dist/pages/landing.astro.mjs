/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BkPtbGje.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BYnkHu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderLanding", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/header", "client:component-export": "default" })} ${renderComponent($$result2, "CategoriesSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/categories", "client:component-export": "default" })} ${renderComponent($$result2, "ContentSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/content", "client:component-export": "default" })} ${renderComponent($$result2, "BasicSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/starterPack", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "FooterSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/footer", "client:component-export": "default" })} </main> ` })}`;
}, "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/landing.astro", void 0);

const $$file = "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/landing.astro";
const $$url = "/astro-launch-ui/landing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Landing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
