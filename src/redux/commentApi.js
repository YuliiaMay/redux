import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64511b10a3221969115af51b.mockapi.io/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT,
        method: "POST",
        body,
      }),
    }),
    updateComments: builder.mutation({
      query: ({id, ...body}) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useAddPostMutation, useUpdateCommentsMutation } = commentApi;
