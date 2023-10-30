export const LoginUser = async (Email,Password) => {
  try {
    let data = await fetch("https://emami-backend-indol.vercel.app/api/v1/Aut/Login", {
      method: "POST",
      body: JSON.stringify({ Email, Password }),
      headers: {
        "content-type": "application/json",
      },
    });
    data = await data.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const FetchRange = async (qr_code_name, startDate, endDate) => {
  console.log(qr_code_name, startDate, endDate);
  try {
    let data = await fetch(
      "https://emami-backend-indol.vercel.app/api/v1/Emami/FetchAll",
      {
        method: "POST",
        body: JSON.stringify({ qr_code_name, startDate, endDate }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    data = await data.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
