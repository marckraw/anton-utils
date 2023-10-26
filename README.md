## What's inside?

This monorepo includes the following:

### Apps and Packages

?

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Useful commands

- `yarn build` - Build all packages
- `yarn dev` - Develop all packages
- `yarn lint` - Lint all packages
- `yarn test` - Lint all packages
- `yarn format` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `yarn release` - release with changeset

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

When making a pull request/pushing to branch, please include a changeset if you are adding a new feature or making a breaking change. This will allow us to version packages correctly.
To include a changeset, run `yarn changeset` and follow the prompts. This will create a new changeset file in the `.changeset` folder. Please commit this file with your changes.

Once this is done just push the changes to a branch and make a PR. Once the PR is merged, the changeset will be picked up by the CI and a new PR will be made with the changes applied.
When we merge this automated PR of versions, the packages will be published to the GitHub Package Registry.
