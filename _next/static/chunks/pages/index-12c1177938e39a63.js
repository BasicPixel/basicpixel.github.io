(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5087:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return u},default:function(){return N}});var s=n(9752),t=n(245),a=n(706),l=n(5712),o=n(6702),c=n(7811),i=n(3398),d=n(7294),x=n(408),h=n(5893),m=function(e){var r=e.href,n=e.content,s=e.className,t=e.target,a=e.rel;return(0,h.jsx)("a",{href:r,target:t,rel:a,children:(0,h.jsx)("li",{className:"p-2 duration-300 rounded dark:hover:bg-nord3 hover:bg-nord6 hover:transition-all "+s,children:n})})},j=function(e){var r=e.data,n=(0,d.useState)(!1),s=n[0],t=n[1],a=function(){return t(!s)};return(0,h.jsxs)("nav",{className:"sticky top-0 w-full p-3 border-b border-opacity-40 backdrop-blur-md border-nord3 overflow-hidden",children:[(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsx)("h1",{className:"text-2xl dark:text-nord8 text-nord3",children:(0,h.jsx)("a",{href:"#home",children:r.navbar.name})}),(0,h.jsx)("button",{className:"md:hidden",onClick:a,"aria-label":"Toggle Navbar",children:(0,h.jsx)(x.Z,{})}),(0,h.jsxs)("ul",{className:"items-center hidden gap-4 px-4 md:flex justify-self-end",children:[(0,h.jsx)(m,{href:"#about",content:r.navbar.about}),(0,h.jsx)(m,{href:"#projects",content:r.navbar.projects}),(0,h.jsx)(m,{href:"#connect",content:r.navbar.connect}),(0,h.jsx)("li",{className:"select-none",children:"|"}),(0,h.jsx)(m,{href:r.links.dev,content:"Blog",target:"_blank",rel:"noreferrer"}),(0,h.jsx)(m,{href:r.links.github,content:(0,h.jsx)(o.Z,{}),target:"_blank",rel:"noreferrer"})]})]}),(0,h.jsx)(i.u,{show:s,enter:"transition-transform ease-out duration-500 origin-top transform",enterFrom:"transform scale-y-0 h-0",enterTo:"transform scale-y-100 h-auto",leave:"transition-transform ease-in duration-200",leaveFrom:"transform scale-y-100 h-auto",leaveTo:"transform scale-y-0 h-0",children:(0,h.jsxs)("ul",{className:"mt-2",onClick:a,children:[(0,h.jsx)(m,{href:"#about",content:r.navbar.about}),(0,h.jsx)(m,{href:"#projects",content:r.navbar.projects}),(0,h.jsx)(m,{href:"#connect",content:r.navbar.connect}),(0,h.jsx)("li",{className:"my-2 border-t border-nord3 border-opacity-30"}),(0,h.jsx)(m,{href:r.links.dev,content:"Blog",target:"_blank",rel:"noreferrer"}),(0,h.jsx)(m,{href:r.links.github,content:(0,h.jsx)(o.Z,{}),target:"_blank",rel:"noreferrer","aria-label":"github"})]})})]})},f=n(9046),b=function(e){var r=e.project;return(0,h.jsxs)("div",{className:"border rounded border-nord3 dark:border-opacity-100 border-opacity-50 p-4 w-full font-mono",children:[(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("h2",{className:"text-2xl dark:text-nord8 text-nord3",children:(0,h.jsxs)("a",{href:r.demo,target:"_blank",rel:"noreferrer",children:[r.name," ",(0,h.jsx)(f.Z,{className:"inline"})]})}),(0,h.jsx)("a",{href:r.repo,target:"_blank",rel:"noreferrer",children:(0,h.jsx)(o.Z,{className:"inline w-8 h-8"})})]}),(0,h.jsx)("p",{className:"text-md",children:r.desc}),(0,h.jsxs)("div",{className:"dark:text-nord4 text-nord3",children:["Technologies: ",r.stack]})]})},u=!0;function N(e){var r=e.data;return(0,h.jsxs)("div",{className:"w-screen",children:[(0,h.jsx)(j,{data:r}),(0,h.jsxs)("div",{className:"container p-4 mx-auto xl:w-1/2 md:w-2/3 sm:w-screen",children:[(0,h.jsxs)("main",{id:"home",className:"flex flex-col items-center justify-center xl:flex-row xl:mb-10 max-h-screen min-h-[85vh] max-w-screen",children:[(0,h.jsx)("h1",{className:"px-16 mb-8 text-5xl font-bold lg:text-7xl 2xl:text-8xl text-gradient bg-nord-gradient selection:bg-opacity-40",children:r.home.heading}),(0,h.jsxs)("div",{className:"flex items-center justify-center gap-2 px-24 text-xl xl:text-2xl xl:gap-6 xl:flex-col xs:flex-col sm:flex-row 2xl:text-4xl dark:text-nord8",children:[(0,h.jsx)("a",{href:"#about",className:"p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all",children:r.navbar.about})," ",(0,h.jsx)("span",{className:"lg:hidden hidden sm:block",children:"\xb7"})," ",(0,h.jsx)("a",{href:"#projects",className:"p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all",children:r.navbar.projects})," ",(0,h.jsx)("span",{className:"lg:hidden hidden sm:block",children:"\xb7"})," ",(0,h.jsx)("a",{href:"#connect",className:"p-3 duration-500 rounded hover:bg-nord-gradient hover:dark:text-nord0 hover:text-nord4 hover:transition-all",children:r.navbar.connect})]})]}),(0,h.jsxs)("section",{id:"about",children:[(0,h.jsx)("h1",{className:"text-4xl",children:"About Me"}),r.about.body.map((function(e,r){return(0,h.jsx)("p",{children:e.content},r)}))]}),(0,h.jsxs)("section",{id:"projects",children:[(0,h.jsx)("h1",{className:"text-4xl",children:"Projects"}),(0,h.jsx)("div",{className:"flex justify-between flex-wrap gap-2",children:r.projects.map((function(e,r){return(0,h.jsx)(b,{project:e},r)}))})]}),(0,h.jsxs)("section",{id:"connect",className:"mt-8",children:[(0,h.jsx)("h1",{className:"text-4xl",children:r.connect.title}),(0,h.jsx)("p",{children:r.connect.info}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{className:"my-3",children:[(0,h.jsx)(s.Z,{className:"inline mr-4"}),r.connect.email]}),(0,h.jsxs)("li",{className:"my-3",children:[(0,h.jsx)(t.Z,{className:"inline mr-4"}),(0,h.jsx)("a",{href:r.links.telegram,target:"_blank",rel:"noreferrer",className:"link",children:r.connect.telegram})]}),(0,h.jsxs)("li",{className:"my-3",children:[(0,h.jsx)(a.Z,{className:"inline mr-4"}),(0,h.jsx)("a",{href:r.links.twitter,target:"_blank",rel:"noreferrer",className:"link",children:r.connect.twitter})]}),(0,h.jsxs)("li",{className:"my-3",children:[(0,h.jsx)(l.Z,{className:"inline mr-4"}),(0,h.jsx)("a",{href:r.links.dev,target:"_blank",rel:"noreferrer",className:"link",children:r.connect.blog})]}),(0,h.jsxs)("li",{className:"my-3",children:[(0,h.jsx)(o.Z,{className:"inline mr-4"}),(0,h.jsx)("a",{href:r.links.github,target:"_blank",rel:"noreferrer",className:"link",children:r.connect.github})]})]})]}),(0,h.jsxs)("footer",{className:"py-4 text-center border-t border-nord3 border-opacity-30",children:[r.footer.body[0],(0,h.jsxs)("a",{href:"https://www.nordtheme.com/",rel:"noreferrer",target:"_blank",className:"link",children:["Nord ",(0,h.jsx)(c.Z,{className:"inline"})]}),r.footer.body[1]," ",(0,h.jsx)("a",{href:r.links.repo,className:"link",target:"_blank",rel:"noreferrer",children:"Source code"})]})]})]})}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5087)}])}},function(e){e.O(0,[818,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);