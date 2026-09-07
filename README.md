# Genlock Studio Registry

SCP drafts → test and verify → publish to GitHub → install in Genlock.

Genlock consumes this repository's catalog and user customs. AI generators are individual BONE releases under bones/. Elements, palettes, muscles, and provider connection definitions have their own categories.

Drafts and test records live only in the local checkout's ignored drafts/ and authoring/ folders. SCP prepares a generator release only after the exact revision has run successfully, its output rendered, and its contract passed verification. The catalog carries matching release evidence. Review, commit, and push with GitHub Desktop; then refresh SCP to confirm GitHub publication.

Run node schema/verify-generators.mjs before pushing. GitHub runs the same check on pushes and pull requests. Archived definitions are excluded from the active catalog. Runtime reads use current GitHub data without bundled or cached substitutes; installed releases and user documents are durable data.
