import { ArticleStateInterface } from "src/app/article/type/articlesState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/store/types/createArticleState.interface";
import { EditArticleStateInterface } from "src/app/editActicle/store/types/editArticleState.interface";
import { SettingStateInterface } from "src/app/settings/store/types/settingState.interface";
import { UserProfileStateInterface } from "src/app/userProfile/types/userProfileState.interface";
import { FeedStateInterface } from "../modules/feed/type/feedState.interface";
import { PopularTagsStateInterface } from "../modules/popularTags/types/popularTagsState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagsStateInterface,
  article: ArticleStateInterface,
  createArticle: CreateArticleStateInterface,
  editArticle: EditArticleStateInterface,
  settings: SettingStateInterface,
  userProfile: UserProfileStateInterface
}