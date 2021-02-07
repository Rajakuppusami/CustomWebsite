import {
  Directive, DoCheck, ElementRef, EventEmitter, HostListener, Input, OnChanges,
  OnDestroy, OnInit, Output, Renderer2
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextStyleData } from './model/card-grid.model';
import { TextStyleEditorDialogComponent }
  from './text-style-editor-dialog/text-style-editor-dialog.component';

@Directive({
  selector: '[appTextEditor]'
})
export class TextEditorDirective implements OnInit, OnDestroy, OnChanges, DoCheck {

  // This is used to append button on hovor.
  // on click of button opens TextStyleEditorDialogComponent.
  // emit the change.
  @Input("textEditorData") textEditorData: TextStyleData;
  @Output() dataEmitter = new EventEmitter<TextStyleData>();

  isDialogBoxOpened: boolean = false;

  childDom: HTMLElement;

  constructor(private ele: ElementRef,
    private renderer: Renderer2,
    public dialog: MatDialog) {
    ele.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
    console.log("TextEditorDirective init");
  }

  ngOnDestroy(): void {
    console.log("TextEditorDirective destroy");
  }

  ngOnChanges(): void {
    console.log("TextEditorDirective onChange");
  }

  ngDoCheck(): void {
    console.log("TextEditorDirective DoCheck");
    this.dataEmitter.emit(this.textEditorData);
  }

  @HostListener('mouseenter')
  onMoveEnter() {
    console.log("mouse enter event by appTextEditor");
    console.log(this.textEditorData);
    this.childDom = this.createHTMLDom();
    this.renderer.listen(this.childDom, 'click', (event) => {
      this.isDialogBoxOpened = true;
      const dialogRef = this.dialog.open(TextStyleEditorDialogComponent, { data: this.textEditorData });
      dialogRef.afterClosed().subscribe(result => {
        this.isDialogBoxOpened = false;
        this.textEditorData = result;
        this.renderer.listen(this.childDom, 'click', (event) => {
          console.log("romoving listener");
        });
        this.renderer.removeChild(this.ele.nativeElement, this.childDom);
        console.log("Dialog result: " + this.textEditorData);
      });
    });
    this.renderer.appendChild(this.ele.nativeElement, this.childDom);
  }

  @HostListener('mouseleave')
  onMoveLeave() {
    console.log("mouse leave event by appTextEditor");
    this.dataEmitter.emit(this.textEditorData);
    if (!this.isDialogBoxOpened) {
      console.log('Dialog is opened')
      this.renderer.listen(this.childDom, 'click', (event) => {
        console.log("romoving listener");
      });
      this.renderer.removeChild(this.ele.nativeElement, this.childDom);
    }
  }

  createHTMLDom(): HTMLElement {
    let buttonDom = this.renderer.createElement("button");
    let text = this.renderer.createText("edit");
    this.renderer.appendChild(buttonDom, text);
    this.renderer.addClass(buttonDom, 'mat-fab');
    return buttonDom;
  }

}
