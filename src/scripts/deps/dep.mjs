import {clamp} from './deep-dep/deep.mjs';

export default function() {
  console.log(`This doesn't do anything useful!`);
  const clamped = clamp(-0.5, 0, 1);
  console.log(`But uses the \`clamp()\` import though`);
  console.log('Clamped:', clamped);
}
