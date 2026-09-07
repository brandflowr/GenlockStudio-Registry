# Genlock Studio Registry

`catalog.json` is the authoritative active package index consumed by SCP and Genlock Studio. Package IDs and payload types remain stable; URLs point into bones/, muscles/, elements/, palettes/, templates/, and providers/.

Archive entries are preserved for review and are never auto-installed or added to the active catalog. See archive/index.json for provenance and validation findings. Structural validation is not a live provider execution test.

Edit through SCP, validate, then review, commit and push with GitHub Desktop. Runtime catalog and package reads must not substitute bundled or cached snapshots. Workspace installations and project documents remain durable user data.
