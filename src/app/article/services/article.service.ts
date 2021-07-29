import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient){}

  articleDelet(slug: string): Observable<{}> {
    const apiUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.delete<{}>(apiUrl)
  }
}