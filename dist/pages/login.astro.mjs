/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BkPtbGje.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BYnkHu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SignIn", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/signin", "client:component-export": "default" })} </main> ` })}`;
}, "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/login.astro", void 0);

const $$file = "D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/login.astro";
const $$url = "/astro-launch-ui/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
