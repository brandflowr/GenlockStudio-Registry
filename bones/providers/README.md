# Provider BONEs

Production-ready BONE contracts for Genlock / SKEL providers.

## Batch A — Core Generative

| File | ID | Target | Provider |
|------|----|--------|----------|
| `kling-video.bone.json` | `kling-video` | video | Kling |
| `runway-video.bone.json` | `runway-video` | video | Runway |
| `veo-video.bone.json` | `veo-video` | video | Google Veo |
| `flux-image.bone.json` | `flux-image` | image | FLUX |
| `gpt-image.bone.json` | `gpt-image` | image | OpenAI GPT Image |
| `elevenlabs-tts.bone.json` | `elevenlabs-tts` | audio | ElevenLabs TTS |

## Batch B — Extended Generative

| File | ID | Target | Provider |
|------|----|--------|----------|
| `grok-imagine-image.bone.json` | `grok-imagine-image` | image | xAI Grok Imagine |
| `grok-imagine-video.bone.json` | `grok-imagine-video` | video | xAI Grok Imagine |
| `minimax-video.bone.json` | `minimax-video` | video | MiniMax |
| `heygen-video.bone.json` | `heygen-video` | video | HeyGen |
| `google-imagen.bone.json` | `google-imagen` | image | Google Imagen |
| `recraft-image.bone.json` | `recraft-image` | image | Recraft |
| `suno-music.bone.json` | `suno-music` | audio | Suno AI |
| `elevenlabs-music.bone.json` | `elevenlabs-music` | audio | ElevenLabs Music/SFX |

## Batch C — Local, Stock & Tools

| File | ID | Target | Notes |
|------|----|--------|-------|
| `local-video.bone.json` | `local-video` | video | WAN, Hunyuan, CogVideo, LTX |
| `local-diffusion.bone.json` | `local-diffusion` | image | Local SD / SDXL |
| `stock-image.bone.json` | `stock-image` | image | Pexels, Pixabay, Unsplash |
| `stock-video.bone.json` | `stock-video` | video | Pexels, Pixabay, Wikimedia |
| `background-remove.bone.json` | `background-remove` | image | rembg / U2Net |
| `upscale.bone.json` | `upscale` | image/video | Real-ESRGAN |
| `lip-sync.bone.json` | `lip-sync` | video | Wav2Lip / MuseTalk / Kling |
| `talking-head.bone.json` | `talking-head` | video | SadTalker / MuseTalk / Kling Avatar |
| `remotion.bone.json` | `remotion` | video | Programmatic React video |
| `ffmpeg-compose.bone.json` | `ffmpeg-compose` | video | Assembly, mux, subtitles, etc. |

## Design Notes

- Generative BONEs use rich `llm_instructions` and prompt assembly.
- Tool / processing BONEs use `raw` assembly and focus on clear input/output contracts.
- All include `requires[]` for Capability Matrix gating and proper `write_back` targets.

Generated July 2026.
