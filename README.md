# Reproduction repo

This repository reproduces an issue we encountered mocking a service inside a dynamic module. Probably not a bug though, just an edge-case 🤔

To run this reproduction:

```sh
pnpm install
pnpm run test:e2e
```

You can play around with the `count` parameter of the dynamic module. If all modules have the same count, every test passes. If they differ one or more tests start failing.

We're assuming that there's multiple instances of the `SomeService` in the dependency tree, one for each unique config. Running `app.get(SomeService)` simply gets you _one_ instance, but it seems unpredictable which one.
