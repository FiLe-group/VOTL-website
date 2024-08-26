import ErrorPage from "@/components/ErrorPage";
import AppLayout from "@/components/layout/app";
import { NextPageWithLayout } from "./_app";

const ServerErrorPage: NextPageWithLayout = () => {
  return (
    <ErrorPage
      code={500}
      message={
        "Oh. It seems there is a 500 Internal Server Error. Please try again later!"
      }
    />
  );
};

ServerErrorPage.getLayout = (p) => <AppLayout>{p}</AppLayout>;
export default ServerErrorPage;
