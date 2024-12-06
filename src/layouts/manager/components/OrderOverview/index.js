// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      {/* <VuiBox mb={3}>
        <Grid container spacing="18px">
          <Grid item xs={12} lg={6} xl={3}>
            <SatisfactionRate />
          </Grid>
        </Grid>
      </VuiBox> */}
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Tổng quan giao dịch vận chuyển
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <VuiTypography variant="button" color="text" fontWeight="medium" mr="2px">
              Hiện tại có 4 đơn hàng đang được vận chuyển
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>

      <VuiBox>
        <TimelineItem
          title="Đơn hàng A - Hà Nội đến TP.HCM"
          dateTime="01 NOV 10:30 AM"
          description="Người gửi: Nguyễn Văn A, Người nhận: Trần Thị B, Trạng thái: Đang vận chuyển"
        />
        <TimelineItem
          title="Đơn hàng B - Đà Nẵng đến Hà Nội"
          dateTime="02 NOV 1:15 PM"
          description="Người gửi: Lê Văn C, Người nhận: Phạm Thị D, Trạng thái: Đang vận chuyển"
        />
        <TimelineItem
          title="Đơn hàng C - TP.HCM đến Bình Dương"
          dateTime="05 NOV 4:45 PM"
          description="Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F, Trạng thái: Đã giao"
        />
        <TimelineItem
          title="Đơn hàng D - Quảng Ninh đến Hải Phòng"
          dateTime="10 NOV 8:00 AM"
          description="Người gửi: Phạm Minh G, Người nhận: Nguyễn Văn H, Trạng thái: Đã giao"
        />
      </VuiBox>

    </Card>
  );
}

export default OrdersOverview;
