import { connectToDB } from "@utils/database";
import Issue from "@models/issue";

export const GET = async () => {
  try {
    await connectToDB();
    const issues = Issue.find({});
    return new Response(JSON.stringify(issues), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Some error occurred.", { status: 500 });
  }
};
