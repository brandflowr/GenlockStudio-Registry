# Skeleton Genre Stories 1.0.0

Eight complete, original short examples and eight reusable outlines. All are valid SKEL 2.10 documents with three scenes, no shots, and no external media dependencies. Use any structure as a starting point; change, add, split, move, or remove scenes freely.

| Genre | Example | Writing format | Tone / content |
| --- | --- | --- | --- |
| Action / adventure | The Last Crossing | Screenplay | Urgent, hopeful; flood danger without graphic injury |
| Horror | A Knock for Nobody | Prose | Uncanny; supernatural threat and bereavement, no gore |
| Drama | The Uncollected Coat | Screenplay | Bittersweet; grief and family disagreement |
| Comedy | The Quiet Auction | Screenplay | Warm, family-oriented; mild embarrassment |
| Mystery / thriller | The Seed Library | Prose | Gentle community mystery; nonviolent misunderstanding |
| Romance | Room for Rain | Screenplay | Tender; romantic attraction, no sexual content |
| Science fiction | Eight Minutes of Morning | Prose | Reflective; environmental loss and an absent parent |
| Fantasy | The Borrowed Shadow | Prose | Playful, family-oriented, coming-of-age; mild magical peril |

The range includes different relationships, settings, ages, and tones. It does not represent every genre or audience. Prose and screenplay are explicitly labelled; there is no automatic conversion or mandatory genre formula. Outline versions retain the companion's format, replace the example with flexible writing prompts, and start without its cast or author credit.

## Use in Skeleton

Open **Marketplace → Story templates**, search for a genre, and choose **Preview story** to read it. Select **Add to library**. In **New story**, select the installed Example or Outline, enter your title, and create your independent story. Installed copies work without a marketplace connection. Older app builds without preview buttons can still install and create these templates.

Every example includes character notes in Story bible and optional scene craft notes. Writing starts in `scene.narrative`; add shots and other production information only when useful. The installed template stays unchanged when you edit a project. A new project receives a fresh story ID and draft lifecycle.

## Reuse

The original stories, outlines, descriptions, and craft notes in this collection are dedicated under **CC0 1.0 Universal**. You may copy, adapt, distribute, and use them commercially without attribution. This dedication applies to this collection's content, not the Skeleton application's code, third-party software, names, or logos. No endorsement is implied. The work is provided without warranties.

Read the [CC0 deed](https://creativecommons.org/publicdomain/zero/1.0/) and [legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode).

## Maintain and verify

In SKELETON-Desktop, edit `marketplace/genre-starters/content.mjs`, then run `npm run build:genres`. The build writes 16 inspectable `.skel` files, the registry package under `templates/prompt-pack/`, and `catalog-entry.json` with its exact SHA-256. `npm test` rejects stale outputs and checks the package through the real marketplace validator, template cloning, both writing formats, edits, reordering, and serialization.

Run `scripts/check-genre-starters.mjs` against a local development server for browser acceptance. Default mode intercepts publication with the candidate bytes. `--live` reads the actual current public registry; it does not substitute a fixture. Both modes install all 16 items through the UI, reopen the library with GitHub unavailable, create/edit/save/reopen every template, check character notes and previews, and reject duplicate filenames. Use disposable test folders; the script creates its own under `tmp/writer-genre-*`.

To publish, add the package and this README to the existing registry's `templates/prompt-pack/` directory and merge the catalog entry into the current catalog, preserving unrelated entries. Publish these together at one commit. Never use a bundled copy to conceal a registry failure. Record the actual public commit and run the live check before claiming availability.
