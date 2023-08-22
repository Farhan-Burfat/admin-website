import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import Chart from "../../components/chart/Chart"
import { userdata } from "../../dummyData"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import WidgetsSm from "../../components/widgetsSm/WidgetsSm"


export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userdata} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetsSm/>
            <WidgetsLg/>

        </div>
    </div>
  )
}
