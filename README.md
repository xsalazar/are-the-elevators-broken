# 🛗 Are The Elevators Broken

This repository contains the source code for the website [https://aretheelevatorsbroken.com](https://aretheelevatorsbroken.com).

This website allows for community report driven details about critical pedestrian infrastructure in Portland, OR.

The [Bob Stacey Crossing](https://en.wikipedia.org/wiki/Bob_Stacey_Crossing) provides a link over the trains that frequently block the Inner SE Portland streets. When these elevators are broken, it requires pedestrians to reroute far away to bypass them. This website allows for checking the status of the elevators before you arrive, so you can plan accordingly.

## Getting Started

This repository leverages [VSCode's devcontainer](https://code.visualstudio.com/docs/remote/containers) feature to ensure all necessary dependencies are available inside the container for development.

### Application

To get started, you will need to first download the supporting metadata, then install and start the project normally:

```bash
npm install && npm start
```

This will start the application on your local machine, running on [http://localhost:5173/](http://localhost:5173).

### Deployments

All application deployments are managed via GitHub Actions and the [`./.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) workflow.

Additionally, application dependencies are automatically managed and updated via Dependabot and the [`./.github/workflows/automerge-dependabot.yml`](./.github/workflows/automerge-dependabot.yml) workflow.
