import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { environment } from "src/environments/environment";
import { ArticlesInterface } from "../types/articles.interface";
import { GetArticleResponseInterface } from "../types/get-article-response.interface";

@Injectable()
export class SharedArticleService {

  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticlesInterface> {
    const fudUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.get<GetArticleResponseInterface>(fudUrl)
    .pipe(map((respons: GetArticleResponseInterface) => respons.article))
  }
}