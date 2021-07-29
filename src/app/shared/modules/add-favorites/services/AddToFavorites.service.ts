import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { GetArticleResponseInterface } from "src/app/shared/types/get-article-response.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}
  
  addToFavorites(slug: string): Observable<ArticlesInterface> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeAddToFavorites(slug: string): Observable<ArticlesInterface> {
    const url = this.getUrl(slug)
    return this.http.delete(url).pipe(map(this.getArticle))
  }
  
  private getUrl(slug: string) {
    return `${environment.apiUrl}/articles/${slug}/favorite` 
  }

  private getArticle(response: GetArticleResponseInterface): ArticlesInterface {
    return response.article
  }
}