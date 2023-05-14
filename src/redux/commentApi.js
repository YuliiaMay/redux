import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://64511b10a3221969115af51b.mockapi.io/';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
    }),
  }),
});

export const {useGetCommentsQuery} = commentApi;
