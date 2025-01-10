import InputUrl from "../components/InputUrl";
import UrlCard from "../components/UrlCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-screen bg-custom-bg ">
      <InputUrl />
      {/* <UrlCard /> */}
    </div>
  );
};

export default Home;
