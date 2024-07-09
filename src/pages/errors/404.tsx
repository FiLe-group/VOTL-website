import ErrorPage from "@/components/ErrorPage";
function UnkownPage() {
  return (
    <ErrorPage
      code={404}
      message={
        "Page not found."
      }
    />
  );
};

export default UnkownPage;
