import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="return-to-warehouse">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Thông tin đơn hàng cần trả lại kho
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Nguyễn Thành Tài"
            company="021421901205"
            email="123 Dương Quảng Hàm"
            vat="Đơn hàng từ Hà Nội đến TP.HCM"
          />
          <Bill
            name="Nguyễn Phương Tài"
            company="124812482142"
            email="234 Lê Văn Lương"
            vat="Đơn hàng từ Hải Phòng đến TP.HCM"
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Đơn hàng từ Quảng Ninh đến Đồng Nai"
            noGutter
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Đơn hàng từ Quảng Ninh đến Đồng Nai"
            noGutter
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Đơn hàng từ Quảng Ninh đến Đồng Nai"
            noGutter
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Đơn hàng từ Quảng Ninh đến Đồng Nai"
            noGutter
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Đơn hàng từ Quảng Ninh đến Đồng Nai"
            noGutter
          />
          
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
