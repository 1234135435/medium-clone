import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";

export interface EditArticleStateInterface {
  isLoading: boolean,
  article: ArticlesInterface,
  isSubmitting: boolean,
  validationErrors: BackendErrorInterface | null
}