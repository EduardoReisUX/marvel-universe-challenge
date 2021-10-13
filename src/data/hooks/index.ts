import api from "../../../pages/api";

export const useGetData = () => {
  const getCharacters = async () => {
    try {
      const response = await api.get(`/characters`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getDataById = async (name: string, id: number) => {
    try {
      const response = await api.get(`/${name}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const searchCharacters = async (query: string) => {
    try {
      const response = await api.get(`/characters?nameStartsWith=${query}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    getCharacters,
    searchCharacters,
    getDataById,
  };
};
