import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangesHover]',
  standalone: true
})
export class ChangesHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Highlight the element when mouse enters
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // Remove the highlight when mouse leaves
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
