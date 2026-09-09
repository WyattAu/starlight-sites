import { compile } from '../node_modules/.bun/@astrojs+mdx@6.0.3+ea99d0d19699dbc0/node_modules/@mdx-js/mdx/index.js'

const tests = [
  ['minimal options', 'export const A = () => <PracticeProblem client:only="solid-js" question={"What?"} options={["a", "b"]} correctAnswer={0} explanation={"Because."} difficulty="easy" />'],
  ['with import ctx', 'import PracticeProblem from "@components/PracticeProblem"\nexport const A = () => <PracticeProblem client:only="solid-js" question={"What?"} options={["a", "b"]} correctAnswer={0} explanation={"Because."} difficulty="easy" />'],
]
for (const [name, src] of tests) {
  try { await compile(src); console.log('OK  :', name) }
  catch (e) { console.log('FAIL:', name, '-', String(e.message).slice(0, 100)) }
}
