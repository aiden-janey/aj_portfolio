import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [BioComponent, ProjectsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {

}
