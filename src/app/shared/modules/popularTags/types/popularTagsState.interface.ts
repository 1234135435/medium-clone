import { PopularTagsType } from "src/app/shared/types/popularType.type";

export interface PopularTagsStateInterface {
  data: PopularTagsType[] | null,
  error: string | null,
  isLoading: boolean
}