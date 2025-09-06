import { Component } from '@angular/core';
import { Profile } from "../profile/profile";
import { Experiences } from "../experiences/experiences";
import { Projects } from "../projects/projects";
import { Testimoniols } from "../testimoniols/testimoniols";
import { Education } from "../education/education";
import { Articles } from "../articles/articles";
import { Suscribe } from "../suscribe/suscribe";

@Component({
  selector: 'app-content',
  imports: [Profile, Experiences, Projects, Testimoniols, Education, Articles, Suscribe],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
