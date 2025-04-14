import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoding = navigation.state === "loding";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoding && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
