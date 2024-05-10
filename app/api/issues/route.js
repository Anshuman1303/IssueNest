import { Octokit } from "octokit";
export const POST = async (request) => {
  const accessToken = (await request.json()).accessToken;
  const octokit = new Octokit({
    auth: accessToken,
  });
  try {
    const res = await octokit.request("GET /issues", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return new Response(JSON.stringify(res.data));
  } catch (err) {
    console.log(err);
    return new Response(err, { status: err.status });
  }
};
