import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isVisible: boolean = false;
  items: string[] = [' 1', ' 2', ' 3'];
  isHighlighted: boolean = false;
}