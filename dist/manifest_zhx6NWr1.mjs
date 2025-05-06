import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro_COOb8Mm7.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(t,n,r,e,m){t[e]=t[e]||[],t[e].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=e!=\"dataLayer\"?\"&l=\"+e:\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-NKDMSK6\");\n"}],"styles":[{"type":"external","src":"/_astro/about.ChxPObim.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(t,n,r,e,m){t[e]=t[e]||[],t[e].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=e!=\"dataLayer\"?\"&l=\"+e:\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-NKDMSK6\");\n"}],"styles":[{"type":"external","src":"/_astro/about.ChxPObim.css"}],"routeData":{"route":"/landing","type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing.astro","pathname":"/landing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(t,n,r,e,m){t[e]=t[e]||[],t[e].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=e!=\"dataLayer\"?\"&l=\"+e:\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-NKDMSK6\");\n"}],"styles":[{"type":"external","src":"/_astro/about.ChxPObim.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(t,n,r,e,m){t[e]=t[e]||[],t[e].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=e!=\"dataLayer\"?\"&l=\"+e:\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-NKDMSK6\");\n"}],"styles":[{"type":"external","src":"/_astro/about.ChxPObim.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/pages/landing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/landing@_@astro":"pages/landing.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_wrSYypQS.mjs","/src/pages/index.astro":"chunks/pages/index_IqJd1r7q.mjs","/src/pages/landing.astro":"chunks/pages/landing_zukf-L8G.mjs","\u0000@astrojs-manifest":"manifest_zhx6NWr1.mjs","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/node_modules/@astrojs/react/dist/vnode-children.js":"chunks/vnode-children_sDXyuKxk.mjs","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/header":"_astro/header.abTD19eo.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/palette":"_astro/palette.uUKwclrh.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/freeToPro":"_astro/freeToPro.ZoFVv9tu.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/github":"_astro/github.qypBRoBU.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/developerFree":"_astro/developerFree.232BrJZU.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/feature":"_astro/feature.bnYlCrGl.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/code":"_astro/code.9TvLRTDJ.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/logos":"_astro/logos.NUZo-2tP.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/footer":"_astro/footer.JVa4fBwq.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/content":"_astro/content.ITfeQGmq.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/about/team":"_astro/team.ZqUG1JPd.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/about/footer":"_astro/footer.oyink7vG.js","@astrojs/react/client.js":"_astro/client._BTUgaWK.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/testimonials":"_astro/testimonials.MuRIRijF.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/starterPack":"_astro/starterPack.Mk5yn1sn.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/404/content":"_astro/content.xJE6EN9P.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/categories":"_astro/categories.PRZVdCPs.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/pricing":"_astro/pricing.mhd7YD5j.js","/astro/hoisted.js?q=0":"_astro/hoisted.JMuAGZhC.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/footerFree":"_astro/footerFree.UGy1RqZB.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/about/testimonials":"_astro/testimonials.dyvu8doQ.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/about/features":"_astro/features.ytKi9HHR.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/astro":"_astro/astro.1eUy4aYe.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/presentation/pagesFree":"_astro/pagesFree.gozMIMuW.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/about/header":"_astro/header.HGXtBPuT.js","D:/MyDocuments/Arbeit/Project_AeraByte/LandingPages/Project_Terminmanagement_chronix/chronix/Chronix_Projectmanagement/src/components/landing/header":"_astro/header.krrtVj4V.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
