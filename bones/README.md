# Higgsfield BONEs for Genlock

Production-ready BONE definitions that map the major capabilities of the [Higgsfield CLI](https://github.com/higgsfield-ai/cli) into Genlock’s structured prompt-contract system.

These BONEs are designed to be dropped into `templates/bones/` or imported into the Boneyard.

---

## Quick Start

1. Copy the desired `.bone.json` files into your project’s `templates/bones/` directory (or the Boneyard).
2. Ensure the Higgsfield CLI is installed and authenticated (`higgsfield auth login`).
3. The BONEs will appear as available generation contracts in Shot Editor / Production Menu once the app scans the templates folder.

---

## BONE Catalog

### Core Generation

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-image.bone.json` | `higgsfield-image` | image | General image generation (Nano Banana Pro, GPT Image 2, FLUX.2, Seedream, Cinematic Studio, etc.) |
| `higgsfield-soul-image.bone.json` | `higgsfield-soul-image` | image | Face-consistent character images using a trained Soul ID. Automatically suppresses facial description. |
| `higgsfield-video.bone.json` | `higgsfield-video` | video | Text-to-video and image-to-video (Kling 3, Seedance 2, Veo, Cinematic Studio, Gemini Omni) |
| `higgsfield-tts.bone.json` | `higgsfield-tts` | audio | Narration / voice generation (Seed Audio, Text-to-Speech v2) |

### Identity & Analysis

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-soul-id.bone.json` | `higgsfield-soul-id` | identity | Train a reusable Soul character from reference images. Writes `soul_id` to the character sheet. |
| `higgsfield-virality.bone.json` | `higgsfield-virality` | analysis | Analyze a finished video for hook strength, attention, retention, and viral potential (`brain_activity`) |

### Marketing & Product

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-product-photo.bone.json` | `higgsfield-product-photo` | image | Brand-quality product photography with mode-specific enhancement (studio, lifestyle, hero, etc.) |
| `higgsfield-marketing.bone.json` | `higgsfield-marketing` | image/video | Branded marketing assets — ads, avatars, product heroes, story ads |

### Video Editing Workflows

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-draw-to-video.bone.json` | `higgsfield-draw-to-video` | video | Edit a video using a sketch frame + text instruction at a specific timestamp |
| `higgsfield-reframe.bone.json` | `higgsfield-reframe` | video | Reframe an existing video to a new aspect ratio |
| `higgsfield-voice-change.bone.json` | `higgsfield-voice-change` | video | Replace the voice on an existing video |
| `higgsfield-dubbing.bone.json` | `higgsfield-dubbing` | video | Dub a video into another language (ISO-639-3 codes) |

### Image Utilities

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-background-remove.bone.json` | `higgsfield-background-remove` | image | Remove background from a single image |
| `higgsfield-outpaint.bone.json` | `higgsfield-outpaint` | image | Expand an image beyond its original borders |

### 3D

| File | ID | Target | Description |
|------|----|--------|-------------|
| `higgsfield-3d.bone.json` | `higgsfield-3d` | 3d | Generate 3D assets from one or more images |

---

## Design Principles

- **CLI-first execution** — All BONEs route through the official Higgsfield CLI rather than calling the API directly.
- **Structured fields** — Creative intent is captured in typed fields instead of free-text-only prompts.
- **Strong `llm_instructions`** — Every BONE contains explicit rules so agents fill fields correctly and avoid common failure modes (especially Soul ID face suppression).
- **Write-back support** — Results are designed to land in the correct Genlock locations (`startFrameImage`, `videoTake`, `character.soulId`, etc.).
- **Capability requirements** — `requires[]` arrays allow the Capability Matrix / preflight system to gate usage cleanly.

---

## Soul ID Workflow

1. Use `higgsfield-soul-id` to train a character from ≥3 reference images.
2. The returned `soul_id` is written to the character sheet in Studio.
3. Use `higgsfield-soul-image` (or future soul-aware video BONEs) for generation.
4. The BONE’s `llm_instructions` automatically forbid facial description when a Soul ID is present.

---

## Notes

- Model availability and parameters can change. Run `higgsfield model list` and `higgsfield model get <job_set_type>` for the live schema.
- Some specialized commands (`product-photoshoot`, `marketing-studio`, `soul-id`, workflows) use dedicated CLI entry points rather than the generic `generate create` path.
- These BONEs assume the Higgsfield CLI is installed and authenticated on the machine running Genlock.

---

## Version

Initial packaged set — July 2026  
Aligned with higgsfield-ai/cli README + MODELS.md at time of generation.
