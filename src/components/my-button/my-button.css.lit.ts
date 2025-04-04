import { css } from 'lit';

export const styles = css`*, ::before, ::after{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
  --tw-contain-size:;
  --tw-contain-layout:;
  --tw-contain-paint:;
  --tw-contain-style:;
}

::backdrop{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
  --tw-contain-size:;
  --tw-contain-layout:;
  --tw-contain-paint:;
  --tw-contain-style:;
}
/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */

*,
::before,
::after{
  box-sizing:border-box;
  border-width:0;
  border-style:solid;
  border-color:#e5e7eb;
}

::before,
::after{
  --tw-content:'';
}

html,
:host{
  line-height:1.5;
  -webkit-text-size-adjust:100%;
  -moz-tab-size:4;
  tab-size:4;
  font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:normal;
  font-variation-settings:normal;
  -webkit-tap-highlight-color:transparent;
}

body{
  margin:0;
  line-height:inherit;
}

hr{
  height:0;
  color:inherit;
  border-top-width:1px;
}

abbr:where([title]){
  text-decoration:underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight:inherit;
}

a{
  color:inherit;
  text-decoration:inherit;
}

b,
strong{
  font-weight:bolder;
}

code,
kbd,
samp,
pre{
  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings:normal;
  font-variation-settings:normal;
  font-size:1em;
}

small{
  font-size:80%;
}

sub,
sup{
  font-size:75%;
  line-height:0;
  position:relative;
  vertical-align:baseline;
}

sub{
  bottom:-0.25em;
}

sup{
  top:-0.5em;
}

table{
  text-indent:0;
  border-color:inherit;
  border-collapse:collapse;
}

button,
input,
optgroup,
select,
textarea{
  font-family:inherit;
  font-feature-settings:inherit;
  font-variation-settings:inherit;
  font-size:100%;
  font-weight:inherit;
  line-height:inherit;
  letter-spacing:inherit;
  color:inherit;
  margin:0;
  padding:0;
}

button,
select{
  text-transform:none;
}

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']){
  -webkit-appearance:button;
  background-color:transparent;
  background-image:none;
}

:-moz-focusring{
  outline:auto;
}

:-moz-ui-invalid{
  box-shadow:none;
}

progress{
  vertical-align:baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button{
  height:auto;
}

[type='search']{
  -webkit-appearance:textfield;
  outline-offset:-2px;
}

::-webkit-search-decoration{
  -webkit-appearance:none;
}

::-webkit-file-upload-button{
  -webkit-appearance:button;
  font:inherit;
}

summary{
  display:list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre{
  margin:0;
}

fieldset{
  margin:0;
  padding:0;
}

legend{
  padding:0;
}

ol,
ul,
menu{
  list-style:none;
  margin:0;
  padding:0;
}
dialog{
  padding:0;
}

textarea{
  resize:vertical;
}

input::placeholder,
textarea::placeholder{
  opacity:1;
  color:#9ca3af;
}

button,
[role="button"]{
  cursor:pointer;
}
:disabled{
  cursor:default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object{
  display:block;
  vertical-align:middle;
}

img,
video{
  max-width:100%;
  height:auto;
}
[hidden]:where(:not([hidden="until-found"])){
  display:none;
}
.container{
  width:100%;
}
@media (min-width: 640px){

  .container{
    max-width:640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width:768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width:1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width:1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width:1536px;
  }
}
.visible{
  visibility:visible;
}
.collapse{
  visibility:collapse;
}
.static{
  position:static;
}
.relative{
  position:relative;
}
.mb-2{
  margin-bottom:0.5rem;
}
.mb-4{
  margin-bottom:1rem;
}
.block{
  display:block;
}
.flex{
  display:flex;
}
.inline-flex{
  display:inline-flex;
}
.table{
  display:table;
}
.grid{
  display:grid;
}
.contents{
  display:contents;
}
.hidden{
  display:none;
}
.border-collapse{
  border-collapse:collapse;
}
.transform{
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize{
  resize:both;
}
.flex-col{
  flex-direction:column;
}
.flex-wrap{
  flex-wrap:wrap;
}
.items-center{
  align-items:center;
}
.gap-2{
  gap:0.5rem;
}
.rounded{
  border-radius:0.25rem;
}
.rounded-lg{
  border-radius:0.5rem;
}
.rounded-md{
  border-radius:0.375rem;
}
.border{
  border-width:1px;
}
.border-blue-600{
  --tw-border-opacity:1;
  border-color:rgb(37 99 235 / var(--tw-border-opacity, 1));
}
.bg-blue-600{
  --tw-bg-opacity:1;
  background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1));
}
.bg-gray-300{
  --tw-bg-opacity:1;
  background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1));
}
.bg-gray-600{
  --tw-bg-opacity:1;
  background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));
}
.bg-white{
  --tw-bg-opacity:1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.p-4{
  padding:1rem;
}
.px-3{
  padding-left:0.75rem;
  padding-right:0.75rem;
}
.px-4{
  padding-left:1rem;
  padding-right:1rem;
}
.px-6{
  padding-left:1.5rem;
  padding-right:1.5rem;
}
.py-1{
  padding-top:0.25rem;
  padding-bottom:0.25rem;
}
.py-2{
  padding-top:0.5rem;
  padding-bottom:0.5rem;
}
.py-3{
  padding-top:0.75rem;
  padding-bottom:0.75rem;
}
.text-xl{
  font-size:1.25rem;
  line-height:1.75rem;
}
.font-bold{
  font-weight:700;
}
.font-medium{
  font-weight:500;
}
.text-blue-600{
  --tw-text-opacity:1;
  color:rgb(37 99 235 / var(--tw-text-opacity, 1));
}
.text-white{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.underline{
  text-decoration-line:underline;
}
.opacity-50{
  opacity:0.5;
}
.shadow{
  --tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline{
  outline-style:solid;
}
.transition-colors{
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}
.duration-200{
  transition-duration:200ms;
}
.component-container{
  display:flex;
  flex-direction:column;
  border-radius:0.375rem;
  --tw-bg-opacity:1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));
  padding:1rem;
  --tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.button{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:0.25rem;
  font-weight:500;
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:200ms;
}

.button:focus{
  outline:2px solid transparent;
  outline-offset:2px;
  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity:1;
  --tw-ring-color:rgb(59 130 246 / var(--tw-ring-opacity, 1));
  --tw-ring-offset-width:2px;
}

.button.small{
  padding-left:0.75rem;
  padding-right:0.75rem;
  padding-top:0.25rem;
  padding-bottom:0.25rem;
  font-size:0.875rem;
  line-height:1.25rem;
}

.button.medium{
  padding-left:1rem;
  padding-right:1rem;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
  font-size:1rem;
  line-height:1.5rem;
}

.button.large{
  padding-left:1.5rem;
  padding-right:1.5rem;
  padding-top:0.75rem;
  padding-bottom:0.75rem;
  font-size:1.125rem;
  line-height:1.75rem;
}

.button.primary{
  --tw-bg-opacity:1;
  background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1));
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.button.primary:hover{
  --tw-bg-opacity:1;
  background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.button.secondary{
  --tw-bg-opacity:1;
  background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.button.secondary:hover{
  --tw-bg-opacity:1;
  background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.button.outline{
  border-width:1px;
  --tw-border-opacity:1;
  border-color:rgb(37 99 235 / var(--tw-border-opacity, 1));
  --tw-text-opacity:1;
  color:rgb(37 99 235 / var(--tw-text-opacity, 1));
}

.button.outline:hover{
  --tw-bg-opacity:1;
  background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1));
}

.button[disabled]{
  cursor:not-allowed;
  opacity:0.5;
}

.focus\:outline-none:focus{
  outline:2px solid transparent;
  outline-offset:2px;
}

.focus\:ring-2:focus{
  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-offset-2:focus{
  --tw-ring-offset-width:2px;
}`;
