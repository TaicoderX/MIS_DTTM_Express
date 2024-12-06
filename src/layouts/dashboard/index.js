import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

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
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";
// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  const [totalRevenue, setTotalRevenue] = useState(103430);
  const [dailyRevenue, setDailyRevenue] = useState(53000);
  const [usersCount, setUsersCount] = useState(2300);
  const [newClients, setNewClients] = useState(462);

  const barChartData = [
    { month: 'Jan', currentYear: 400, lastYear: 240 },
    { month: 'Feb', currentYear: 350, lastYear: 200 },
    { month: 'Mar', currentYear: 300, lastYear: 220 },
    { month: 'Apr', currentYear: 500, lastYear: 300 },
    { month: 'May', currentYear: 450, lastYear: 350 },
    { month: 'Jun', currentYear: 600, lastYear: 400 },
    // Thêm dữ liệu cho các tháng còn lại
  ];

  const updateValues = () => {
    // Tạo ngẫu nhiên giá trị tăng hoặc giảm vừa phải cho tổng doanh thu và doanh thu hàng ngày
    setTotalRevenue((prev) => {
      const change = Math.random() * 1000 - 500; // Tăng hoặc giảm ngẫu nhiên trong khoảng -500 đến +500
      return Math.max(0, prev + Math.round(change));
    });

    setDailyRevenue((prev) => {
      const change = Math.random() * 2000 - 1000; // Tăng hoặc giảm ngẫu nhiên trong khoảng -1000 đến +1000
      return Math.max(0, prev + Math.round(change));
    });

    // Số lượng người dùng chỉ tăng nhẹ
    setUsersCount((prev) => prev + Math.round(Math.random() * 10)); // Tăng nhẹ trong khoảng 0 đến 10

    setNewClients((prev) => {
      const change = Math.random() * 20 - 10; // Tăng hoặc giảm ngẫu nhiên trong khoảng -10 đến +10
      return Math.max(0, prev + Math.round(change));
    });
  };

  useEffect(() => {
    const interval = setInterval(updateValues, 2000); // Cập nhật mỗi 2 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Tổng Doanh Thu" }}
                count={`$${totalRevenue.toLocaleString()}`}
                percentage={{ color: "success", text: totalRevenue > 103430 ? "+5%" : "-5%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Doanh Thu Trong Ngày", fontWeight: "regular" }}
                count={`$${dailyRevenue.toLocaleString()}`}
                percentage={{ color: "success", text: dailyRevenue > 53000 ? "+55%" : "-55%" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Số Lượng Người Dùng" }}
                count={usersCount.toLocaleString()}
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Khách Hàng Mới" }}
                count={`+${newClients.toLocaleString()}`}
                percentage={{ color: "success", text: newClients > 462 ? "+10%" : "-10%" }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          {/* <Grid container spacing="18px"> */}
          {/* <Grid item xs={12} lg={12} xl={5}>
            </Grid> */}
          <Grid item xs={12} lg={6} xl={3}>
            <SatisfactionRate />
          </Grid>
          {/* <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid> */}
          {/* </Grid> */}
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3} alignItems="stretch"> {/* Đồng bộ chiều cao của các phần tử con */}
            <Grid item xs={12} lg={6} xl={7}>
              <Card sx={{ height: "100%" }}> {/* Đặt chiều cao 100% để tự động khớp với phần tử bên cạnh */}
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Tổng Quan Doanh Thu
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

        {/* <Grid container> */}
        <Grid mb={3} item xs={12} md={6} lg={8}>
          <Projects />
        </Grid>

      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
