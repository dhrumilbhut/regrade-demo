# BehavTest demo: block the pull request that makes an AI feature worse

This repository shows the [BehavTest GitHub Action](https://github.com/dhrumilbhut/behavtest) (behavioral regression testing for AI applications; formerly Regrade) on a tiny support bot.

- `bot.mjs` is the "AI feature" (a table of answers standing in for an LLM and its prompt, so no API key is needed).
- `suite.mjs` is the BehavTest suite: six questions, each checked for its key fact.
- `behavtest.baseline.json` is the committed baseline: a compact record of a good run.
- `.github/workflows/behavtest.yml` runs the suite on every pull request, compares it with the baseline, writes the result to the job summary and a pull request comment, and fails the check when a case regresses.

See the pull requests for one change that passes and one that is blocked.

To refresh the baseline after an intended change:

```bash
npx behavtest run suite.mjs --repeat 3 --export behavtest.baseline.json --compact
```
