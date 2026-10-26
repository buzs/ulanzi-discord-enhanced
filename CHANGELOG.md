# Changelog

## 0.1.8

- Fixed Voice Channel and Text Channel buttons not joining or opening the configured channel (Discord rejected the request with "timeout must be less than or equal to 60").

## 0.1.7

- Completed the Japanese, Korean and Chinese translations of the settings panel; texts such as the setup guide notice and the redirect URI prompt no longer appear in English.
- Added an optional **Send anonymous error reports** setting, off by default. When enabled, only error details are sent, without credentials, account names or file paths. See the README for exactly what is sent.

## 0.1.6

- Improved Discord detection on macOS: the plugin now finds Discord's local connection even when Ulanzi Studio starts it without the user's temporary folder setting.
- Connection errors now show the actual Discord failure, or the folders that were searched, instead of `ECONNREFUSED 127.0.0.1:6472`.
- The setup guide, README and store description now say not to reuse the Client ID and Client Secret from the official Ulanzi Discord plugin.

## 0.1.5

- Fixed an endless Discord permission prompt when another Discord instance is open with a different account.
- The plugin now remembers the authorized Discord account and only reconnects automatically to that account.
- Paused automatic reconnect when Discord authorization is denied or cancelled, until the account is reconnected in the plugin settings.
- Limited the diagnostic log to 5 MB with two rotated backups, and removed oversized logs left by older versions.

## 0.1.4

- Fixed static manifest icon updates so host custom icons are not replaced on plugin restart.
- Kept compatibility with the currently available Ulanzi software protocol.

## 0.1.3

- Fixed D200X encoder rotation for Discord volume and user voice controls.
- Fixed encoder direction handling for the Ulanzi SDK event payload.

## 0.1.2

- Added live numeric values beside Discord volume sliders in the Property Inspector.

## 0.1.1

- Fixed per-user voice volume reads when Discord returns `user_id` voice states.
- Enforced Discord's `0-100` input and `0-200` output/user volume limits.
- Updated volume controls for the Discord-specific limits.

## 0.1.0

- Initial public distribution of Discord Enhanced for Ulanzi D200.
- Added Discord Desktop RPC controls for voice, channels, notifications and Soundboard.
- Added encoder actions for volume and user voice control.
- Added local multilingual setup guide and recovery controls for Discord credentials.
- Added encrypted local storage for the Discord Client Secret.
- Added public repository packaging without TypeScript source code.
