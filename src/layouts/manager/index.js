import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import Projects from "layouts/manager/components/Projects";
import OrderOverview from "layouts/manager/components/OrderOverview";
import SatisfactionRate from "layouts/manager/components/SatisfactionRate";
import ReferralTracking from "layouts/manager/components/ReferralTracking";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/manager/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/manager/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/manager/data/barChartData";
import { barChartOptionsDashboard } from "layouts/manager/data/barChartOptions";
import { IoWallet, IoPeople, IoThumbsUp, IoCarSportSharp } from "react-icons/io5";
import { MdTwoWheeler } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Transactions from "layouts/billing/components/Transactions";



function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Đơn hàng giao đúng hạn", fontWeight: "regular" }}
                count="1,200"
                percentage={{ color: "success", text: "+15%" }}
                icon={{ color: "info", component: <FaCheckCircle size="20px" color="white" /> }} // Biểu tượng hoàn tất
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Tổng Doanh Thu", fontWeight: "regular" }}
                count="$150,000"
                percentage={{ color: "success", text: "+25%" }}
                icon={{ color: "info", component: <IoWallet size="20px" color="white" /> }} // Icon ví tiền
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Phản Hồi Khách Hàng" }}
                count="120"
                percentage={{ color: "success", text: "+10%" }}
                icon={{ color: "info", component: <IoThumbsUp size="20px" color="white" /> }} // Icon ngón tay cái
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Xe Đang Hoạt Động" }} // Thông tin bổ sung
                count="900"
                percentage={{ color: "success", text: "+8%" }}
                icon={{ color: "info", component: <MdTwoWheeler size="20px" color="white" /> }} // Icon xe hơi
              />
            </Grid>
          </Grid>

        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={6} xl={6}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3} alignItems="stretch"> {/* Đồng bộ chiều cao của các phần tử con */}
            <Grid item xs={12} lg={6} xl={7}>
              <Card sx={{ height: "100%" }}> {/* Đặt chiều cao 100% để tự động khớp với phần tử bên cạnh */}
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Tổng Quan Doanh Thu Tại Chi Nhánh Nha Trang
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2024
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "100%" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Card sx={{ height: "100%" }}> {/* Đặt chiều cao 100% để tự động khớp với phần tử bên cạnh */}
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px" /* Đặt chiều cao của biểu đồ bar */
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Dự đoán lượng khách hàng trong năm 2025
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23%){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last year
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Transactions />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
