import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { canonicalJson, generatorReleaseError, isGenerator } from './generator-release.mjs'
const catalog = JSON.parse(readFileSync('catalog.json', 'utf8'))
for (const entry of catalog.packs) {
  if (/^(drafts|authoring|archive)\//.test(entry.url) || entry.url.includes('..') || entry.url.includes(':') || entry.url.startsWith('/')) throw new Error('Invalid publication path: ' + entry.url)
  const payload = JSON.parse(readFileSync(entry.url, 'utf8'))
  const bones = [payload, ...(payload.bones || []), ...(payload.snippets || []).map(item => item.data)].filter(isGenerator)
  for (const bone of bones) {
    const error = generatorReleaseError(bone, entry, createHash('sha256').update(canonicalJson(bone)).digest('hex'))
    if (error) throw new Error(entry.id + ': ' + error)
  }
}
console.log('All published generators have matching SCP test and verification evidence.')
