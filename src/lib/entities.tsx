export type StatisticsData = {
  userCount: number;
  onlineCount: number;
  timestamp: number;
};

export type RestResponse<T> = {
  code: number;
  data?: T;
  message: string;
};
