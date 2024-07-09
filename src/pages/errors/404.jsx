import ErrorPage from "../../components/ErrorPage";
const UnkownPage = () => {
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
