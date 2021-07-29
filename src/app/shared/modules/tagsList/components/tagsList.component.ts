import { Component, Input } from "@angular/core";
import { PopularTagsType } from "src/app/shared/types/popularType.type";

@Component({
  selector: 'mc-tags-list',
  templateUrl: './tagsList.component.html',
  styleUrls: ['./tagsList.component.scss']
})

export class TagsListComponent {
  @Input('tags') tagsProps: PopularTagsType[]
}