import ErrorPage from "@/components/ErrorPage";
import { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/layout/app";

const UnkownPage: NextPageWithLayout = () => {
  return (
    <ErrorPage
      code={404}
      message={
        "Page not found."
      }
    />
  );
};

UnkownPage.getLayout = (p) => <AppLayout>{p}</AppLayout>;
export default UnkownPage;
