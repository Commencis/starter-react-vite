export type HomePageLoaderData = {
  data: string;
};

export async function homePageLoader(): Promise<HomePageLoaderData> {
  return { data: 'HomePage loader data' };
}
