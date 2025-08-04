import axios, { AxiosResponse } from "axios";
import { RestResponse, StatisticsData } from "./entities";

export async function fetchStatisticsData(): Promise<StatisticsData[]> {
  const timestamp = Math.round(Date.now() / 1000) - 2678400;
  console.log(timestamp);
  const response: AxiosResponse<RestResponse<StatisticsData[]>> =
    await axios.get(
      `https://ws.lunarclient.top/api/analysis?after=${timestamp}`
    );
  return response.data.data!; // TODO: catch error
}
