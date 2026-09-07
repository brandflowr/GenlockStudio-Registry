/** The publication contract shared by SCP and Genlock. */
export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(',')}}`
  return JSON.stringify(value)
}
export const isGenerator = bone => ['image', 'video', 'audio'].includes(bone?.target)
export function generatorReleaseError(bone, entry, hash) {
  if (!isGenerator(bone)) return ''
  const proof = entry?.release_evidence
  if (entry?.format !== 'bone' || entry.id !== bone.bone_id || entry.version !== bone.bone_version) return 'Generators must be published as individual BONE releases.'
  if (proof?.status !== 'verified' || !/^[a-f0-9]{64}$/.test(hash ?? '') || proof.content_sha256 !== hash || !proof.test_id
    || !Number.isFinite(Date.parse(proof.tested_at ?? proof.test_confirmed_at)) || !Number.isFinite(Date.parse(proof.verified_at))) {
    return 'Test and verify this exact BONE revision in SCP before publishing.'
  }
  return ''
}
