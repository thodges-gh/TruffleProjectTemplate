# Template for new Solidity Projects

This is a template project for easily creating new Solidity Truffle projects which include linting and coverage.

## Getting Started

Clone (or fork first) the repo.

Install dependencies (requires NPM to be installed already):

```
npm install
```

Make sure everything worked by compiling and test contracts:

```
npm test
```

## Tools

- [ESLint](https://github.com/eslint/eslint)
- [Ganache CLI](https://github.com/trufflesuite/ganache-cli)
- [solidity-coverage](https://github.com/sc-forks/solidity-coverage)
- [Solium](https://github.com/duaraghav8/Solium)
- [Truffle](https://github.com/trufflesuite/truffle)
- [truffle-flattener](https://github.com/nomiclabs/truffle-flattener)
- [Web3](https://github.com/ethereum/web3.js/)

## Scripts

### Deploying

Deploy contracts to the "development" network:

```
npm run deploy:dev
```

If deploying with [Remix](https://remix.ethereum.org), run the following for an easy-to-import contract located in the `flattened\` directory:

```
npm run flatten
```

### Linting

Linting is ran on JavaScript and Solidity code.

Show lint status:

```
npm run lint:all
```

Fix all:

```
npm run lint:all:fix
```

### Services

#### Ganache

Run Ganache on port 9045 for the "development" network:

```
npm run ganache
```

#### Truffle Console

Run Truffle Console on the "development" network:

```
npm run console
```

### Testing

Running typical tests:

```
npm test
```

Viewing Solidity test coverage:

```
npm run solcover
```