interface ITipyPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export type ApiResponse<T> = {
  success: string;
  data: T;
  message: string;
  pagination: 3;
};
