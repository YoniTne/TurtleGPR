# Contributing Guide

This document sets out the working rules for the GPR project (ground-penetrating radar for detecting turtle nests, carried out for WWF). Please read it in full before your first contribution: most of these rules are enforced automatically by GitHub, and a rejected push or merge almost always comes from a step missed here.

## Project organization

The project is split into sub-groups, each responsible for its own folder:

| Sub-group | Folder | Branch prefix |
|---|---|---|
| G1 — *TBD* | `/group-1/` | `g1/` |
| G2 — *TBD* | `/group-2/` | `g2/` |
| G3 — *TBD* | `/group-3/` | `g3/` |

> ⚠️ The composition and role of the sub-groups are **temporary** and will be updated as the project evolves. The current list of members for each group is kept at the top of the `.github/CODEOWNERS` file.

## First-time setup

```bash
git clone <repo-url>
cd <repo-name>
git config commit.template .gitmessage
```

The last command enables the commit message template (see below). Run it once, in each clone of the repo.

## Ground rules

- **Nobody pushes directly to `main`**, including the project lead: everything goes through a pull request.
- **A PR must be reviewed and approved by a member of a different team** than the one that wrote it. This is enforced by the `.github/CODEOWNERS` file.
- **Force pushes** and deletion of `main` are blocked.
- **Never** push passwords, API keys or tokens to the repo.

## Workflow

### 1. Start from an up-to-date `main`

```bash
git checkout main
git pull
```

### 2. Create a branch

The branch name starts with your sub-group prefix, or with `fix/` or `doc/` for a cross-group fix or documentation:

```bash
git checkout -b g2/task-name
```

Examples: `g1/first-prototype`, `g3/data-loading`, `fix/readme-typo`, `doc/system-overview`.

If several people work on the same branch, do not use `git push --force`: fetch the others' work with `git pull` before pushing.

### 3. Commit

Commit messages follow this format:

```
<type>(<group>): <short summary>
```

- **type**: `feat` (new feature), `fix` (bug fix), `doc` (documentation), `test` (tests), `refactor` (restructuring without behavior change), `chore` (maintenance, configuration)
- **group**: `g1`, `g2` or `g3`, optional if the change spans several groups
- **summary**: 50 characters max, imperative mood, no trailing period

Examples:

```
feat(g2): add first prototype
fix(g3): fix file loading
doc: update README
```

If the change needs explaining, leave a blank line after the summary and describe the why and the what. The `.gitmessage` template is shown automatically with `git commit` (without `-m`).

Since every commit from every PR is kept in the history of `main`, clear messages really matter.

### 4. Open a pull request

Once your branch is pushed, open the PR directly on GitHub: go to the **Pull requests** tab, click **New pull request**, select `main` as the base and your branch as the compare branch, then click **Create pull request**.

The description template is filled in automatically: complete each section, and if the PR resolves an issue, add `Closes #number` so it closes on merge.

### 5. Review

- Review is automatically requested from members of the **other teams**.
- An approval from a member of your own team is not enough to unlock the merge.
- All comments must be **resolved** before merging.
- If you push new commits after an approval, **the approval is dismissed** and a new review is required.
- A PR that touches the folders of two teams must be approved by each of them.

As a reviewer: check that the change works, that it is understandable to someone from another team, and ask questions if it is not. It is also how everyone gets to understand the radar as a whole.

### 6. Merge

- Only **merge commits** are allowed (no squash or rebase), to keep the full history on `main`.
- The branch is deleted automatically after the merge.
- If GitHub says the branch is out of date, click **Update branch** before merging.

## Files and data

- **No large files** in the repo: raw radar measurements, videos and archives go on the project Drive (or in Git LFS if the group decides so). A file pushed by mistake stays in the history even after it is deleted.
- No executables, `.zip` archives or temporary files from your tools: check that `.gitignore` covers them before committing, and extend it if needed.
- Changes to the `.github/` folder (review rules, templates, workflows) are reviewed by the project lead.

## Versions

Versions are published as tags by the project lead only (`v*` tags are protected). Numbering follows the `vMAJOR.MINOR.PATCH` format:

| Stage | Example | Meaning |
|---|---|---|
| alpha | `v1.0.0-alpha.1` | Sub-systems tested separately, partially working |
| beta | `v1.0.0-beta.1` | Radar assembled and working end to end, bugs or tuning remaining |
| release candidate | `v1.0.0-rc.1` | Considered final, only fixes are accepted |
| stable | `v1.0.0` | Version delivered to WWF |

After a stable release: `v1.1.0` for a new feature, `v1.0.1` for a simple fix.

## License

By contributing, you agree that your work will be distributed under the licenses stated in the `LICENSE` file and the README (code, hardware and documentation may have different licenses).

## Questions

If you have a doubt, are stuck on a PR, or think a rule is not well suited, contact the project lead or open an issue with the `question` label.
