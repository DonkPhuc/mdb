import axios from "axios";

export default defineEventHandler(async () => {
  try {
    // Gửi yêu cầu GET đến URL
    const { data } = await axios.get(
      "https://cphonex-be.onrender.com/v1/api/product"
    );
    return data ?? [];
  } catch (error) {
    // Xử lý lỗi nếu yêu cầu không thành công
    console.error("Đã xảy ra lỗi:", error);
    throw error; // Ném lỗi để xử lý ở nơi khác nếu cần
  }
});
