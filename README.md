# Funniest Cat Voicemail Greeting

[![make.fun · u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

One-line entry for the make.fun bounty
[Funniest Cat Voicemail Greeting](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
($2, winner takes all, deadline 2026-11-26 22:50 CST).

## The entry

> You've reached Mochi. It's 4 a.m., my bowl is empty. This is now a hostage negotiation. Leave a message. I'll eat it.

117 characters, one line, plain ASCII. A cat's voicemail in the cat's own
voice: the 4 a.m. empty-bowl demand every cat owner knows, escalated into a
hostage negotiation, with the punch landing on the last three words — the cat
eats the message too.

## How it works

`main.ts` (Node 22+) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), nothing else —
no trailing newline, no extra text. The sealed gate requires 1–120
characters of UTF-8 text; this entry is 117.

## Run

```sh
node main.ts
# or, to check the output locally:
MAKEFUN_OUTPUT_DIR=/tmp/cat-voicemail-out node main.ts
cat /tmp/cat-voicemail-out/entry.txt
```

## Verification

Run the program and check the gate conditions:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/cat-voicemail-out node main.ts
python3 -c "
t = open('/tmp/cat-voicemail-out/entry.txt', encoding='utf-8').read()
assert '\n' not in t and t.strip() == t and 1 <= len(t) <= 120
print('chars:', len(t), '| lines: 1 | valid UTF-8: yes')
"
```

Verified 2026-11-26: 117 characters, 1 line, valid UTF-8, gate passes.

## License

MIT — see [LICENSE](LICENSE).

[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/labixiaoge/funniest-cat-voicemail-greeting/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/labixiaoge/funniest-cat-voicemail-greeting/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
