import { GetFeedResponseInterface } from "./get-feed-responseI.iterface";

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}