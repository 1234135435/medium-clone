import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { PopularTagsType } from "src/app/shared/types/popularType.type";
import { environment } from "src/environments/environment";
import { GetPopularTagsInterface } from "../types/popularTags.interface";

@Injectable()

export class PopularTagsService {
  
  constructor(private http: HttpClient) {}
  
  getPopularTags(): Observable<PopularTagsType[]> {
    const url = `${environment.apiUrl}/tags`
    return this.http.get(url).pipe(
      map((response: GetPopularTagsInterface) => {
        return response.tags
      })
    )
  }
}