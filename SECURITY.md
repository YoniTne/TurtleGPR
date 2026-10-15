# Security Policy

TurtleGPR is a student project (INSSET, for WWF): a stepped-frequency
ground-penetrating radar built around a LiteVNA 67 and a Raspberry Pi.
It is not a commercial product, but we still want to handle security
issues responsibly.

## Supported versions

Only the latest state of the `main` branch and the most recent tagged
release receive fixes.

| Version              | Supported |
| -------------------- | --------- |
| `main` (latest)      | ✅        |
| Latest release tag   | ✅        |
| Older tags / branches| ❌        |

## What counts as a security issue

Please report privately anything that could put people, equipment or
data at risk, for example:

- Secrets committed to the repository (API keys, tokens, passwords,
  Wi-Fi credentials, SSH keys, Raspberry Pi accounts).
- Code that lets someone run commands on the Raspberry Pi, or access it
  remotely, without authorisation.
- Unsafe handling of files or input in the acquisition software or the
  interface (path traversal, injection, unsafe deserialisation, etc.).
- Vulnerable or malicious dependencies.
- Exposure of field data that should stay private (e.g. GPS positions of
  turtle nesting sites).

Ordinary bugs, measurement errors and feature requests are **not**
security issues. Open a regular issue for those.

## How to report a vulnerability

**Do not open a public issue or pull request.**

1. Go to the **Security** tab of this repository.
2. Click **Report a vulnerability** to open a private advisory.
3. Describe:
   - what the problem is and where it is (file, line, commit);
   - how to reproduce it;
   - what impact you think it has;
   - a possible fix, if you have one.

If private reporting is unavailable, contact the project leads directly
(@YoniTne, @Thomas127, @ClementNoelRenard) and ask for a private channel.
Do not put details in public messages.

## What happens next

- We acknowledge the report within **7 days**.
- We assess it, agree on a fix and keep you informed.
- The fix goes through a normal reviewed pull request. If needed, the
  advisory is published once the fix is merged.
- With your permission, we credit you in the advisory.

As a student team, our response times depend on the academic calendar.
Thank you for your patience.

## If you committed a secret by mistake

1. **Revoke or change the secret immediately**, e.g. regenerate the token
   or change the password. Deleting it from the repo is not enough,
   because it stays in the Git history.
2. Tell the project leads privately.
3. We will clean the history if necessary.

## Good practices for contributors

- Never commit credentials. Use environment variables or a local file
  listed in `.gitignore`.
- Keep the Raspberry Pi's default passwords changed and SSH keys private.
- Do not publish raw field data containing nest locations without the
  leads' and WWF's approval.
- Keep dependencies up to date and prefer well-maintained libraries.
