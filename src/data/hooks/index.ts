import api from "../../../pages/api";

export const useGetData = () => {
  const getDataByTagAndId = async (tag: string, id?: number) => {
    try {
      if (id === undefined || null) {
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

  const getAllByName = async (query: string) => {
    try {
      const responseCharacters = await api.get(
        `/characters?nameStartsWith=${query}`
      );

      const responseComics = await api.get(`/comics?titleStartsWith=${query}`);

      const responseEvents = await api.get(`/events?nameStartsWith=${query}`);

      const AllData = {
        characters: responseCharacters.data,
        comics: responseComics.data,
        events: responseEvents.data,
      };

      return AllData;
    } catch (err) {
      return err;
    }
  };

  return {
    getDataByTagAndId,
    getAllByName,
  };
};
