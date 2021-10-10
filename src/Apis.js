export const index = async () => {
  try {
    const res = await getRequest("ville/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
