import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="mt-16">
      <h1>Home Page</h1>
      <div className="flex">
        <Sidebar />
        <div>lorem1000</div>
      </div>
    </div>
  );
};

export default HomePage;
