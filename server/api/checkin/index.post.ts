import axios from "axios";

export default defineEventHandler(async () => {
  try {
    // Token của bạn
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3MDg2ODU2NDUsImV4cCI6MTcwOTI5MDQ0NX0.1uvzfawZ87LCCSus-KKPytL5AC9nn-yfXGAFHuVktT8";

    // Dữ liệu bạn muốn gửi
    const postData = {
      user: {
        id: 17,
      },
    };

    // Cấu hình headers với Bearer token
    const config = {
      headers: {
        Authorization: token,
      },
    };

    // Gửi yêu cầu POST đến URL với Bearer token
    const { data } = await axios.post(
      "http://192.168.1.217:13000/api/workflows:trigger?triggerWorkflows=7og26w8p1rt",
      postData,
      config
    );

    return data ?? [];
  } catch (error) {
    // Xử lý lỗi nếu yêu cầu không thành công
    console.error("Đã xảy ra lỗi:", error);
    throw error; // Ném lỗi để xử lý ở nơi khác nếu cần
  }
});
