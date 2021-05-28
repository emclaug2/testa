import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ElementRef,
    Input,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar #pxbAppBar style="background-color: mediumpurple"
                     class="pxb-app-bar-content" 
                     [class.pxb-app-bar-sticky]="minHeight === currentHeight">
            <mat-toolbar-row>{{currentHeight}}</mat-toolbar-row>
        </mat-toolbar>        
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent {

    @ViewChild('pxbAppBar',  { read: ElementRef, static: false }) bar: ElementRef;

    @Input() maxHeight = 200;
    @Input() minHeight = 64;
    @Input() disable: boolean;

    // The thing that scrolls, we listen to this.
    @Input() scrollContainer: Element;
    @Input() scrollContainerClassName: { name: string, index: number };
    @Input() scrollContainerId: string;
    scrollEl;

    scrollAnimationEndDistance;
    currentHeight: number;
    defaultPaddingTop: number;
    scrollDistance = 0;
    toolbar: HTMLElement;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.maxHeight;
    }

    ngAfterViewInit():  void {
        this.toolbar = this.bar.nativeElement;
        this.currentHeight = this.maxHeight;
        this.toolbar.style.height = `${this.currentHeight}px`;
        this._setScrollEl();
        fromEvent(this.scrollEl, 'scroll')
            .subscribe((event: Event) => {
                this._resizeEl(event);
            });

        fromEvent(window, 'resize')
            .subscribe((event: Event) => {
                this._resizeEl(event);
            });
    }

    private _resizeEl(event: Event): void {
        if (this.disable) {
            return;
        }
        const el = this.scrollEl;
/*
        const isScrolledBottom = el.scrollHeight - el.scrollTop <= el.clientHeight
        console.log(el.scrollHeight - el.scrollTop);
        console.log(el.clientHeight);
        console.log(isScrolledBottom);
        if (isScrolledBottom) {
            this.toolbar.style.height = `${this.minHeight}px`;
            return;
        }

 */

        this.scrollAnimationEndDistance = Math.min(this.maxHeight, el.scrollHeight - el.offsetHeight);
        const scrollDistance = el.scrollTop;
        if (scrollDistance === 0) {
            this.currentHeight = this.maxHeight;
        }
        const scrollPercentage = scrollDistance / this.scrollAnimationEndDistance;
        if (scrollPercentage >= 1 && this.currentHeight === this.minHeight) {
            return; // Do nothing
        }
        if (scrollPercentage >= 1) {
            this.currentHeight = this.minHeight;
            this.toolbar.style.height = `${this.currentHeight}px`;
        } else {
            this.scrollDistance = Math.round(scrollDistance);
            this.currentHeight =
                Math.round(this.minHeight + (this.maxHeight - this.minHeight) * (1-scrollPercentage));
            this.toolbar.style.height = `${this.currentHeight}px`;
            if (this.currentHeight >= this.minHeight) {
                this.toolbar.style.marginTop = `${scrollDistance}px`;
            }
        }
        event.preventDefault();
        this._ref.detectChanges();
    }

    private _setScrollEl(): void {
        if (this.scrollContainer) {
            this.scrollEl = this.scrollContainer;
        } else if (this.scrollContainerId)  {
            this.scrollEl = document.getElementById(this.scrollContainerId);
        } else {
            this.scrollEl = document.getElementsByClassName
            (this.scrollContainerClassName.name)[this.scrollContainerClassName.index];
    }
}
