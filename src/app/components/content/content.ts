import { Component } from '@angular/core';
import { Profile } from "../profile/profile";
import { Experiences } from "../experiences/experiences";
import { Projects } from "../projects/projects";
import { Education } from "../education/education";
import { Articles } from "../articles/articles";
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-content',
  imports: [Profile, Experiences, Projects, Education, Articles, Skills],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
