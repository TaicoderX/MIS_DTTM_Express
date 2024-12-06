
import Card from "@mui/material/Card";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import linearGradient from 'assets/theme/functions/linearGradient';
// Images
// import profile1 from "assets/images/profile-1.png";
import profile1 from "assets/images/goods.jpg";

import profile2 from "assets/images/goods.jpg";
import profile3 from "assets/images/goods.jpg";
import profile4 from "assets/images/goods.jpg";
// Vision UI Dashboard React components
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/employee/components/Header";
import colors from 'assets/theme/base/colors';
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import { useState } from "react";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Invoices from "layouts/billing/components/Invoices";
import Table from "examples/Tables/Table";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Overview() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  return (
    <DashboardLayout>
      <Header tabValue={tabValue} handleSetTabValue={handleSetTabValue} />
      {tabValue === 0 && (
        <Grid container spacing={3} mb="30px" mt>
          <Grid item xs={12} xl={12}>
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Đơn hàng cần giao
                  </VuiTypography>
                  <VuiTypography variant="body2" color="text" mb="10px">
                    Danh sách các đơn hàng đang chờ giao. Kiểm tra thông tin và Cập nhật đơn hàng.
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile1}
                      title="Đơn hàng A - Hà Nội đến TP.HCM"
                      description="Người nhận: Trần Thị Bo, SĐT: 0123456789"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="324 km"
                      timeEstimate="Dự kiến giao: 03 NOV 2:00 PM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile2}
                      title="Đơn hàng B - Đà Nẵng đến Hà Nội"
                      description="Người nhận: Lê Văn Can, SĐT: 0987654321"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="210 km"
                      timeEstimate="Dự kiến giao: 02 NOV 3:00 PM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile3}
                      title="Đơn hàng C - TP.HCM đến Bình Dương"
                      description="Người nhận: Nguyễn Thị E, SĐT: 0345678901"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="80 km"
                      timeEstimate="Dự kiến giao: 01 NOV 10:00 AM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile4}
                      title="Đơn hàng D - Hà Nội đến Hải Phòng"
                      description="Người nhận: Phạm Hữu K, SĐT: 0981234567"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="120 km"
                      timeEstimate="Dự kiến giao: 05 NOV 11:30 AM"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} mt="30px">
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile1}
                      title="Đơn hàng A - Hà Nội đến TP.HCM"
                      description="Người nhận: Trần Thị Bo, SĐT: 0123456789"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="324 km"
                      timeEstimate="Dự kiến giao: 03 NOV 2:00 PM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile2}
                      title="Đơn hàng B - Đà Nẵng đến Hà Nội"
                      description="Người nhận: Lê Văn Can, SĐT: 0987654321"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="210 km"
                      timeEstimate="Dự kiến giao: 02 NOV 3:00 PM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile3}
                      title="Đơn hàng C - TP.HCM đến Bình Dương"
                      description="Người nhận: Nguyễn Thị E, SĐT: 0345678901"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="80 km"
                      timeEstimate="Dự kiến giao: 01 NOV 10:00 AM"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile4}
                      title="Đơn hàng D - Hà Nội đến Hải Phòng"
                      description="Người nhận: Phạm Hữu K, SĐT: 0981234567"
                      action={{
                        type: "internal",
                        route: "/pages/orders/order-details",
                        color: "white",
                        label: "Xem chi tiết",
                        label2: "Cập nhật đơn",
                      }}
                      distance="120 km"
                      timeEstimate="Dự kiến giao: 05 NOV 11:30 AM"
                    />
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      )}


      {tabValue === 1 && (
        <><Grid container spacing={3} mb="30px" mt>

        </Grid><VuiBox my={3}>
            <Grid item xs={12} md={5}>
              <Invoices />
            </Grid>
          </VuiBox></>
      )}

      {tabValue === 2 && (
        <>
          <Grid item xs={12} xl={12}>
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Đơn trả hàng
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile1}
                      title="Đơn hàng #12345 - Giao hàng tới HCM"
                      description="dự kiến đến 10:30 - 20/10/2023"
                      status="Trả hàng"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}
                      distance="324 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile2}
                      title="Đơn hàng #12345 - Giao hàng tới HCM"
                      description="dự kiến đến 10:30 - 20/10/2023"
                      status="Đổi địa điểm giao hàng"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}

                      distance="600 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile3}
                      title="Đơn hàng #12345 - Giao hàng tới HCM"
                      description="dự kiến đến 10:30 - 20/10/2023"
                      status="Đổi địa điểm giao hàng"

                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}

                      distance="290 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile4}
                      title="Đơn hàng #12345 - Giao hàng tới HCM"
                      description="dự kiến đến 10:30 - 20/10/2023"
                      status="Đổi địa điểm giao hàng"

                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}
                      distance="290 km" />
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
          <Grid mt="30px">

            <BillingInformation />
          </Grid>
        </>
      )}

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
