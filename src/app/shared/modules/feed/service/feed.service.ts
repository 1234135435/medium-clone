import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GetFeedResponseInterface } from "../type/get-feed-responseI.iterface";

@Injectable({
  providedIn: "root"
})
export class FeedService {

  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fudUrl = environment.apiUrl + url
    return this.http.get<GetFeedResponseInterface>(fudUrl)
  }
}