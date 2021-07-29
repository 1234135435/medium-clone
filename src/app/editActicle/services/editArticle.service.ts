import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { SaveArticleResponseInterface } from "src/app/shared/types/saveArticleResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class EditActicleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string, articleInput: ArticleInputInterface): Observable<ArticlesInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
      map((response: SaveArticleResponseInterface) => response.article)
    )
  }

}