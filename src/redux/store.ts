// import { configureStore } from "@reduxjs/toolkit";
// import { baseApi } from "./baseApi";
// import { setupListeners } from "@reduxjs/toolkit/query";

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });

// setupListeners(store.dispatch);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;




import { walletApi } from "./walletApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // এখানে সব slice যোগ হবে
    [walletApi.reducerPath]: walletApi.reducer, // আমাদের walletApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(walletApi.middleware),
  // RTK Query middleware যোগ করতে হবে, যাতে API caching, polling, refetch কাজ করে
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


/* 
👉 Key points:

configureStore = Redux store তৈরি করে।

walletApi.reducer = RTK Query এর data/cache store করে।

walletApi.middleware = background re-fetching, cache invalidation ইত্যাদি enable করে।

RootState আর AppDispatch TypeScript এ type checking এর জন্য।
*/




/*

🔑 কিভাবে কাজ করে?

walletApi.ts → API service define করে + hook export করে।

store.ts → API reducer + middleware Redux store এ add করে।

Component এ → আপনি শুধু const [sendMoney] = useSendMoneyMutation() ইউজ করলে API call ready!



*/