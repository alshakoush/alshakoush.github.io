(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{861:function(e,a,s){"use strict";s.d(a,{FT:function(){return n}});var t=s(7294),r=s(5893);const l=["as","disabled"];function n({tagName:e,disabled:a,href:s,target:t,rel:r,onClick:l,tabIndex:n=0,type:i}){e||(e=null!=s||null!=t||null!=r?"a":"button");const o={tagName:e};if("button"===e)return[{type:i||"button",disabled:a},o];const c=t=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(s))&&t.preventDefault(),a?t.stopPropagation():null==l||l(t)};return"a"===e&&(s||(s="#"),a&&(s=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:n,href:s,target:"a"===e?t:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},o]}const i=t.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,i=function(e,a){if(null==e)return{};var s,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,l);const[o,{tagName:c}]=n(Object.assign({tagName:s,disabled:t},i));return(0,r.jsx)(c,Object.assign({},i,o,{ref:a}))}));i.displayName="Button",a.ZP=i},8210:function(){},5005:function(e,a,s){"use strict";var t=s(4184),r=s.n(t),l=s(7294),n=s(861),i=s(6792),o=s(5893);const c=l.forwardRef((({as:e,bsPrefix:a,variant:s,size:t,active:l,className:c,...d},f)=>{const u=(0,i.vE)(a,"btn"),[m,{tagName:p}]=(0,n.FT)({tagName:e,...d}),v=p;return(0,o.jsx)(v,{...m,...d,ref:f,className:r()(c,u,l&&"active",s&&`${u}-${s}`,t&&`${u}-${t}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=c},3439:function(e,a,s){"use strict";s.d(a,{Ed:function(){return l},UI:function(){return r},XW:function(){return n}});var t=s(7294);function r(e,a){let s=0;return t.Children.map(e,(e=>t.isValidElement(e)?a(e,s++):e))}function l(e,a){let s=0;t.Children.forEach(e,(e=>{t.isValidElement(e)&&a(e,s++)}))}function n(e,a){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===a))}},2641:function(e,a,s){"use strict";s.d(a,{Z:function(){return G}});var t=s(4184),r=s.n(t),l=s(5697),n=s.n(l),i=s(7294),o=s(5893);const c={type:n().string,tooltip:n().bool,as:n().elementType},d=i.forwardRef((({as:e="div",className:a,type:s="valid",tooltip:t=!1,...l},n)=>(0,o.jsx)(e,{...l,ref:n,className:r()(a,`${s}-${t?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var f=d;var u=i.createContext({}),m=s(6792);const p=i.forwardRef((({id:e,bsPrefix:a,className:s,type:t="checkbox",isValid:l=!1,isInvalid:n=!1,as:c="input",...d},f)=>{const{controlId:p}=(0,i.useContext)(u);return a=(0,m.vE)(a,"form-check-input"),(0,o.jsx)(c,{...d,ref:f,type:t,id:e||p,className:r()(s,a,l&&"is-valid",n&&"is-invalid")})}));p.displayName="FormCheckInput";var v=p;const b=i.forwardRef((({bsPrefix:e,className:a,htmlFor:s,...t},l)=>{const{controlId:n}=(0,i.useContext)(u);return e=(0,m.vE)(e,"form-check-label"),(0,o.jsx)("label",{...t,ref:l,htmlFor:s||n,className:r()(a,e)})}));b.displayName="FormCheckLabel";var x=b,N=s(3439);const h=i.forwardRef((({id:e,bsPrefix:a,bsSwitchPrefix:s,inline:t=!1,disabled:l=!1,isValid:n=!1,isInvalid:c=!1,feedbackTooltip:d=!1,feedback:p,feedbackType:b,className:h,style:y,title:j="",type:g="checkbox",label:w,children:$,as:k="input",...F},I)=>{a=(0,m.vE)(a,"form-check"),s=(0,m.vE)(s,"form-switch");const{controlId:C}=(0,i.useContext)(u),E=(0,i.useMemo)((()=>({controlId:e||C})),[C,e]),P=!$&&null!=w&&!1!==w||(0,N.XW)($,x),R=(0,o.jsx)(v,{...F,type:"switch"===g?"checkbox":g,ref:I,isValid:n,isInvalid:c,disabled:l,as:k});return(0,o.jsx)(u.Provider,{value:E,children:(0,o.jsx)("div",{style:y,className:r()(h,P&&a,t&&`${a}-inline`,"switch"===g&&s),children:$||(0,o.jsxs)(o.Fragment,{children:[R,P&&(0,o.jsx)(x,{title:j,children:w}),p&&(0,o.jsx)(f,{type:b,tooltip:d,children:p})]})})})}));h.displayName="FormCheck";var y=Object.assign(h,{Input:v,Label:x});s(2473);const j=i.forwardRef((({bsPrefix:e,type:a,size:s,htmlSize:t,id:l,className:n,isValid:c=!1,isInvalid:d=!1,plaintext:f,readOnly:p,as:v="input",...b},x)=>{const{controlId:N}=(0,i.useContext)(u);let h;return e=(0,m.vE)(e,"form-control"),h=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${s}`]:s},(0,o.jsx)(v,{...b,type:a,size:t,ref:x,readOnly:p,id:l||N,className:r()(n,h,c&&"is-valid",d&&"is-invalid","color"===a&&`${e}-color`)})}));j.displayName="FormControl";var g=Object.assign(j,{Feedback:f}),w=(0,s(6611).Z)("form-floating");const $=i.forwardRef((({controlId:e,as:a="div",...s},t)=>{const r=(0,i.useMemo)((()=>({controlId:e})),[e]);return(0,o.jsx)(u.Provider,{value:r,children:(0,o.jsx)(a,{...s,ref:t})})}));$.displayName="FormGroup";var k=$;const F=i.forwardRef(((e,a)=>{const[{className:s,...t},{as:l="div",bsPrefix:n,spans:i}]=function({as:e,bsPrefix:a,className:s,...t}){a=(0,m.vE)(a,"col");const l=(0,m.pi)(),n=[],i=[];return l.forEach((e=>{const s=t[e];let r,l,o;delete t[e],"object"===typeof s&&null!=s?({span:r,offset:l,order:o}=s):r=s;const c="xs"!==e?`-${e}`:"";r&&n.push(!0===r?`${a}${c}`:`${a}${c}-${r}`),null!=o&&i.push(`order${c}-${o}`),null!=l&&i.push(`offset${c}-${l}`)})),[{...t,className:r()(s,...n,...i)},{as:e,bsPrefix:a,spans:n}]}(e);return(0,o.jsx)(l,{...t,ref:a,className:r()(s,!i.length&&n)})}));F.displayName="Col";var I=F;const C=i.forwardRef((({as:e="label",bsPrefix:a,column:s,visuallyHidden:t,className:l,htmlFor:n,...c},d)=>{const{controlId:f}=(0,i.useContext)(u);a=(0,m.vE)(a,"form-label");let p="col-form-label";"string"===typeof s&&(p=`${p} ${p}-${s}`);const v=r()(l,a,t&&"visually-hidden",s&&p);return n=n||f,s?(0,o.jsx)(I,{ref:d,as:"label",className:v,htmlFor:n,...c}):(0,o.jsx)(e,{ref:d,className:v,htmlFor:n,...c})}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var E=C;const P=i.forwardRef((({bsPrefix:e,className:a,id:s,...t},l)=>{const{controlId:n}=(0,i.useContext)(u);return e=(0,m.vE)(e,"form-range"),(0,o.jsx)("input",{...t,type:"range",ref:l,className:r()(a,e),id:s||n})}));P.displayName="FormRange";var R=P;const O=i.forwardRef((({bsPrefix:e,size:a,htmlSize:s,className:t,isValid:l=!1,isInvalid:n=!1,id:c,...d},f)=>{const{controlId:p}=(0,i.useContext)(u);return e=(0,m.vE)(e,"form-select"),(0,o.jsx)("select",{...d,size:s,ref:f,className:r()(t,e,a&&`${e}-${a}`,l&&"is-valid",n&&"is-invalid"),id:c||p})}));O.displayName="FormSelect";var T=O;const L=i.forwardRef((({bsPrefix:e,className:a,as:s="small",muted:t,...l},n)=>(e=(0,m.vE)(e,"form-text"),(0,o.jsx)(s,{...l,ref:n,className:r()(a,e,t&&"text-muted")}))));L.displayName="FormText";var V=L;const z=i.forwardRef(((e,a)=>(0,o.jsx)(y,{...e,ref:a,type:"switch"})));z.displayName="Switch";var S=Object.assign(z,{Input:y.Input,Label:y.Label});const _=i.forwardRef((({bsPrefix:e,className:a,children:s,controlId:t,label:l,...n},i)=>(e=(0,m.vE)(e,"form-floating"),(0,o.jsxs)(k,{ref:i,className:r()(a,e),controlId:t,...n,children:[s,(0,o.jsx)("label",{htmlFor:t,children:l})]}))));_.displayName="FloatingLabel";var Z=_;const D={_ref:n().any,validated:n().bool,as:n().elementType},B=i.forwardRef((({className:e,validated:a,as:s="form",...t},l)=>(0,o.jsx)(s,{...t,ref:l,className:r()(e,a&&"was-validated")})));B.displayName="Form",B.propTypes=D;var G=Object.assign(B,{Group:k,Control:g,Floating:w,Check:y,Switch:S,Label:E,Text:V,Range:R,Select:T,FloatingLabel:Z})},2473:function(e){"use strict";var a=function(){};e.exports=a}}]);