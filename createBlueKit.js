import createBlueKit from 'react-bluekit/lib/createBlueKit';

createBlueKit({
  // your directory where components are located
  baseDir: `${__dirname}/src`,
  // relative paths from base dir where to look for components
  paths: ['./components/', './auth'],
  // set to true when providing simple components such as `export default function MyComponent() { <div>Hello</div> }`
  noSpecialReplacements: true
});