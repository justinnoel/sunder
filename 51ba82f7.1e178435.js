(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(94)),i={id:"middleware-router",title:"Router"},s={unversionedId:"middleware-router",id:"middleware-router",isDocsHomePage:!1,title:"Router",description:"A router helps you call different middleware based on the method and the URL of the request. Sunder ships with a default router that will work for most small to medium size applications.",source:"@site/docs\\middleware-router.md",slug:"/middleware-router",permalink:"/docs/middleware-router",editUrl:"https://github.com/gzuidhof/sunder/edit/master/website/docs/middleware-router.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to Middleware",permalink:"/docs/middleware-introduction"},next:{title:"Changelog",permalink:"/docs/changelog"}},l=[{value:"CFW Environment",id:"cfw-environment",children:[]},{value:"Route parameters",id:"route-parameters",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A router helps you call different middleware based on the method and the URL of the request. Sunder ships with a default router that will work for most small to medium size applications."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { Sunder, Router } from "sunder";\n\nconst app = new Sunder();\nconst router = new Router();\n\nfunction handleRobots(ctx: Context) {\n    ctx.response.body = "User-Agent: *\\nDisallow: /";\n}\n\nasync function createPostHandler(ctx: Context) {\n    // Talk to database, create a post..\n}\n\nasync function getPostHandler(ctx: Context<{}, {id: string}>) {\n    const postId = ctx.params.id;\n    const postText = await myDatabase.getPost(id);\n    ctx.response.body = postText;\n}\n\n\nrouter.get("/robots.txt", handleRobots);\nrouter.post("/v1/posts", createPostHandler)\nrouter.get("/posts/:id", getPostHandler)\n\n// Tip: the router is usually the last middleware you add to the app.\napp.use(router.middleware)\n')),Object(o.b)("p",null,"In case a request is made to a non-existing page, a 404 error is thrown. "),Object(o.b)("p",null,"There is also a ",Object(o.b)("inlineCode",{parentName:"p"},"Router.all(path, handler)")," method that will catch all request methods (",Object(o.b)("inlineCode",{parentName:"p"},"GET"),", ",Object(o.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH"),", etc). "),Object(o.b)("h2",{id:"cfw-environment"},"CFW Environment"),Object(o.b)("p",null,"In Cloudflare Workers you can either ship your worker as a service-worker file, or a ES module. In the service-worker buildmode any KV stores and configuration values are available in the global scope (",Object(o.b)("inlineCode",{parentName:"p"},"globalThis.MY_KV_STORE"),"), in ES Module mode. When you create an app or a router you can specify the environment type as its first generic argument, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type MyEnvironment = {\n    MY_KV_STORE: KVStore,\n    APPLICATION_NAME: string,\n}\n\nconst app = new Sunder<MyEnvironment>();\nconst router = new Router<MyEnvironment>();\n")),Object(o.b)("p",null,"Then in a middleware you can require a certain field to be available:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"function handleApplicationNameGet(ctx: Context<{APPLICATION_NAME: string}>) {\n    ctx.response.body = `The application name is ${ctx.env.APPLICATION_NAME}`;\n}\n")),Object(o.b)("p",null,"When you do this it will be statically type-checked by the Typescript compiler - preventing you from making mistakes."),Object(o.b)("h2",{id:"route-parameters"},"Route parameters"),Object(o.b)("p",null,"The router automatically extracts parameters from the URL, it is built upon the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pillarjs/path-to-regexp"}),Object(o.b)("inlineCode",{parentName:"a"},"path-to-regexp"))," library (the same as is used by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com"}),"Express"),")."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function myHandler(ctx: Context<{}, {firstName: string, lastName: string}>) {\n    ctx.response.body = `Hello ${ctx.params.firstName} ${ctx.params.lastName}!`;\n}\n\nconst router = new Router();\nrouter.get("/greeting/:firstName/:lastName", myHandler);\n\n// If I now make a request to /greeting/Bob/Dogg it will return\n// "Hello Bob Dogg"\n')),Object(o.b)("p",null,"Note how we write required parameters in the pointy brackets (",Object(o.b)("inlineCode",{parentName:"p"},"Context<{}, {firstName: string}>"),") on the handler. This allows the route to be statically type checked. If you are using Javascript just remove this type annotation."))}p.isMDXComponent=!0}}]);