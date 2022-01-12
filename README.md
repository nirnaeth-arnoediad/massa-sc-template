# Hello world

Hello world project for massa's smart contracts development. This preset environment can be used to test and debug locally your smart contract before sending it to the [massa network](https://github.com/massalabs/massa).

## Init

You need node and yarn to initialise the project.

If you didn't init this project with npx, clone this repository.
Once this repository is cloned, run the following command in the cloned directory:

```bash
yarn install
```

> You can be sure to load the same versions as developers did with the `--frozen-lockfile` flag, or `--immutable` if you use yarn2

## Scripts

You can run scripts described in the package.json with `yarn run {script_name}`, if you're not confident with the package.json, take a minute to look on the [yarn documentation](https://classic.yarnpkg.com/lang/en/docs/cli/run/).

I'll describe the differents embeded scripts in this section and redirect to severals documentations if needed.

- **helloworld**: generate a .wasm file in a `build/` directory `src/helloworld.ts`. This is the helloworld smart contract example. If you look at this command line, you can see that we use the asc binary, this is the AssemblyScript compiler. Here is [the documentation](https://www.assemblyscript.org/introduction.html) if you want to know more.

- **replaceIncludes**: generate a `src/createSC.m.ts`. We want to replace the `include_base64('path.wasm')` with the real binary contained in `path.wasm` before compiling createSC.
- **buildSC**: compile `src/createSC.m.ts`
- **cleanSC**: remove temp file `src/createSC.m.ts`
- **createSC**: run **replaceIncludes**, **buildSC** and **cleanSC**

- **buildAll**: run **helloworld** and **createSC**

- **exec**: run **buildAll** and then execute the smart contract on a mock with the `massa-sc-test` binary. Look at the mock repository [here](https://github.com/massalabs/massa-sc-tester) for more informations about mocking the network.

- **buildTest**: Build mytest.ts
- **execTest**: Exec in the mocked network mytest.wasm

## Mocked ledger

Once you ran the **exec** script, you should see a new file in the directory named `ledger.json`. This file represent the local state of the ledger for your test. You can modify it manually (obviously, carrefully) to look at the state of the ledger after each execution.

>This mock doesn't manage like the real massa network backups when an execution failed for the moment. If you want to keep immutable the ledger make a copy before locally.

## Report an issue

If you get an issue whith `massa-sc-test` we would appreciate a report on the [dedicated repository](https://github.com/massalabs/massa-sc-tester/issues/new/choose). Use an appropriate language and explain step by step your problem with examples and screenshots.


---

[Massa](https://github.com/massalabs/massa)!
