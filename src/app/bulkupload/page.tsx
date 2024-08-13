import Bulkupload from "@/component/dashboarData/bultUpload";
import DashboardMainLayout from "../dashboard/page";
export default function home() {
  return (
    <>
      <DashboardMainLayout >
     <Bulkupload />
      </DashboardMainLayout>
    </>
  );
}