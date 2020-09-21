import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit(
  { auth: "TOKEN" },
);

const response = await octokit.request("GET /orgs/:org/repos", {
  org: "denosaurs",
});
console.log(response);
