import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './bases/01-const-let'
import './bases/02-object-literals'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`
console.log("Hello World")