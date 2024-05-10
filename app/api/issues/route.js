import { useSession } from "next-auth/react";
import { Octokit } from "octokit";
export const POST = async (request) => {
  const accessToken = await request.json().accessToken;
  //   return new Response("JSON.stringify(res)");
  const octokit = new Octokit({
    auth: accessToken,
  });
  try {
    const res = await octokit.request("GET /issues", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(res);
    return new Response(JSON.stringify(res));
  } catch (err) {
    return new Response(JSON.stringify(err));
  }
};
