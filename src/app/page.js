import BaseLayout from "@/components/layouts/BaseLayout";
import HomeComponents from "./_components/Home";

export default async function Home() {
  // const [githubUserPersonal, analyticsRes] = await Promise.all([
  //   getGithubUser("personal"),
  // ]);

  // const latestProjects = await getLatestProjects(5);

  // const fallback = {
  //   "/api/github?type=personal": githubUserPersonal?.data ?? null,
  //   "/api/projects/latest": latestProjects,
  // };

  // const [githubUserPersonal, latestProjects] = await Promise.all([
  //   getGithubUser("personal"),
  //   getLatestProjects(5),
  // ]);

  return (
    <BaseLayout
    // useDotPattern={true}
    >
      <HomeComponents />
    </BaseLayout>
  );
}
