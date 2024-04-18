// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const shazamCoreApi = createApi({
//   reducerPath: "shazamCoreApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://shazam-core.p.rapidapi.com/v1",
//     prepareHeaders: (headers) => {
//       headers.set(
//         "X-RapidAPI-Key",
//         "f5add045ffmshdd02414960a8f35p19b67fjsn37cac1b63b32\n"
//       );
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => "/charts/world" }),
//     getSongDetails: builder.query({
//       query: ({ songid }) => `/tracks/details?track_id=${songid}`,
//     }),
//     getSongRelated: builder.query({
//       query: ({ songid }) => `/tracks/related?track_id=${songid}`,
//     }),
//     getArtistDetails: builder.query({
//       query: (artistId) => `/artists/details?artist_id=${artistId}`,
//     }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetSongDetailsQuery,
//   useGetSongRelatedQuery,
//   useGetArtistDetailsQuery,
// } = shazamCoreApi;

// test

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f5add045ffmshdd02414960a8f35p19b67fjsn37cac1b63b32\n"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/v1/charts/world" }),
    getSongsByGenre: builder.query({
      query: (genre) => `/v1/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/v2/artists/details?artist_id=${artistId}`,
    }),
    getSongByCountry: builder.query({
      query: (countryCode) => `/v1/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongsByGenreQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
