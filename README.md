# gfea

A small product list built with Next.js and a GraphQL backend.

## Start in the browser (no setup needed)

### StackBlitz

Open the link from your invitation. Dependencies are installed and backend and frontend start automatically.

### GitHub Codespaces (fallback)

Open https://codespaces.new/ChurnM4c/gfea. You need a GitHub account. Backend and frontend start automatically and the app opens in a new browser tab. If it doesn't, open the **Ports** tab and click the globe icon next to port 3000. Don't run `npm start` yourself in a Codespace, the servers are already running.

To switch to an exercise, click the branch name in the bottom left corner, or run:

```bash
git checkout <branch>
```

The servers keep running and pick up the change. Reload the app tab if needed.

When you are done, delete the Codespace on https://github.com/codespaces so it doesn't use up your free quota.

## Start locally

Requires Node.js 24.

```bash
npm start
```

## URLs

| What     | URL                           |
| -------- | ----------------------------- |
| App      | http://localhost:3000         |
| GraphiQL | http://localhost:3000/graphql |

In StackBlitz and Codespaces, use the preview address instead of `http://localhost:3000`.
