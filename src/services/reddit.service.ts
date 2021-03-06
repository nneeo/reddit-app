import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class RedditService{
  http: any;
  baseUrl: String;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = "https://www.reddit.com/r";
  }


  getPosts(cat, lim){
    return this.http.get(this.baseUrl+'/'+cat+'/top.json?limit='+lim)
      .map( res => res.json());
  }
}

