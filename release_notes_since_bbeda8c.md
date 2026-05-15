# Release Notes

Changes since commit `bbeda8c42d2c242e9bff94084fb09258ec8f577a`.

## Web UI

- Migrated the Web UI backend to **FastAPI + Uvicorn** with a major WebSocket refactor.
- Improved service worker stability (`sw.js`) and general real-time behavior.
- Added clipboard-based file paste upload in chat input.
- Added input history navigation.
- Added and improved `/` command autocomplete.
- Improved API error presentation.
- Fixed multiple UI bugs, including:
  - modal sizing issues (global search, storage editor, keyboard shortcuts, export),
  - copy button behavior,
  - search UI edge cases,
  - clear tag filter behavior,
  - mobile sidebar behavior,
  - settings URL styling,
  - file upload reliability.
- Adjusted typewriter behavior (off by default).
- Improved input auto-resize and unsent command placeholder behavior.
- Added visual markers for unsafe module settings.
- Added extra security hardening in the Web UI layer.

## Streaming and Messaging

- Unified streaming behavior across channels.
- Added tool-call streaming support on text channels.
- Improved text stream formatting.
- Reworked the push/message system to replace older announcement-style behavior.
- Suppressed processing-result push messages on non-streaming channels.

## Modules and Configuration

- Added new modules:
  - `calendar`,
  - `writing_style`,
  - `tutorial`,
  - `docs`.
- Overhauled module settings architecture and UX.
- Added module metadata caching.
- Added select-field support in module settings UI.
- Fixed critical module reload/cache breakage.
- Hardened the config module and improved unsafe setting indicators.
- Improved `/config` and `/help` command clarity and in-command documentation.
- Updated default enabled modules.
- Removed `module_maker.py` as part of module-system evolution.

## Chat, Tokens, and Context

- Added chat summarization support.
- Decoupled stored chat history from the message array sent to the model.
- Added token checks when adding messages.
- Applied multiple `tiktoken` usage and offline-handling fixes.
- Tuned compression/context prompts for improved behavior.

## Channels

- Discord: fixed several bugs and added target-channel setting.
- Telegram: improved channel and streaming behavior.
- Matrix: silenced noisy warning behavior.
- CLI Lite: improved channel handling.

## Scheduler and Web Reader

- Added scheduler setting to disallow recurring jobs.
- Updated web reader behavior to always scrape links.

## Coder and Core

- Fixed coder project tree listing (`list_full_project_tree`) and additional coder fixes.
- Refactored/updated substantial core areas (`commands`, `context`, `config`, `channel`, and related flows).

## Documentation

- Expanded and polished `README.md`.
- Added substantial user documentation under `docs/openlumara_user_guide/`.
- Added purpose/mission-oriented documentation updates.
- Removed `webui_api_docs.md` in favor of newer documentation flow.

## Dependencies

- Updated `requirements.txt` (including FastAPI/Uvicorn-related stack changes).
- Removed `requirements_coder.txt` and consolidated dependency management.
- Removed `modules/openlumara_prompt.py`.
