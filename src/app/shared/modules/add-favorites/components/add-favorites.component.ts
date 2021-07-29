import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddToFavoritesAction } from "../store/actions/action";

@Component({
  selector: 'mc-add-favorites',
  templateUrl: './add-favorites.component.html'
})

export class AddToFavoritesComponent implements OnInit{
  
  @Input('isFavorited') isFavoritedProps: boolean
  @Input('articleSlug') articleSlugProps: string
  @Input('favoritesCount') favoritesCountProps: number

  favoritesCount: number
  isFavorited: boolean
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  handleLike() {
    this.store.dispatch(AddToFavoritesAction({isFavorited: this.isFavorited, slug: this.articleSlugProps}))
    if(this.isFavorited) {
      this.favoritesCount--
    } else {
      this.favoritesCount++
    }
    this.isFavorited = !this.isFavorited
  }
}