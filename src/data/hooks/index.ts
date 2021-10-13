import api from "../../../pages/api";

export const useGetData = () => {
  const getDataByTagAndId = async (tag: string, id?: number) => {
    try {
      if (id === undefined) {
        const responseTag = await api.get(`/${tag}`);
        console.log(responseTag.data);
        return responseTag.data;
      } else {
        const responseTagAndID = await api.get(`/${tag}/${id}`);
        console.log(responseTagAndID.data);
        return responseTagAndID.data;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    getDataByTagAndId,
  };
};
