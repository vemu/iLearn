import { Directive, HostListener, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @Input() value: string;

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('click') changeTheme() {

    if (this.value == 'pro') {
      this.document.body.style.setProperty('background-color', '#000');
    } else {
      this.document.body.style.setProperty('background-color', '#4E4E4E');
    }
  }
}
