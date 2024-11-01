import { API } from "../@libs/axios";
import { IMove } from "../@libs/types";

const _ENDPOINT = "/movies";

const getMovies = async (): Promise<IMove[]> => {
  const { data } = await API.get(_ENDPOINT);
  return data;
};

const getMoviesById = async (id: string): Promise<IMove> => {
  const { data } = await API.get(`${_ENDPOINT}/${id}`);
  return data;
};
const getByCategoryId = async (id: number): Promise<IMove[]> => {
  const { data } = await API.get(`${_ENDPOINT}?categoryId=${id}`);
  return data;
};

export const MoviesService = {
  getMovies,
  getMoviesById,
  getByCategoryId
};
