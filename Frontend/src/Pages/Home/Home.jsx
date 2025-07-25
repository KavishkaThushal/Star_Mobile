import Slider from "../../Components/Home/slider_component/Slider";
import HomeAbout from "../../Components/Home/about_comonent/HomeAbout";
import CustomerComment from "../../Components/Home/customer_comment_component/CustomerComment";
import QualityAttributes from "../../Components/Home/quality_component/QualityAttributes";
import Services from "../../Components/Home/services_component/Services";

function Home() {
  return (
    <div className="fadeInUp">
      <Slider />
      <HomeAbout />
      <QualityAttributes />
      <Services />
      <CustomerComment />
    </div>
  );
}

export default Home;
