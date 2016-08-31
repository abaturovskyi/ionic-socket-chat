import { Directive, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[chat-scroll]'
})
export class ChatScroll implements AfterViewInit, AfterViewChecked { // Scroll to bottom if new message
	private scrollHandler

  constructor(private element: ElementRef) {}

	ngAfterViewInit(){
    this.scrollHandler = this.element.nativeElement.getElementsByTagName("scroll-content")[0];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();        
  }

  scrollToBottom(){
		this.scrollHandler.scrollTop = this.scrollHandler.scrollHeight;
  }
}
