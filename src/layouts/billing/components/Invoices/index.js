import React from "react";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  // Dữ liệu hóa đơn mẫu (cần thay đổi theo dữ liệu thực tế)
  const invoices = [
    {
      date: "24/04/2024 - Người gửi: Nguyễn Thành Tài, Người nhận: Trần Thị B",
      id: "#INV-09876 - Đã giao",
      price: "750,000 VND",
    },
    {
      date: "25/04/2024 - Người gửi: Lê Văn C, Người nhận: Phạm Thị D",
      id: "#INV-09877 - Đã giao",
      price: "1,200,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    {
      date: "26/04/2024 - Người gửi: Nguyễn Thị E, Người nhận: Trần Văn F",
      id: "#INV-09878 - Đã giao",
      price: "2,500,000 VND",
    },
    
    // Thêm các hóa đơn khác nếu cần
  ];

  return (
    <Card id="invoices" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Hóa đơn
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          Xem tất cả
        </VuiButton>
      </VuiBox>
      <VuiBox p={3}>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {invoices.map((invoice, index) => (
            <Invoice
              key={index}
              date={invoice.date}
              id={invoice.id}
              price={invoice.price}
              noGutter={index === invoices.length - 1}
            />
          ))}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
